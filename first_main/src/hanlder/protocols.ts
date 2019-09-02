/***********************************************************************/
/***************本代码由协议工具自动生成，请勿手动修改****************/
/************************ 协议版本号:#类型名称，注释 ******************************/
/***********************************************************************/
module hanlder{
	export class Protocols  extends core.net.Network {
		/*无效动作*/
		public static  MSG_NULL_ACTION :number = 0;	//null_action
		/*测试连接状态*/
		public static  MSG_PING_PONG :number = 1;	//ping_pong
		/*获得Session对象*/
		public static  CMSG_GET_SESSION :number = 2;	//get_session
		/*踢掉在线的准备强制登陆*/
		public static  CMSG_FORCED_INTO :number = 3;	//forced_into
		/*GM命令*/
		public static  CMSG_GM_COMMAND :number = 4;	//gm_command
		/*操作失败*/
		public static  SMSG_OPERATION_FAILED :number = 5;	//operation_failed
		/*同步时间*/
		public static  MSG_SYNC_MSTIME :number = 6;	//sync_mstime
		/*对象更新*/
		public static  SMSG_UD_OBJECT :number = 7;	//ud_object
		/*对象更新控制协议*/
		public static  CMSG_UD_CONTROL :number = 8;	//ud_control
		/*对象更新控制协议结果*/
		public static  SMSG_UD_CONTROL_RESULT :number = 9;	//ud_control_result
		/*地图网格对象更新*/
		public static  SMSG_GRID_UPDATE_DATA :number = 10;	//grid_update_data
		/*请求手机验证码*/
		public static  CMSG_GET_LOGIN_VF :number = 11;	//get_login_vf
		/*登录*/
		public static  CMSG_LOGIN :number = 12;	//login
		/*退出登录*/
		public static  CMSG_LOGOUT :number = 13;	//logout
		/*发言*/
		public static  CMSG_CHAT_SEND :number = 14;	//chat_send
		/*发言*/
		public static  SMSG_CHAT_INFO :number = 15;	//chat_info
		/*创建房间*/
		public static  CMSG_CREATE_ROOM :number = 16;	//create_room
		/*加入房间*/
		public static  CMSG_JOIN_ROOM :number = 17;	//join_room
		/*发起匹配*/
		public static  CMSG_MATCH_GAME :number = 18;	//match_game
		/*取消匹配*/
		public static  CMSG_CANCEL_MATCH :number = 19;	//cancel_match
		/*离开游戏*/
		public static  CMSG_LEAVE_GAME :number = 20;	//leave_game
		/*加入游戏结果*/
		public static  SMSG_JOIN_GAME_RESULT :number = 21;	//join_game_result
		/*换座*/
		public static  CMSG_SWITCH_SEAT :number = 22;	//switch_seat
		/*同步玩家信息不去开元同步钱*/
		public static  CMSG_SYNC_PLAYER_INFO :number = 23;	//sync_player_info
		/*请求同步金钱必须去开元同步钱*/
		public static  CMSG_SYNC_MONEY :number = 24;	//sync_money
		/*账号绑定*/
		public static  CMSG_BIND :number = 25;	//bind
		/*邮件查寻接口*/
		public static  CMSG_GET_MAILS :number = 26;	//get_mails
		/*获取公告*/
		public static  SMSG_SEND_NOTICES :number = 27;	//send_notices
		/*读邮件*/
		public static  CMSG_READ_MAIL :number = 28;	//read_mail
		/*删除邮件*/
		public static  CMSG_DEL_MAIL :number = 29;	//del_mail
		/*web同步时间*/
		public static  CMSG_SYNC_WEB_TIME :number = 30;	//sync_web_time
		/*获取验证码*/
		public static  CMSG_GET_BINDVF :number = 31;	//get_bindvf
		/*开始当前房间游戏*/
		public static  CMSG_START_ROOMCARD_GAME :number = 32;	//start_roomcard_game
		/*获取客服地址*/
		public static  CMSG_GET_SERVICE :number = 33;	//get_service
		/*重置密码验证码*/
		public static  CMSG_GET_RESET_CODE :number = 34;	//get_reset_code
		/*获取流水记录*/
		public static  CMSG_GET_BET_LIST :number = 35;	//get_bet_list
		/*重置密码*/
		public static  CMSG_RESET_PWD :number = 36;	//reset_pwd
		/*设置玩家信息*/
		public static  CMSG_SET_INFO :number = 37;	//set_info
		/*获取充值列表*/
		public static  CMSG_GET_PAYCHANNEL :number = 38;	//get_paychannel
		/*发起支付*/
		public static  CMSG_GOTO_PAY :number = 39;	//goto_pay
		/*获取取款列表*/
		public static  CMSG_GET_DRAWCHANNEL :number = 40;	//get_drawchannel
		/*发起取款*/
		public static  CMSG_GOTO_DRAW :number = 41;	//goto_draw
		/*绑定支付宝*/
		public static  CMSG_BINDALIPAY :number = 42;	//bindalipay
		/*绑定银行卡*/
		public static  CMSG_BINDBANK :number = 43;	//bindbank
		/*获取支付列表*/
		public static  CMSG_GET_PAYDRAWLIST :number = 44;	//get_paydrawlist
		/*修改取款密码*/
		public static  CMSG_CHANGEDRAWPWD :number = 45;	//changedrawpwd
		/*修改登陆密码*/
		public static  CMSG_CHANGEPWD :number = 46;	//changepwd
		/*获取玩家信息*/
		public static  CMSG_GET_PLAYERINFO :number = 47;	//get_playerinfo
		/*获取玩家最近签到信息*/
		public static  CMSG_GET_SIGININ :number = 48;	//get_siginin
		/*玩家签到*/
		public static  CMSG_SIGININ :number = 49;	//siginin
		/*获取签到配置信息*/
		public static  CMSG_GET_SIGNINCFG :number = 50;	//get_signincfg
		/*获取排行榜*/
		public static  CMSG_GET_RANKING_LIST :number = 51;	//get_ranking_list
		/*存入保险箱*/
		public static  CMSG_SAVEBOXIN :number = 52;	//saveboxin
		/*保险箱取出*/
		public static  CMSG_SAVEBOXOUT :number = 53;	//saveboxout
		/*保险箱存取记录查询*/
		public static  CMSG_GET_SAVEBOX_LIST :number = 54;	//get_savebox_list
		/*活动列表*/
		public static  CMSG_GET_ACTIVE_LIST :number = 55;	//get_active_list
		/*分享赚钱*/
		public static  CMSG_GET_AGENCYREPORT :number = 56;	//get_agencyreport
		/*佣金领取*/
		public static  CMSG_GET_RBMONEY :number = 57;	//get_rbmoney
		/*推广明细*/
		public static  CMSG_GET_AGENCYLVLIST :number = 58;	//get_agencylvlist
		/*获取转盘配置*/
		public static  CMSG_GET_TURNTABLECFG :number = 59;	//get_turntablecfg
		/*获取玩家当前积分余额信息*/
		public static  CMSG_GET_TURNTABLEINFO :number = 60;	//get_turntableinfo
		/*积分抽奖*/
		public static  CMSG_TURNTABLE :number = 61;	//turntable
		/*积分抽奖获奖记录*/
		public static  CMSG_GET_TURNTABLELIST :number = 62;	//get_turntablelist
		/*同步token*/
		public static  CMSG_SYNC_TOKEN :number = 63;	//sync_token
		/*我的分享*/
		public static  CMSG_GET_MYSHARE :number = 64;	//get_myshare
		/*分享奖励明细*/
		public static  CMSG_GET_AGRLASTWEEK :number = 65;	//get_agrlastweek
		/*分享奖励记录*/
		public static  CMSG_GET_RBMONEYLOG :number = 66;	//get_rbmoneylog
		/*每日分享*/
		public static  CMSG_GET_DAILYSHARE :number = 67;	//get_dailyshare
		/*客户端错误打印*/
		public static  CMSG_CLIENT_ERROR :number = 68;	//client_error
		/*金钱日志*/
		public static  CMSG_GET_MONEYLOG :number = 69;	//get_moneylog
		/*获取战斗日志*/
		public static  CMSG_GET_BATTLE_LOG :number = 70;	//get_battle_log
		/*获取水线*/
		public static  CMSG_GET_INVENTORY :number = 71;	//get_inventory
		/*获取随机名字*/
		public static  CMSG_GET_RAMDON_NAME :number = 72;	//get_ramdon_name
		/*下发随机名字包*/
		public static  SMSG_SEND_RAMDON_NAME :number = 73;	//send_ramdon_name
		/*获取房卡分享信息*/
		public static  CMSG_GET_ROOMCARD_SHARE :number = 74;	//get_roomcard_share
		/*优惠活动*/
		public static  CMSG_GET_PROMO_LIST :number = 75;	//get_promo_list
		/*跟注-炸金花*/
		public static  CMSG_ZHAJINHUA_CALL :number = 76;	//zhajinhua_call
		/*自动跟注-炸金花*/
		public static  CMSG_ZHAJINHUA_AUTO_CALL :number = 77;	//zhajinhua_auto_call
		/*加注-炸金花*/
		public static  CMSG_ZHAJINHUA_FILLING :number = 78;	//zhajinhua_filling
		/*看牌-炸金花*/
		public static  CMSG_ZHAJINHUA_SEE_CARD :number = 79;	//zhajinhua_see_card
		/*放弃-炸金花*/
		public static  CMSG_ZHAJINHUA_GIVE_UP :number = 80;	//zhajinhua_give_up
		/*开牌-炸金花*/
		public static  CMSG_ZHAJINHUA_COMPARE :number = 81;	//zhajinhua_compare
		/*准备游戏-牛牛*/
		public static  CMSG_NIUNIU_READY :number = 82;	//niuniu_ready
		/*游戏操作-牛牛抢庄*/
		public static  CMSG_NIUNIU_BANKER :number = 83;	//niuniu_banker
		/*游戏操作-牛牛下注*/
		public static  CMSG_NIUNIU_BET :number = 84;	//niuniu_bet
		/*游戏操作-牛牛拼牌*/
		public static  CMSG_NIUNIU_PINPAI :number = 85;	//niuniu_pinpai
		/*斗地主-准备*/
		public static  CMSG_DDZ_READY :number = 86;	//ddz_ready
		/*斗地主-明牌*/
		public static  CMSG_DDZ_MINGPAI :number = 87;	//ddz_mingpai
		/*斗地主-叫地主*/
		public static  CMSG_DDZ_JIAODIZHU :number = 88;	//ddz_jiaodizhu
		/*斗地主-不叫地主*/
		public static  CMSG_DDZ_JIAODIZHU_PASS :number = 89;	//ddz_jiaodizhu_pass
		/*斗地主-加倍*/
		public static  CMSG_DDZ_JIABEI :number = 90;	//ddz_jiabei
		/*斗地主-出牌*/
		public static  CMSG_DDZ_PLAY_CARD :number = 91;	//ddz_play_card
		/*斗地主-不出牌*/
		public static  CMSG_DDZ_PLAY_CARD_PASS :number = 92;	//ddz_play_card_pass
		/*斗地主-托管*/
		public static  CMSG_DDZ_TRUSTEESHIP :number = 93;	//ddz_trusteeship
		/*炸金花-继续游戏*/
		public static  CMSG_ZJH_CONTINUE :number = 94;	//zjh_continue
		/*牛牛-继续游戏*/
		public static  CMSG_NIUNIU_CONTINUE :number = 95;	//niuniu_continue
		/*炸金花-取消匹配*/
		public static  CMSG_ZJH_CANCEL_MATCHING :number = 96;	//zjh_cancel_matching
		/*牛牛-取消匹配*/
		public static  CMSG_NIUNIU_CANCEL_MATCHING :number = 97;	//niuniu_cancel_matching
		/*炸金花-离开地图*/
		public static  CMSG_ZJH_LEAVE_MAP :number = 98;	//zjh_leave_map
		/*21点-下注*/
		public static  CMSG_BLACKJACK_BET :number = 99;	//blackjack_bet
		/*21点-买保险*/
		public static  CMSG_BLACKJACK_BUY_INSURANCE :number = 100;	//blackjack_buy_insurance
		/*21点-续押*/
		public static  CMSG_BLACKJACK_EXTEND_BET :number = 101;	//blackjack_extend_bet
		/*21点-双倍下注*/
		public static  CMSG_BLACKJACK_BET_DOUBLE :number = 102;	//blackjack_bet_double
		/*21点-分牌*/
		public static  CMSG_BLACKJACK_PART_CARD :number = 103;	//blackjack_part_card
		/*21点-要牌*/
		public static  CMSG_BLACKJACK_ASK_CARD :number = 104;	//blackjack_ask_card
		/*21点-停牌*/
		public static  CMSG_BLACKJACK_STOP_CARD :number = 105;	//blackjack_stop_card
		/*21点-下注完成*/
		public static  CMSG_BLACKJACK_BET_COMPLETE :number = 106;	//blackjack_bet_complete
		/*通比牛牛-下注*/
		public static  CMSG_TBNIUNIU_BET :number = 107;	//tbniuniu_bet
		/*通比牛牛-摊牌*/
		public static  CMSG_TBNIUNIU_SHOWCARD :number = 108;	//tbniuniu_showcard
		/*通比牛牛-继续游戏*/
		public static  CMSG_TBNIUNIU_CONTINUE :number = 109;	//tbniuniu_continue
		/*通比牛牛-托管*/
		public static  CMSG_TBNIUNIU_TRUSTEESHIP :number = 110;	//tbniuniu_trusteeship
		/*游戏操作-百人牛牛下注*/
		public static  CMSG_BRNIUNIU_BET :number = 111;	//brniuniu_bet
		/*领取救济金*/
		public static  MSG_FISH_GET_DOLE :number = 112;	//fish_get_dole
		/*开火*/
		public static  CMSG_START_FIRE :number = 113;	//start_fire
		/*谁在开火用于播其他人动画*/
		public static  SMSG_START_FIRE_RESULT :number = 114;	//start_fire_result
		/*打中哪条鱼了由服务端决定有没有中奖*/
		public static  CMSG_FIRE_AT :number = 115;	//fire_at
		/*改变炮倍*/
		public static  CMSG_CHANGE_FIRE_LV :number = 116;	//change_fire_lv
		/*瞄准*/
		public static  CMSG_AIM_AT :number = 117;	//aim_at
		/*切换子弹状态*/
		public static  MSG_CHANGE_BULLET_STATE :number = 118;	//change_bullet_state
		/*捕鱼结果*/
		public static  MSG_FISH_RESULT :number = 119;	//fish_result
		/*百人牛牛-提前下庄*/
		public static  CMSG_BRNIUNIU_XIAZHUANG :number = 120;	//brniuniu_xiazhuang
		/*百人牛牛-申请上庄*/
		public static  CMSG_BRNIUNIU_SHANGZHUANG :number = 121;	//brniuniu_shangzhuang
		/*百人牛牛-点击入座*/
		public static  CMSG_BRNIUNIU_SEATED :number = 122;	//brniuniu_seated
		/*百人牛牛-获取所有地图信息*/
		public static  CMSG_BRNN_GET_MAPINFO :number = 123;	//brnn_get_mapinfo
		/*百人牛牛-返回地图信息*/
		public static  SMSG_BRNN_RETURN_MAPINFO :number = 124;	//brnn_return_mapinfo
		/*电鱼结果*/
		public static  SMSG_DIANYU_RESULT :number = 125;	//dianyu_result
		/*三公-抢庄*/
		public static  CMSG_SG_BANKER :number = 126;	//sg_banker
		/*三公-下注*/
		public static  CMSG_SG_BET :number = 127;	//sg_bet
		/*三公-摊牌*/
		public static  CMSG_SG_SHOW_CARDS :number = 128;	//sg_show_cards
		/*龙虎斗-下注*/
		public static  CMSG_LONGHU_BET :number = 129;	//longhu_bet
		/*龙虎斗-提前下庄*/
		public static  CMSG_LONGHU_XIAZHUANG :number = 130;	//longhu_xiazhuang
		/*龙虎斗-申请上庄*/
		public static  CMSG_LONGHU_SHANGZHUANG :number = 131;	//longhu_shangzhuang
		/*龙虎斗-点击入座*/
		public static  CMSG_LONGHU_SEATED :number = 132;	//longhu_seated
		/*龙虎斗-获取所有地图信息*/
		public static  CMSG_LONGHU_GET_MAPINFO :number = 133;	//longhu_get_mapinfo
		/*龙虎斗-返回地图信息*/
		public static  SMSG_LONGHU_RETURN_MAPINFO :number = 134;	//longhu_return_mapinfo
		/*二八杠-抢庄*/
		public static  CMSG_EBGANG_BANKER :number = 135;	//ebgang_banker
		/*二八杠-下注*/
		public static  CMSG_EBGANG_BET :number = 136;	//ebgang_bet
		/*红黑大战-下注*/
		public static  CMSG_HHDAZHAN_BET :number = 137;	//hhdazhan_bet
		/*红黑大战-点击入座*/
		public static  CMSG_HHDAZHAN_SEATED :number = 138;	//hhdazhan_seated
		/*抢庄牌九-抢庄*/
		public static  CMSG_QZPAIJIU_BANKER :number = 139;	//qzpaijiu_banker
		/*抢庄牌九-下注*/
		public static  CMSG_QZPAIJIU_BET :number = 140;	//qzpaijiu_bet
		/*水果机-下注*/
		public static  CMSG_SHUIGUOJI_BET :number = 141;	//shuiguoji_bet
		/*水果机-开奖*/
		public static  CMSG_SHUIGUOJI_LOTTERY :number = 142;	//shuiguoji_lottery
		/*水果机-结算*/
		public static  CMSG_SHUIGUOJI_RESULT :number = 143;	//shuiguoji_result
		/*机器人开火*/
		public static  CMSG_ROBOT_START_FIRE :number = 144;	//robot_start_fire
		/*打中哪条鱼了由服务端决定有没有中奖*/
		public static  CMSG_ROBOT_FIRE_AT :number = 145;	//robot_fire_at
		/*百家乐-下注*/
		public static  CMSG_BAIJIALE_BET :number = 146;	//baijiale_bet
		/*百家乐-点击入座*/
		public static  CMSG_BAIJIALE_SEATED :number = 147;	//baijiale_seated
		/*百家乐-获取所有地图信息*/
		public static  CMSG_BAIJIALE_GET_MAPINFO :number = 148;	//baijiale_get_mapinfo
		/*百家乐-返回地图信息*/
		public static  SMSG_BAIJIALE_RETURN_MAPINFO :number = 149;	//baijiale_return_mapinfo
		/*红黑大战-获取所有地图信息*/
		public static  CMSG_HHDZ_GET_MAPINFO :number = 150;	//hhdz_get_mapinfo
		/*红黑大战-返回地图信息*/
		public static  SMSG_HHDZ_RETURN_MAPINFO :number = 151;	//hhdz_return_mapinfo
		/*龙虎斗-更新大路信息*/
		public static  CMSG_LONGHU_UPDATE_ROAD :number = 152;	//longhu_update_road
		/*百家乐-更新大路信息*/
		public static  CMSG_BAIJIALE_UPDATE_ROAD :number = 153;	//baijiale_update_road
		/*十三水-出牌*/
		public static  CMSG_SHISANSHUI_PLAYING :number = 154;	//shisanshui_playing
		/*游戏操作-奔驰宝马下注*/
		public static  CMSG_BENCHIBAOMA_BET :number = 155;	//benchibaoma_bet
		/*奔驰宝马-点击入座*/
		public static  CMSG_BENCHIBAOMA_SEATED :number = 156;	//benchibaoma_seated
		/*奔驰宝马-获取所有地图信息*/
		public static  CMSG_BENCHIBAOMA_GET_MAPINFO :number = 157;	//benchibaoma_get_mapinfo
		/*奔驰宝马-返回地图信息*/
		public static  SMSG_BENCHIBAOMA_RETURN_MAPINFO :number = 158;	//benchibaoma_return_mapinfo
		/*百人德州-下注*/
		public static  CMSG_BAIRENDEZHOU_BET :number = 159;	//bairendezhou_bet
		/*百人德州-点击入座*/
		public static  CMSG_BAIRENDEZHOU_SEATED :number = 160;	//bairendezhou_seated
		/*百人德州-获取所有地图信息*/
		public static  CMSG_BAIRENDEZHOU_GET_MAPINFO :number = 161;	//bairendezhou_get_mapinfo
		/*百人德州-返回地图信息*/
		public static  SMSG_BAIRENDEZHOU_RETURN_MAPINFO :number = 162;	//bairendezhou_return_mapinfo
		/*骰宝-下注*/
		public static  CMSG_TOUBAO_BET :number = 163;	//toubao_bet
		/*骰宝-点击入座*/
		public static  CMSG_TOUBAO_SEATED :number = 164;	//toubao_seated
		/*红黑大战-更新大路信息*/
		public static  CMSG_HHDZ_UPDATE_ROAD :number = 165;	//hhdz_update_road
		/*百人德州-更新大路信息*/
		public static  CMSG_BAIRENDEZHOU_UPDATE_ROAD :number = 166;	//bairendezhou_update_road
		/*结束当前房间游戏*/
		public static  CMSG_END_ROOMCARD_GAME :number = 167;	//end_roomcard_game
		/*德州-跟注*/
		public static  CMSG_DEZHOU_BET :number = 168;	//dezhou_bet
		/*德州-加注*/
		public static  CMSG_DEZHOU_ADDBET :number = 169;	//dezhou_addbet
		/*德州-过牌*/
		public static  CMSG_DEZHOU_PASS :number = 170;	//dezhou_pass
		/*德州-弃牌*/
		public static  CMSG_DEZHOU_DISCARD :number = 171;	//dezhou_discard
		/*德州-带钱进房间*/
		public static  CMSG_DEZHOU_TAKE_MONEY_TO_ROOM :number = 172;	//dezhou_take_money_to_room
		/*投票是否同意结束房卡游戏*/
		public static  CMSG_VOTE_END_ROOMCARD :number = 173;	//vote_end_roomcard
		/*游戏操作-飞禽走兽下注*/
		public static  CMSG_ZOO_BET :number = 174;	//zoo_bet
		/*飞禽走兽-点击入座*/
		public static  CMSG_ZOO_SEATED :number = 175;	//zoo_seated
		/*飞禽走兽-获取所有地图信息*/
		public static  CMSG_ZOO_GET_MAPINFO :number = 176;	//zoo_get_mapinfo
		/*飞禽走兽-返回地图信息*/
		public static  SMSG_ZOO_RETURN_MAPINFO :number = 177;	//zoo_return_mapinfo
		/*德州-继续游戏*/
		public static  CMSG_DEZHOU_CONTINUE :number = 178;	//dezhou_continue
		/*查询app下载地址*/
		public static  CMSG_GET_APP_ADDR :number = 179;	//get_app_addr
		/*跑得快-出牌*/
		public static  CMSG_PDK_PLAY_CARD :number = 180;	//pdk_play_card
		/*跑得快-不出牌*/
		public static  CMSG_PDK_PASS_CARD :number = 181;	//pdk_pass_card
		/*跑得快-抢关*/
		public static  CMSG_PDK_QIANG_GUAN :number = 182;	//pdk_qiang_guan
		/*获取祈福列表*/
		public static  CMSG_GET_QIFU_LIST :number = 183;	//get_qifu_list
		/*玩家祈福*/
		public static  CMSG_PLAYER_QIFU :number = 184;	//player_qifu
		/*充值确认*/
		public static  CMSG_RECHARGE_CONFIRM :number = 185;	//recharge_confirm
		/*登录*/
		public static  CMSG_LOGIN_INVITE :number = 186;	//login_invite
		/*跑得快-托管*/
		public static  CMSG_PDK_TRUSTEESHIP :number = 187;	//pdk_trusteeship
		/*十三水-取消特殊牌*/
		public static  CMSG_SSS_CANCEL_SPECIAL :number = 188;	//sss_cancel_special
		/*四川麻将-换牌*/
		public static  CMSG_SCMJ_EXCHANGE :number = 189;	//scmj_exchange
		/*四川麻将-定缺*/
		public static  CMSG_SCMJ_SET_LACK :number = 190;	//scmj_set_lack
		/*四川麻将-打牌*/
		public static  CMSG_SCMJ_PLAY_CARD :number = 191;	//scmj_play_card
		/*四川麻将-胡*/
		public static  CMSG_SCMJ_HU :number = 192;	//scmj_hu
		/*四川麻将-杠*/
		public static  CMSG_SCMJ_GANG :number = 193;	//scmj_gang
		/*四川麻将-碰*/
		public static  CMSG_SCMJ_PENG :number = 194;	//scmj_peng
		/*四川麻将-过*/
		public static  CMSG_SCMJ_PASS :number = 195;	//scmj_pass
		/*代理用户*/
		public static  CMSG_GET_DAILI_YONGHU :number = 196;	//get_daili_yonghu
		/*登录*/
		public static  CMSG_LOGIN_PARAMETER :number = 197;	//login_parameter
		/*获取vip等级列表*/
		public static  CMSG_GET_VIP_LIST :number = 198;	//get_vip_list
		/*vip奖励领取*/
		public static  CMSG_GET_VIP_AWARD :number = 199;	//get_vip_award
		/*游戏操作-俄罗斯轮盘-下注*/
		public static  CMSG_ELUOSILUNPAN_BET :number = 200;	//eluosilunpan_bet
		/*俄罗斯轮盘-点击入座*/
		public static  CMSG_ELUOSILUNPAN_SEATED :number = 201;	//eluosilunpan_seated
		/*俄罗斯轮盘-获取所有地图信息*/
		public static  CMSG_ELUOSILUNPAN_GET_MAPINFO :number = 202;	//eluosilunpan_get_mapinfo
		/*俄罗斯轮盘-返回地图信息*/
		public static  SMSG_ELUOSILUNPAN_RETURN_MAPINFO :number = 203;	//eluosilunpan_return_mapinfo
		/*玩家签到*/
		public static  CMSG_SIGNIN :number = 204;	//signin
		/*每日分享*/
		public static  CMSG_NEW_DAILYSHARE :number = 205;	//new_dailyshare
		/*余额宝存入*/
		public static  CMSG_SAVE_YUEBAO :number = 206;	//save_yuebao
		/*余额宝取出*/
		public static  CMSG_TAKE_YUEBAO :number = 207;	//take_yuebao
		/*玩家祈福*/
		public static  CMSG_PLAYER_QIFU_NEW :number = 208;	//player_qifu_new
		/*vip奖励领取*/
		public static  CMSG_RECEIVE_VIP_AWARD :number = 209;	//receive_vip_award
		/*积分抽奖*/
		public static  CMSG_SCORE_LUCKY_DRAW :number = 210;	//score_lucky_draw
		/*绑定赠送*/
		public static  CMSG_GET_BIND_REWARD :number = 211;	//get_bind_reward
		/*佣金领取*/
		public static  CMSG_GET_COMMISSION :number = 212;	//get_commission
		/**/
		public static  CMSG_FREE_SYTLE_SYNC :number = 213;	//free_sytle_sync
		/*校验登录验证码*/
		public static  CMSG_CHECK_LOGIN_VF :number = 214;	//check_login_vf
		/*设置取款密码*/
		public static  CMSG_SET_MONEY_PWD :number = 215;	//set_money_pwd
		/*首充领取*/
		public static  CMSG_GET_FIRST_PAY :number = 216;	//get_first_pay
		/*设置人物信息*/
		public static  CMSG_SET_ROLE_INFO :number = 217;	//set_role_info
		/*消息公告获取*/
		public static  CMSG_GET_BULLETIN_LIST :number = 218;	//get_bulletin_list
		private _FUNCS:Object = new Object();	
		private _stream:ByteArray = new ByteArray;
	
		/**
		* 发送明文数据包（自动加密） 
		* @param stream
		*/
		constructor(v?:string){		
			super(v);
			this._FUNCS[0] = "null_action";
			this._FUNCS[1] = "ping_pong";
			this._FUNCS[2] = "get_session";
			this._FUNCS[3] = "forced_into";
			this._FUNCS[4] = "gm_command";
			this._FUNCS[5] = "operation_failed";
			this._FUNCS[6] = "sync_mstime";
			this._FUNCS[7] = "ud_object";
			this._FUNCS[8] = "ud_control";
			this._FUNCS[9] = "ud_control_result";
			this._FUNCS[10] = "grid_update_data";
			this._FUNCS[11] = "get_login_vf";
			this._FUNCS[12] = "login";
			this._FUNCS[13] = "logout";
			this._FUNCS[14] = "chat_send";
			this._FUNCS[15] = "chat_info";
			this._FUNCS[16] = "create_room";
			this._FUNCS[17] = "join_room";
			this._FUNCS[18] = "match_game";
			this._FUNCS[19] = "cancel_match";
			this._FUNCS[20] = "leave_game";
			this._FUNCS[21] = "join_game_result";
			this._FUNCS[22] = "switch_seat";
			this._FUNCS[23] = "sync_player_info";
			this._FUNCS[24] = "sync_money";
			this._FUNCS[25] = "bind";
			this._FUNCS[26] = "get_mails";
			this._FUNCS[27] = "send_notices";
			this._FUNCS[28] = "read_mail";
			this._FUNCS[29] = "del_mail";
			this._FUNCS[30] = "sync_web_time";
			this._FUNCS[31] = "get_bindvf";
			this._FUNCS[32] = "start_roomcard_game";
			this._FUNCS[33] = "get_service";
			this._FUNCS[34] = "get_reset_code";
			this._FUNCS[35] = "get_bet_list";
			this._FUNCS[36] = "reset_pwd";
			this._FUNCS[37] = "set_info";
			this._FUNCS[38] = "get_paychannel";
			this._FUNCS[39] = "goto_pay";
			this._FUNCS[40] = "get_drawchannel";
			this._FUNCS[41] = "goto_draw";
			this._FUNCS[42] = "bindalipay";
			this._FUNCS[43] = "bindbank";
			this._FUNCS[44] = "get_paydrawlist";
			this._FUNCS[45] = "changedrawpwd";
			this._FUNCS[46] = "changepwd";
			this._FUNCS[47] = "get_playerinfo";
			this._FUNCS[48] = "get_siginin";
			this._FUNCS[49] = "siginin";
			this._FUNCS[50] = "get_signincfg";
			this._FUNCS[51] = "get_ranking_list";
			this._FUNCS[52] = "saveboxin";
			this._FUNCS[53] = "saveboxout";
			this._FUNCS[54] = "get_savebox_list";
			this._FUNCS[55] = "get_active_list";
			this._FUNCS[56] = "get_agencyreport";
			this._FUNCS[57] = "get_rbmoney";
			this._FUNCS[58] = "get_agencylvlist";
			this._FUNCS[59] = "get_turntablecfg";
			this._FUNCS[60] = "get_turntableinfo";
			this._FUNCS[61] = "turntable";
			this._FUNCS[62] = "get_turntablelist";
			this._FUNCS[63] = "sync_token";
			this._FUNCS[64] = "get_myshare";
			this._FUNCS[65] = "get_agrlastweek";
			this._FUNCS[66] = "get_rbmoneylog";
			this._FUNCS[67] = "get_dailyshare";
			this._FUNCS[68] = "client_error";
			this._FUNCS[69] = "get_moneylog";
			this._FUNCS[70] = "get_battle_log";
			this._FUNCS[71] = "get_inventory";
			this._FUNCS[72] = "get_ramdon_name";
			this._FUNCS[73] = "send_ramdon_name";
			this._FUNCS[74] = "get_roomcard_share";
			this._FUNCS[75] = "get_promo_list";
			this._FUNCS[76] = "zhajinhua_call";
			this._FUNCS[77] = "zhajinhua_auto_call";
			this._FUNCS[78] = "zhajinhua_filling";
			this._FUNCS[79] = "zhajinhua_see_card";
			this._FUNCS[80] = "zhajinhua_give_up";
			this._FUNCS[81] = "zhajinhua_compare";
			this._FUNCS[82] = "niuniu_ready";
			this._FUNCS[83] = "niuniu_banker";
			this._FUNCS[84] = "niuniu_bet";
			this._FUNCS[85] = "niuniu_pinpai";
			this._FUNCS[86] = "ddz_ready";
			this._FUNCS[87] = "ddz_mingpai";
			this._FUNCS[88] = "ddz_jiaodizhu";
			this._FUNCS[89] = "ddz_jiaodizhu_pass";
			this._FUNCS[90] = "ddz_jiabei";
			this._FUNCS[91] = "ddz_play_card";
			this._FUNCS[92] = "ddz_play_card_pass";
			this._FUNCS[93] = "ddz_trusteeship";
			this._FUNCS[94] = "zjh_continue";
			this._FUNCS[95] = "niuniu_continue";
			this._FUNCS[96] = "zjh_cancel_matching";
			this._FUNCS[97] = "niuniu_cancel_matching";
			this._FUNCS[98] = "zjh_leave_map";
			this._FUNCS[99] = "blackjack_bet";
			this._FUNCS[100] = "blackjack_buy_insurance";
			this._FUNCS[101] = "blackjack_extend_bet";
			this._FUNCS[102] = "blackjack_bet_double";
			this._FUNCS[103] = "blackjack_part_card";
			this._FUNCS[104] = "blackjack_ask_card";
			this._FUNCS[105] = "blackjack_stop_card";
			this._FUNCS[106] = "blackjack_bet_complete";
			this._FUNCS[107] = "tbniuniu_bet";
			this._FUNCS[108] = "tbniuniu_showcard";
			this._FUNCS[109] = "tbniuniu_continue";
			this._FUNCS[110] = "tbniuniu_trusteeship";
			this._FUNCS[111] = "brniuniu_bet";
			this._FUNCS[112] = "fish_get_dole";
			this._FUNCS[113] = "start_fire";
			this._FUNCS[114] = "start_fire_result";
			this._FUNCS[115] = "fire_at";
			this._FUNCS[116] = "change_fire_lv";
			this._FUNCS[117] = "aim_at";
			this._FUNCS[118] = "change_bullet_state";
			this._FUNCS[119] = "fish_result";
			this._FUNCS[120] = "brniuniu_xiazhuang";
			this._FUNCS[121] = "brniuniu_shangzhuang";
			this._FUNCS[122] = "brniuniu_seated";
			this._FUNCS[123] = "brnn_get_mapinfo";
			this._FUNCS[124] = "brnn_return_mapinfo";
			this._FUNCS[125] = "dianyu_result";
			this._FUNCS[126] = "sg_banker";
			this._FUNCS[127] = "sg_bet";
			this._FUNCS[128] = "sg_show_cards";
			this._FUNCS[129] = "longhu_bet";
			this._FUNCS[130] = "longhu_xiazhuang";
			this._FUNCS[131] = "longhu_shangzhuang";
			this._FUNCS[132] = "longhu_seated";
			this._FUNCS[133] = "longhu_get_mapinfo";
			this._FUNCS[134] = "longhu_return_mapinfo";
			this._FUNCS[135] = "ebgang_banker";
			this._FUNCS[136] = "ebgang_bet";
			this._FUNCS[137] = "hhdazhan_bet";
			this._FUNCS[138] = "hhdazhan_seated";
			this._FUNCS[139] = "qzpaijiu_banker";
			this._FUNCS[140] = "qzpaijiu_bet";
			this._FUNCS[141] = "shuiguoji_bet";
			this._FUNCS[142] = "shuiguoji_lottery";
			this._FUNCS[143] = "shuiguoji_result";
			this._FUNCS[144] = "robot_start_fire";
			this._FUNCS[145] = "robot_fire_at";
			this._FUNCS[146] = "baijiale_bet";
			this._FUNCS[147] = "baijiale_seated";
			this._FUNCS[148] = "baijiale_get_mapinfo";
			this._FUNCS[149] = "baijiale_return_mapinfo";
			this._FUNCS[150] = "hhdz_get_mapinfo";
			this._FUNCS[151] = "hhdz_return_mapinfo";
			this._FUNCS[152] = "longhu_update_road";
			this._FUNCS[153] = "baijiale_update_road";
			this._FUNCS[154] = "shisanshui_playing";
			this._FUNCS[155] = "benchibaoma_bet";
			this._FUNCS[156] = "benchibaoma_seated";
			this._FUNCS[157] = "benchibaoma_get_mapinfo";
			this._FUNCS[158] = "benchibaoma_return_mapinfo";
			this._FUNCS[159] = "bairendezhou_bet";
			this._FUNCS[160] = "bairendezhou_seated";
			this._FUNCS[161] = "bairendezhou_get_mapinfo";
			this._FUNCS[162] = "bairendezhou_return_mapinfo";
			this._FUNCS[163] = "toubao_bet";
			this._FUNCS[164] = "toubao_seated";
			this._FUNCS[165] = "hhdz_update_road";
			this._FUNCS[166] = "bairendezhou_update_road";
			this._FUNCS[167] = "end_roomcard_game";
			this._FUNCS[168] = "dezhou_bet";
			this._FUNCS[169] = "dezhou_addbet";
			this._FUNCS[170] = "dezhou_pass";
			this._FUNCS[171] = "dezhou_discard";
			this._FUNCS[172] = "dezhou_take_money_to_room";
			this._FUNCS[173] = "vote_end_roomcard";
			this._FUNCS[174] = "zoo_bet";
			this._FUNCS[175] = "zoo_seated";
			this._FUNCS[176] = "zoo_get_mapinfo";
			this._FUNCS[177] = "zoo_return_mapinfo";
			this._FUNCS[178] = "dezhou_continue";
			this._FUNCS[179] = "get_app_addr";
			this._FUNCS[180] = "pdk_play_card";
			this._FUNCS[181] = "pdk_pass_card";
			this._FUNCS[182] = "pdk_qiang_guan";
			this._FUNCS[183] = "get_qifu_list";
			this._FUNCS[184] = "player_qifu";
			this._FUNCS[185] = "recharge_confirm";
			this._FUNCS[186] = "login_invite";
			this._FUNCS[187] = "pdk_trusteeship";
			this._FUNCS[188] = "sss_cancel_special";
			this._FUNCS[189] = "scmj_exchange";
			this._FUNCS[190] = "scmj_set_lack";
			this._FUNCS[191] = "scmj_play_card";
			this._FUNCS[192] = "scmj_hu";
			this._FUNCS[193] = "scmj_gang";
			this._FUNCS[194] = "scmj_peng";
			this._FUNCS[195] = "scmj_pass";
			this._FUNCS[196] = "get_daili_yonghu";
			this._FUNCS[197] = "login_parameter";
			this._FUNCS[198] = "get_vip_list";
			this._FUNCS[199] = "get_vip_award";
			this._FUNCS[200] = "eluosilunpan_bet";
			this._FUNCS[201] = "eluosilunpan_seated";
			this._FUNCS[202] = "eluosilunpan_get_mapinfo";
			this._FUNCS[203] = "eluosilunpan_return_mapinfo";
			this._FUNCS[204] = "signin";
			this._FUNCS[205] = "new_dailyshare";
			this._FUNCS[206] = "save_yuebao";
			this._FUNCS[207] = "take_yuebao";
			this._FUNCS[208] = "player_qifu_new";
			this._FUNCS[209] = "receive_vip_award";
			this._FUNCS[210] = "score_lucky_draw";
			this._FUNCS[211] = "get_bind_reward";
			this._FUNCS[212] = "get_commission";
			this._FUNCS[213] = "free_sytle_sync";
			this._FUNCS[214] = "check_login_vf";
			this._FUNCS[215] = "set_money_pwd";
			this._FUNCS[216] = "get_first_pay";
			this._FUNCS[217] = "set_role_info";
			this._FUNCS[218] = "get_bulletin_list";
		}
		/**
		* 获取发送协议函数名称
		* @param cmd:number
		*/		
		public getFuncName(cmd:number):string{
			if(this._FUNCS.hasOwnProperty(cmd.toString())){
				return this._FUNCS[cmd];
			}
			return null;
		}
		
		public readPacket(optcode:number, bs:ByteArray):any
		{
			switch (optcode) {
				case Protocols.MSG_NULL_ACTION :	//null_action
					var obj_null_action:both_null_action = new both_null_action;
					return obj_null_action;
				case Protocols.MSG_PING_PONG :	//ping_pong
					var obj_ping_pong:both_ping_pong = new both_ping_pong;
					return obj_ping_pong;
				case Protocols.CMSG_GET_SESSION :	//get_session
					var obj_get_session:c2s_get_session = new c2s_get_session;
					c2s_get_session .read(obj_get_session, bs);
					return obj_get_session;
				case Protocols.CMSG_FORCED_INTO :	//forced_into
					var obj_forced_into:c2s_forced_into = new c2s_forced_into;
					return obj_forced_into;
				case Protocols.CMSG_GM_COMMAND :	//gm_command
					var obj_gm_command:c2s_gm_command = new c2s_gm_command;
					c2s_gm_command .read(obj_gm_command, bs);
					return obj_gm_command;
				case Protocols.SMSG_OPERATION_FAILED :	//operation_failed
					var obj_operation_failed:s2c_operation_failed = new s2c_operation_failed;
					s2c_operation_failed .read(obj_operation_failed, bs);
					return obj_operation_failed;
				case Protocols.MSG_SYNC_MSTIME :	//sync_mstime
					var obj_sync_mstime:both_sync_mstime = new both_sync_mstime;
					both_sync_mstime .read(obj_sync_mstime, bs);
					return obj_sync_mstime;
				case Protocols.CMSG_UD_CONTROL :	//ud_control
					var obj_ud_control:c2s_ud_control = new c2s_ud_control;
					return obj_ud_control;
				case Protocols.CMSG_GET_LOGIN_VF :	//get_login_vf
					var obj_get_login_vf:c2s_get_login_vf = new c2s_get_login_vf;
					c2s_get_login_vf .read(obj_get_login_vf, bs);
					return obj_get_login_vf;
				case Protocols.CMSG_LOGIN :	//login
					var obj_login:c2s_login = new c2s_login;
					c2s_login .read(obj_login, bs);
					return obj_login;
				case Protocols.CMSG_LOGOUT :	//logout
					var obj_logout:c2s_logout = new c2s_logout;
					return obj_logout;
				case Protocols.CMSG_CHAT_SEND :	//chat_send
					var obj_chat_send:c2s_chat_send = new c2s_chat_send;
					c2s_chat_send .read(obj_chat_send, bs);
					return obj_chat_send;
				case Protocols.SMSG_CHAT_INFO :	//chat_info
					var obj_chat_info:s2c_chat_info = new s2c_chat_info;
					s2c_chat_info .read(obj_chat_info, bs);
					return obj_chat_info;
				case Protocols.CMSG_CREATE_ROOM :	//create_room
					var obj_create_room:c2s_create_room = new c2s_create_room;
					c2s_create_room .read(obj_create_room, bs);
					return obj_create_room;
				case Protocols.CMSG_JOIN_ROOM :	//join_room
					var obj_join_room:c2s_join_room = new c2s_join_room;
					c2s_join_room .read(obj_join_room, bs);
					return obj_join_room;
				case Protocols.CMSG_MATCH_GAME :	//match_game
					var obj_match_game:c2s_match_game = new c2s_match_game;
					c2s_match_game .read(obj_match_game, bs);
					return obj_match_game;
				case Protocols.CMSG_CANCEL_MATCH :	//cancel_match
					var obj_cancel_match:c2s_cancel_match = new c2s_cancel_match;
					return obj_cancel_match;
				case Protocols.CMSG_LEAVE_GAME :	//leave_game
					var obj_leave_game:c2s_leave_game = new c2s_leave_game;
					return obj_leave_game;
				case Protocols.SMSG_JOIN_GAME_RESULT :	//join_game_result
					var obj_join_game_result:s2c_join_game_result = new s2c_join_game_result;
					s2c_join_game_result .read(obj_join_game_result, bs);
					return obj_join_game_result;
				case Protocols.CMSG_SWITCH_SEAT :	//switch_seat
					var obj_switch_seat:c2s_switch_seat = new c2s_switch_seat;
					c2s_switch_seat .read(obj_switch_seat, bs);
					return obj_switch_seat;
				case Protocols.CMSG_SYNC_PLAYER_INFO :	//sync_player_info
					var obj_sync_player_info:c2s_sync_player_info = new c2s_sync_player_info;
					return obj_sync_player_info;
				case Protocols.CMSG_SYNC_MONEY :	//sync_money
					var obj_sync_money:c2s_sync_money = new c2s_sync_money;
					return obj_sync_money;
				case Protocols.CMSG_BIND :	//bind
					var obj_bind:c2s_bind = new c2s_bind;
					c2s_bind .read(obj_bind, bs);
					return obj_bind;
				case Protocols.CMSG_GET_MAILS :	//get_mails
					var obj_get_mails:c2s_get_mails = new c2s_get_mails;
					return obj_get_mails;
				case Protocols.SMSG_SEND_NOTICES :	//send_notices
					var obj_send_notices:s2c_send_notices = new s2c_send_notices;
					s2c_send_notices .read(obj_send_notices, bs);
					return obj_send_notices;
				case Protocols.CMSG_READ_MAIL :	//read_mail
					var obj_read_mail:c2s_read_mail = new c2s_read_mail;
					c2s_read_mail .read(obj_read_mail, bs);
					return obj_read_mail;
				case Protocols.CMSG_DEL_MAIL :	//del_mail
					var obj_del_mail:c2s_del_mail = new c2s_del_mail;
					c2s_del_mail .read(obj_del_mail, bs);
					return obj_del_mail;
				case Protocols.CMSG_SYNC_WEB_TIME :	//sync_web_time
					var obj_sync_web_time:c2s_sync_web_time = new c2s_sync_web_time;
					return obj_sync_web_time;
				case Protocols.CMSG_GET_BINDVF :	//get_bindvf
					var obj_get_bindvf:c2s_get_bindvf = new c2s_get_bindvf;
					c2s_get_bindvf .read(obj_get_bindvf, bs);
					return obj_get_bindvf;
				case Protocols.CMSG_START_ROOMCARD_GAME :	//start_roomcard_game
					var obj_start_roomcard_game:c2s_start_roomcard_game = new c2s_start_roomcard_game;
					c2s_start_roomcard_game .read(obj_start_roomcard_game, bs);
					return obj_start_roomcard_game;
				case Protocols.CMSG_GET_SERVICE :	//get_service
					var obj_get_service:c2s_get_service = new c2s_get_service;
					return obj_get_service;
				case Protocols.CMSG_GET_RESET_CODE :	//get_reset_code
					var obj_get_reset_code:c2s_get_reset_code = new c2s_get_reset_code;
					c2s_get_reset_code .read(obj_get_reset_code, bs);
					return obj_get_reset_code;
				case Protocols.CMSG_GET_BET_LIST :	//get_bet_list
					var obj_get_bet_list:c2s_get_bet_list = new c2s_get_bet_list;
					c2s_get_bet_list .read(obj_get_bet_list, bs);
					return obj_get_bet_list;
				case Protocols.CMSG_RESET_PWD :	//reset_pwd
					var obj_reset_pwd:c2s_reset_pwd = new c2s_reset_pwd;
					c2s_reset_pwd .read(obj_reset_pwd, bs);
					return obj_reset_pwd;
				case Protocols.CMSG_SET_INFO :	//set_info
					var obj_set_info:c2s_set_info = new c2s_set_info;
					c2s_set_info .read(obj_set_info, bs);
					return obj_set_info;
				case Protocols.CMSG_GET_PAYCHANNEL :	//get_paychannel
					var obj_get_paychannel:c2s_get_paychannel = new c2s_get_paychannel;
					c2s_get_paychannel .read(obj_get_paychannel, bs);
					return obj_get_paychannel;
				case Protocols.CMSG_GOTO_PAY :	//goto_pay
					var obj_goto_pay:c2s_goto_pay = new c2s_goto_pay;
					c2s_goto_pay .read(obj_goto_pay, bs);
					return obj_goto_pay;
				case Protocols.CMSG_GET_DRAWCHANNEL :	//get_drawchannel
					var obj_get_drawchannel:c2s_get_drawchannel = new c2s_get_drawchannel;
					return obj_get_drawchannel;
				case Protocols.CMSG_GOTO_DRAW :	//goto_draw
					var obj_goto_draw:c2s_goto_draw = new c2s_goto_draw;
					c2s_goto_draw .read(obj_goto_draw, bs);
					return obj_goto_draw;
				case Protocols.CMSG_BINDALIPAY :	//bindalipay
					var obj_bindalipay:c2s_bindalipay = new c2s_bindalipay;
					c2s_bindalipay .read(obj_bindalipay, bs);
					return obj_bindalipay;
				case Protocols.CMSG_BINDBANK :	//bindbank
					var obj_bindbank:c2s_bindbank = new c2s_bindbank;
					c2s_bindbank .read(obj_bindbank, bs);
					return obj_bindbank;
				case Protocols.CMSG_GET_PAYDRAWLIST :	//get_paydrawlist
					var obj_get_paydrawlist:c2s_get_paydrawlist = new c2s_get_paydrawlist;
					c2s_get_paydrawlist .read(obj_get_paydrawlist, bs);
					return obj_get_paydrawlist;
				case Protocols.CMSG_CHANGEDRAWPWD :	//changedrawpwd
					var obj_changedrawpwd:c2s_changedrawpwd = new c2s_changedrawpwd;
					c2s_changedrawpwd .read(obj_changedrawpwd, bs);
					return obj_changedrawpwd;
				case Protocols.CMSG_CHANGEPWD :	//changepwd
					var obj_changepwd:c2s_changepwd = new c2s_changepwd;
					c2s_changepwd .read(obj_changepwd, bs);
					return obj_changepwd;
				case Protocols.CMSG_GET_PLAYERINFO :	//get_playerinfo
					var obj_get_playerinfo:c2s_get_playerinfo = new c2s_get_playerinfo;
					return obj_get_playerinfo;
				case Protocols.CMSG_GET_SIGININ :	//get_siginin
					var obj_get_siginin:c2s_get_siginin = new c2s_get_siginin;
					return obj_get_siginin;
				case Protocols.CMSG_SIGININ :	//siginin
					var obj_siginin:c2s_siginin = new c2s_siginin;
					return obj_siginin;
				case Protocols.CMSG_GET_SIGNINCFG :	//get_signincfg
					var obj_get_signincfg:c2s_get_signincfg = new c2s_get_signincfg;
					return obj_get_signincfg;
				case Protocols.CMSG_GET_RANKING_LIST :	//get_ranking_list
					var obj_get_ranking_list:c2s_get_ranking_list = new c2s_get_ranking_list;
					c2s_get_ranking_list .read(obj_get_ranking_list, bs);
					return obj_get_ranking_list;
				case Protocols.CMSG_SAVEBOXIN :	//saveboxin
					var obj_saveboxin:c2s_saveboxin = new c2s_saveboxin;
					c2s_saveboxin .read(obj_saveboxin, bs);
					return obj_saveboxin;
				case Protocols.CMSG_SAVEBOXOUT :	//saveboxout
					var obj_saveboxout:c2s_saveboxout = new c2s_saveboxout;
					c2s_saveboxout .read(obj_saveboxout, bs);
					return obj_saveboxout;
				case Protocols.CMSG_GET_SAVEBOX_LIST :	//get_savebox_list
					var obj_get_savebox_list:c2s_get_savebox_list = new c2s_get_savebox_list;
					return obj_get_savebox_list;
				case Protocols.CMSG_GET_ACTIVE_LIST :	//get_active_list
					var obj_get_active_list:c2s_get_active_list = new c2s_get_active_list;
					return obj_get_active_list;
				case Protocols.CMSG_GET_AGENCYREPORT :	//get_agencyreport
					var obj_get_agencyreport:c2s_get_agencyreport = new c2s_get_agencyreport;
					return obj_get_agencyreport;
				case Protocols.CMSG_GET_RBMONEY :	//get_rbmoney
					var obj_get_rbmoney:c2s_get_rbmoney = new c2s_get_rbmoney;
					return obj_get_rbmoney;
				case Protocols.CMSG_GET_AGENCYLVLIST :	//get_agencylvlist
					var obj_get_agencylvlist:c2s_get_agencylvlist = new c2s_get_agencylvlist;
					return obj_get_agencylvlist;
				case Protocols.CMSG_GET_TURNTABLECFG :	//get_turntablecfg
					var obj_get_turntablecfg:c2s_get_turntablecfg = new c2s_get_turntablecfg;
					return obj_get_turntablecfg;
				case Protocols.CMSG_GET_TURNTABLEINFO :	//get_turntableinfo
					var obj_get_turntableinfo:c2s_get_turntableinfo = new c2s_get_turntableinfo;
					return obj_get_turntableinfo;
				case Protocols.CMSG_TURNTABLE :	//turntable
					var obj_turntable:c2s_turntable = new c2s_turntable;
					c2s_turntable .read(obj_turntable, bs);
					return obj_turntable;
				case Protocols.CMSG_GET_TURNTABLELIST :	//get_turntablelist
					var obj_get_turntablelist:c2s_get_turntablelist = new c2s_get_turntablelist;
					return obj_get_turntablelist;
				case Protocols.CMSG_SYNC_TOKEN :	//sync_token
					var obj_sync_token:c2s_sync_token = new c2s_sync_token;
					c2s_sync_token .read(obj_sync_token, bs);
					return obj_sync_token;
				case Protocols.CMSG_GET_MYSHARE :	//get_myshare
					var obj_get_myshare:c2s_get_myshare = new c2s_get_myshare;
					return obj_get_myshare;
				case Protocols.CMSG_GET_AGRLASTWEEK :	//get_agrlastweek
					var obj_get_agrlastweek:c2s_get_agrlastweek = new c2s_get_agrlastweek;
					return obj_get_agrlastweek;
				case Protocols.CMSG_GET_RBMONEYLOG :	//get_rbmoneylog
					var obj_get_rbmoneylog:c2s_get_rbmoneylog = new c2s_get_rbmoneylog;
					return obj_get_rbmoneylog;
				case Protocols.CMSG_GET_DAILYSHARE :	//get_dailyshare
					var obj_get_dailyshare:c2s_get_dailyshare = new c2s_get_dailyshare;
					return obj_get_dailyshare;
				case Protocols.CMSG_CLIENT_ERROR :	//client_error
					var obj_client_error:c2s_client_error = new c2s_client_error;
					c2s_client_error .read(obj_client_error, bs);
					return obj_client_error;
				case Protocols.CMSG_GET_MONEYLOG :	//get_moneylog
					var obj_get_moneylog:c2s_get_moneylog = new c2s_get_moneylog;
					c2s_get_moneylog .read(obj_get_moneylog, bs);
					return obj_get_moneylog;
				case Protocols.CMSG_GET_BATTLE_LOG :	//get_battle_log
					var obj_get_battle_log:c2s_get_battle_log = new c2s_get_battle_log;
					c2s_get_battle_log .read(obj_get_battle_log, bs);
					return obj_get_battle_log;
				case Protocols.CMSG_GET_INVENTORY :	//get_inventory
					var obj_get_inventory:c2s_get_inventory = new c2s_get_inventory;
					c2s_get_inventory .read(obj_get_inventory, bs);
					return obj_get_inventory;
				case Protocols.CMSG_GET_RAMDON_NAME :	//get_ramdon_name
					var obj_get_ramdon_name:c2s_get_ramdon_name = new c2s_get_ramdon_name;
					c2s_get_ramdon_name .read(obj_get_ramdon_name, bs);
					return obj_get_ramdon_name;
				case Protocols.SMSG_SEND_RAMDON_NAME :	//send_ramdon_name
					var obj_send_ramdon_name:s2c_send_ramdon_name = new s2c_send_ramdon_name;
					s2c_send_ramdon_name .read(obj_send_ramdon_name, bs);
					return obj_send_ramdon_name;
				case Protocols.CMSG_GET_ROOMCARD_SHARE :	//get_roomcard_share
					var obj_get_roomcard_share:c2s_get_roomcard_share = new c2s_get_roomcard_share;
					c2s_get_roomcard_share .read(obj_get_roomcard_share, bs);
					return obj_get_roomcard_share;
				case Protocols.CMSG_GET_PROMO_LIST :	//get_promo_list
					var obj_get_promo_list:c2s_get_promo_list = new c2s_get_promo_list;
					return obj_get_promo_list;
				case Protocols.CMSG_ZHAJINHUA_CALL :	//zhajinhua_call
					var obj_zhajinhua_call:c2s_zhajinhua_call = new c2s_zhajinhua_call;
					return obj_zhajinhua_call;
				case Protocols.CMSG_ZHAJINHUA_AUTO_CALL :	//zhajinhua_auto_call
					var obj_zhajinhua_auto_call:c2s_zhajinhua_auto_call = new c2s_zhajinhua_auto_call;
					return obj_zhajinhua_auto_call;
				case Protocols.CMSG_ZHAJINHUA_FILLING :	//zhajinhua_filling
					var obj_zhajinhua_filling:c2s_zhajinhua_filling = new c2s_zhajinhua_filling;
					c2s_zhajinhua_filling .read(obj_zhajinhua_filling, bs);
					return obj_zhajinhua_filling;
				case Protocols.CMSG_ZHAJINHUA_SEE_CARD :	//zhajinhua_see_card
					var obj_zhajinhua_see_card:c2s_zhajinhua_see_card = new c2s_zhajinhua_see_card;
					return obj_zhajinhua_see_card;
				case Protocols.CMSG_ZHAJINHUA_GIVE_UP :	//zhajinhua_give_up
					var obj_zhajinhua_give_up:c2s_zhajinhua_give_up = new c2s_zhajinhua_give_up;
					return obj_zhajinhua_give_up;
				case Protocols.CMSG_ZHAJINHUA_COMPARE :	//zhajinhua_compare
					var obj_zhajinhua_compare:c2s_zhajinhua_compare = new c2s_zhajinhua_compare;
					c2s_zhajinhua_compare .read(obj_zhajinhua_compare, bs);
					return obj_zhajinhua_compare;
				case Protocols.CMSG_NIUNIU_READY :	//niuniu_ready
					var obj_niuniu_ready:c2s_niuniu_ready = new c2s_niuniu_ready;
					return obj_niuniu_ready;
				case Protocols.CMSG_NIUNIU_BANKER :	//niuniu_banker
					var obj_niuniu_banker:c2s_niuniu_banker = new c2s_niuniu_banker;
					c2s_niuniu_banker .read(obj_niuniu_banker, bs);
					return obj_niuniu_banker;
				case Protocols.CMSG_NIUNIU_BET :	//niuniu_bet
					var obj_niuniu_bet:c2s_niuniu_bet = new c2s_niuniu_bet;
					c2s_niuniu_bet .read(obj_niuniu_bet, bs);
					return obj_niuniu_bet;
				case Protocols.CMSG_NIUNIU_PINPAI :	//niuniu_pinpai
					var obj_niuniu_pinpai:c2s_niuniu_pinpai = new c2s_niuniu_pinpai;
					return obj_niuniu_pinpai;
				case Protocols.CMSG_DDZ_READY :	//ddz_ready
					var obj_ddz_ready:c2s_ddz_ready = new c2s_ddz_ready;
					return obj_ddz_ready;
				case Protocols.CMSG_DDZ_MINGPAI :	//ddz_mingpai
					var obj_ddz_mingpai:c2s_ddz_mingpai = new c2s_ddz_mingpai;
					return obj_ddz_mingpai;
				case Protocols.CMSG_DDZ_JIAODIZHU :	//ddz_jiaodizhu
					var obj_ddz_jiaodizhu:c2s_ddz_jiaodizhu = new c2s_ddz_jiaodizhu;
					return obj_ddz_jiaodizhu;
				case Protocols.CMSG_DDZ_JIAODIZHU_PASS :	//ddz_jiaodizhu_pass
					var obj_ddz_jiaodizhu_pass:c2s_ddz_jiaodizhu_pass = new c2s_ddz_jiaodizhu_pass;
					return obj_ddz_jiaodizhu_pass;
				case Protocols.CMSG_DDZ_JIABEI :	//ddz_jiabei
					var obj_ddz_jiabei:c2s_ddz_jiabei = new c2s_ddz_jiabei;
					c2s_ddz_jiabei .read(obj_ddz_jiabei, bs);
					return obj_ddz_jiabei;
				case Protocols.CMSG_DDZ_PLAY_CARD :	//ddz_play_card
					var obj_ddz_play_card:c2s_ddz_play_card = new c2s_ddz_play_card;
					c2s_ddz_play_card .read(obj_ddz_play_card, bs);
					return obj_ddz_play_card;
				case Protocols.CMSG_DDZ_PLAY_CARD_PASS :	//ddz_play_card_pass
					var obj_ddz_play_card_pass:c2s_ddz_play_card_pass = new c2s_ddz_play_card_pass;
					return obj_ddz_play_card_pass;
				case Protocols.CMSG_DDZ_TRUSTEESHIP :	//ddz_trusteeship
					var obj_ddz_trusteeship:c2s_ddz_trusteeship = new c2s_ddz_trusteeship;
					return obj_ddz_trusteeship;
				case Protocols.CMSG_ZJH_CONTINUE :	//zjh_continue
					var obj_zjh_continue:c2s_zjh_continue = new c2s_zjh_continue;
					return obj_zjh_continue;
				case Protocols.CMSG_NIUNIU_CONTINUE :	//niuniu_continue
					var obj_niuniu_continue:c2s_niuniu_continue = new c2s_niuniu_continue;
					return obj_niuniu_continue;
				case Protocols.CMSG_ZJH_CANCEL_MATCHING :	//zjh_cancel_matching
					var obj_zjh_cancel_matching:c2s_zjh_cancel_matching = new c2s_zjh_cancel_matching;
					return obj_zjh_cancel_matching;
				case Protocols.CMSG_NIUNIU_CANCEL_MATCHING :	//niuniu_cancel_matching
					var obj_niuniu_cancel_matching:c2s_niuniu_cancel_matching = new c2s_niuniu_cancel_matching;
					return obj_niuniu_cancel_matching;
				case Protocols.CMSG_ZJH_LEAVE_MAP :	//zjh_leave_map
					var obj_zjh_leave_map:c2s_zjh_leave_map = new c2s_zjh_leave_map;
					return obj_zjh_leave_map;
				case Protocols.CMSG_BLACKJACK_BET :	//blackjack_bet
					var obj_blackjack_bet:c2s_blackjack_bet = new c2s_blackjack_bet;
					c2s_blackjack_bet .read(obj_blackjack_bet, bs);
					return obj_blackjack_bet;
				case Protocols.CMSG_BLACKJACK_BUY_INSURANCE :	//blackjack_buy_insurance
					var obj_blackjack_buy_insurance:c2s_blackjack_buy_insurance = new c2s_blackjack_buy_insurance;
					c2s_blackjack_buy_insurance .read(obj_blackjack_buy_insurance, bs);
					return obj_blackjack_buy_insurance;
				case Protocols.CMSG_BLACKJACK_EXTEND_BET :	//blackjack_extend_bet
					var obj_blackjack_extend_bet:c2s_blackjack_extend_bet = new c2s_blackjack_extend_bet;
					return obj_blackjack_extend_bet;
				case Protocols.CMSG_BLACKJACK_BET_DOUBLE :	//blackjack_bet_double
					var obj_blackjack_bet_double:c2s_blackjack_bet_double = new c2s_blackjack_bet_double;
					return obj_blackjack_bet_double;
				case Protocols.CMSG_BLACKJACK_PART_CARD :	//blackjack_part_card
					var obj_blackjack_part_card:c2s_blackjack_part_card = new c2s_blackjack_part_card;
					return obj_blackjack_part_card;
				case Protocols.CMSG_BLACKJACK_ASK_CARD :	//blackjack_ask_card
					var obj_blackjack_ask_card:c2s_blackjack_ask_card = new c2s_blackjack_ask_card;
					return obj_blackjack_ask_card;
				case Protocols.CMSG_BLACKJACK_STOP_CARD :	//blackjack_stop_card
					var obj_blackjack_stop_card:c2s_blackjack_stop_card = new c2s_blackjack_stop_card;
					return obj_blackjack_stop_card;
				case Protocols.CMSG_BLACKJACK_BET_COMPLETE :	//blackjack_bet_complete
					var obj_blackjack_bet_complete:c2s_blackjack_bet_complete = new c2s_blackjack_bet_complete;
					return obj_blackjack_bet_complete;
				case Protocols.CMSG_TBNIUNIU_BET :	//tbniuniu_bet
					var obj_tbniuniu_bet:c2s_tbniuniu_bet = new c2s_tbniuniu_bet;
					c2s_tbniuniu_bet .read(obj_tbniuniu_bet, bs);
					return obj_tbniuniu_bet;
				case Protocols.CMSG_TBNIUNIU_SHOWCARD :	//tbniuniu_showcard
					var obj_tbniuniu_showcard:c2s_tbniuniu_showcard = new c2s_tbniuniu_showcard;
					return obj_tbniuniu_showcard;
				case Protocols.CMSG_TBNIUNIU_CONTINUE :	//tbniuniu_continue
					var obj_tbniuniu_continue:c2s_tbniuniu_continue = new c2s_tbniuniu_continue;
					return obj_tbniuniu_continue;
				case Protocols.CMSG_TBNIUNIU_TRUSTEESHIP :	//tbniuniu_trusteeship
					var obj_tbniuniu_trusteeship:c2s_tbniuniu_trusteeship = new c2s_tbniuniu_trusteeship;
					return obj_tbniuniu_trusteeship;
				case Protocols.CMSG_BRNIUNIU_BET :	//brniuniu_bet
					var obj_brniuniu_bet:c2s_brniuniu_bet = new c2s_brniuniu_bet;
					c2s_brniuniu_bet .read(obj_brniuniu_bet, bs);
					return obj_brniuniu_bet;
				case Protocols.MSG_FISH_GET_DOLE :	//fish_get_dole
					var obj_fish_get_dole:both_fish_get_dole = new both_fish_get_dole;
					return obj_fish_get_dole;
				case Protocols.CMSG_START_FIRE :	//start_fire
					var obj_start_fire:c2s_start_fire = new c2s_start_fire;
					c2s_start_fire .read(obj_start_fire, bs);
					return obj_start_fire;
				case Protocols.SMSG_START_FIRE_RESULT :	//start_fire_result
					var obj_start_fire_result:s2c_start_fire_result = new s2c_start_fire_result;
					s2c_start_fire_result .read(obj_start_fire_result, bs);
					return obj_start_fire_result;
				case Protocols.CMSG_FIRE_AT :	//fire_at
					var obj_fire_at:c2s_fire_at = new c2s_fire_at;
					c2s_fire_at .read(obj_fire_at, bs);
					return obj_fire_at;
				case Protocols.CMSG_CHANGE_FIRE_LV :	//change_fire_lv
					var obj_change_fire_lv:c2s_change_fire_lv = new c2s_change_fire_lv;
					c2s_change_fire_lv .read(obj_change_fire_lv, bs);
					return obj_change_fire_lv;
				case Protocols.CMSG_AIM_AT :	//aim_at
					var obj_aim_at:c2s_aim_at = new c2s_aim_at;
					c2s_aim_at .read(obj_aim_at, bs);
					return obj_aim_at;
				case Protocols.MSG_CHANGE_BULLET_STATE :	//change_bullet_state
					var obj_change_bullet_state:both_change_bullet_state = new both_change_bullet_state;
					both_change_bullet_state .read(obj_change_bullet_state, bs);
					return obj_change_bullet_state;
				case Protocols.MSG_FISH_RESULT :	//fish_result
					var obj_fish_result:both_fish_result = new both_fish_result;
					both_fish_result .read(obj_fish_result, bs);
					return obj_fish_result;
				case Protocols.CMSG_BRNIUNIU_XIAZHUANG :	//brniuniu_xiazhuang
					var obj_brniuniu_xiazhuang:c2s_brniuniu_xiazhuang = new c2s_brniuniu_xiazhuang;
					return obj_brniuniu_xiazhuang;
				case Protocols.CMSG_BRNIUNIU_SHANGZHUANG :	//brniuniu_shangzhuang
					var obj_brniuniu_shangzhuang:c2s_brniuniu_shangzhuang = new c2s_brniuniu_shangzhuang;
					return obj_brniuniu_shangzhuang;
				case Protocols.CMSG_BRNIUNIU_SEATED :	//brniuniu_seated
					var obj_brniuniu_seated:c2s_brniuniu_seated = new c2s_brniuniu_seated;
					c2s_brniuniu_seated .read(obj_brniuniu_seated, bs);
					return obj_brniuniu_seated;
				case Protocols.CMSG_BRNN_GET_MAPINFO :	//brnn_get_mapinfo
					var obj_brnn_get_mapinfo:c2s_brnn_get_mapinfo = new c2s_brnn_get_mapinfo;
					return obj_brnn_get_mapinfo;
				case Protocols.SMSG_BRNN_RETURN_MAPINFO :	//brnn_return_mapinfo
					var obj_brnn_return_mapinfo:s2c_brnn_return_mapinfo = new s2c_brnn_return_mapinfo;
					s2c_brnn_return_mapinfo .read(obj_brnn_return_mapinfo, bs);
					return obj_brnn_return_mapinfo;
				case Protocols.SMSG_DIANYU_RESULT :	//dianyu_result
					var obj_dianyu_result:s2c_dianyu_result = new s2c_dianyu_result;
					s2c_dianyu_result .read(obj_dianyu_result, bs);
					return obj_dianyu_result;
				case Protocols.CMSG_SG_BANKER :	//sg_banker
					var obj_sg_banker:c2s_sg_banker = new c2s_sg_banker;
					c2s_sg_banker .read(obj_sg_banker, bs);
					return obj_sg_banker;
				case Protocols.CMSG_SG_BET :	//sg_bet
					var obj_sg_bet:c2s_sg_bet = new c2s_sg_bet;
					c2s_sg_bet .read(obj_sg_bet, bs);
					return obj_sg_bet;
				case Protocols.CMSG_SG_SHOW_CARDS :	//sg_show_cards
					var obj_sg_show_cards:c2s_sg_show_cards = new c2s_sg_show_cards;
					return obj_sg_show_cards;
				case Protocols.CMSG_LONGHU_BET :	//longhu_bet
					var obj_longhu_bet:c2s_longhu_bet = new c2s_longhu_bet;
					c2s_longhu_bet .read(obj_longhu_bet, bs);
					return obj_longhu_bet;
				case Protocols.CMSG_LONGHU_XIAZHUANG :	//longhu_xiazhuang
					var obj_longhu_xiazhuang:c2s_longhu_xiazhuang = new c2s_longhu_xiazhuang;
					return obj_longhu_xiazhuang;
				case Protocols.CMSG_LONGHU_SHANGZHUANG :	//longhu_shangzhuang
					var obj_longhu_shangzhuang:c2s_longhu_shangzhuang = new c2s_longhu_shangzhuang;
					return obj_longhu_shangzhuang;
				case Protocols.CMSG_LONGHU_SEATED :	//longhu_seated
					var obj_longhu_seated:c2s_longhu_seated = new c2s_longhu_seated;
					c2s_longhu_seated .read(obj_longhu_seated, bs);
					return obj_longhu_seated;
				case Protocols.CMSG_LONGHU_GET_MAPINFO :	//longhu_get_mapinfo
					var obj_longhu_get_mapinfo:c2s_longhu_get_mapinfo = new c2s_longhu_get_mapinfo;
					return obj_longhu_get_mapinfo;
				case Protocols.SMSG_LONGHU_RETURN_MAPINFO :	//longhu_return_mapinfo
					var obj_longhu_return_mapinfo:s2c_longhu_return_mapinfo = new s2c_longhu_return_mapinfo;
					s2c_longhu_return_mapinfo .read(obj_longhu_return_mapinfo, bs);
					return obj_longhu_return_mapinfo;
				case Protocols.CMSG_EBGANG_BANKER :	//ebgang_banker
					var obj_ebgang_banker:c2s_ebgang_banker = new c2s_ebgang_banker;
					c2s_ebgang_banker .read(obj_ebgang_banker, bs);
					return obj_ebgang_banker;
				case Protocols.CMSG_EBGANG_BET :	//ebgang_bet
					var obj_ebgang_bet:c2s_ebgang_bet = new c2s_ebgang_bet;
					c2s_ebgang_bet .read(obj_ebgang_bet, bs);
					return obj_ebgang_bet;
				case Protocols.CMSG_HHDAZHAN_BET :	//hhdazhan_bet
					var obj_hhdazhan_bet:c2s_hhdazhan_bet = new c2s_hhdazhan_bet;
					c2s_hhdazhan_bet .read(obj_hhdazhan_bet, bs);
					return obj_hhdazhan_bet;
				case Protocols.CMSG_HHDAZHAN_SEATED :	//hhdazhan_seated
					var obj_hhdazhan_seated:c2s_hhdazhan_seated = new c2s_hhdazhan_seated;
					c2s_hhdazhan_seated .read(obj_hhdazhan_seated, bs);
					return obj_hhdazhan_seated;
				case Protocols.CMSG_QZPAIJIU_BANKER :	//qzpaijiu_banker
					var obj_qzpaijiu_banker:c2s_qzpaijiu_banker = new c2s_qzpaijiu_banker;
					c2s_qzpaijiu_banker .read(obj_qzpaijiu_banker, bs);
					return obj_qzpaijiu_banker;
				case Protocols.CMSG_QZPAIJIU_BET :	//qzpaijiu_bet
					var obj_qzpaijiu_bet:c2s_qzpaijiu_bet = new c2s_qzpaijiu_bet;
					c2s_qzpaijiu_bet .read(obj_qzpaijiu_bet, bs);
					return obj_qzpaijiu_bet;
				case Protocols.CMSG_SHUIGUOJI_BET :	//shuiguoji_bet
					var obj_shuiguoji_bet:c2s_shuiguoji_bet = new c2s_shuiguoji_bet;
					c2s_shuiguoji_bet .read(obj_shuiguoji_bet, bs);
					return obj_shuiguoji_bet;
				case Protocols.CMSG_SHUIGUOJI_LOTTERY :	//shuiguoji_lottery
					var obj_shuiguoji_lottery:c2s_shuiguoji_lottery = new c2s_shuiguoji_lottery;
					c2s_shuiguoji_lottery .read(obj_shuiguoji_lottery, bs);
					return obj_shuiguoji_lottery;
				case Protocols.CMSG_SHUIGUOJI_RESULT :	//shuiguoji_result
					var obj_shuiguoji_result:c2s_shuiguoji_result = new c2s_shuiguoji_result;
					return obj_shuiguoji_result;
				case Protocols.CMSG_ROBOT_START_FIRE :	//robot_start_fire
					var obj_robot_start_fire:c2s_robot_start_fire = new c2s_robot_start_fire;
					c2s_robot_start_fire .read(obj_robot_start_fire, bs);
					return obj_robot_start_fire;
				case Protocols.CMSG_ROBOT_FIRE_AT :	//robot_fire_at
					var obj_robot_fire_at:c2s_robot_fire_at = new c2s_robot_fire_at;
					c2s_robot_fire_at .read(obj_robot_fire_at, bs);
					return obj_robot_fire_at;
				case Protocols.CMSG_BAIJIALE_BET :	//baijiale_bet
					var obj_baijiale_bet:c2s_baijiale_bet = new c2s_baijiale_bet;
					c2s_baijiale_bet .read(obj_baijiale_bet, bs);
					return obj_baijiale_bet;
				case Protocols.CMSG_BAIJIALE_SEATED :	//baijiale_seated
					var obj_baijiale_seated:c2s_baijiale_seated = new c2s_baijiale_seated;
					c2s_baijiale_seated .read(obj_baijiale_seated, bs);
					return obj_baijiale_seated;
				case Protocols.CMSG_BAIJIALE_GET_MAPINFO :	//baijiale_get_mapinfo
					var obj_baijiale_get_mapinfo:c2s_baijiale_get_mapinfo = new c2s_baijiale_get_mapinfo;
					return obj_baijiale_get_mapinfo;
				case Protocols.SMSG_BAIJIALE_RETURN_MAPINFO :	//baijiale_return_mapinfo
					var obj_baijiale_return_mapinfo:s2c_baijiale_return_mapinfo = new s2c_baijiale_return_mapinfo;
					s2c_baijiale_return_mapinfo .read(obj_baijiale_return_mapinfo, bs);
					return obj_baijiale_return_mapinfo;
				case Protocols.CMSG_HHDZ_GET_MAPINFO :	//hhdz_get_mapinfo
					var obj_hhdz_get_mapinfo:c2s_hhdz_get_mapinfo = new c2s_hhdz_get_mapinfo;
					return obj_hhdz_get_mapinfo;
				case Protocols.SMSG_HHDZ_RETURN_MAPINFO :	//hhdz_return_mapinfo
					var obj_hhdz_return_mapinfo:s2c_hhdz_return_mapinfo = new s2c_hhdz_return_mapinfo;
					s2c_hhdz_return_mapinfo .read(obj_hhdz_return_mapinfo, bs);
					return obj_hhdz_return_mapinfo;
				case Protocols.CMSG_LONGHU_UPDATE_ROAD :	//longhu_update_road
					var obj_longhu_update_road:c2s_longhu_update_road = new c2s_longhu_update_road;
					return obj_longhu_update_road;
				case Protocols.CMSG_BAIJIALE_UPDATE_ROAD :	//baijiale_update_road
					var obj_baijiale_update_road:c2s_baijiale_update_road = new c2s_baijiale_update_road;
					return obj_baijiale_update_road;
				case Protocols.CMSG_SHISANSHUI_PLAYING :	//shisanshui_playing
					var obj_shisanshui_playing:c2s_shisanshui_playing = new c2s_shisanshui_playing;
					c2s_shisanshui_playing .read(obj_shisanshui_playing, bs);
					return obj_shisanshui_playing;
				case Protocols.CMSG_BENCHIBAOMA_BET :	//benchibaoma_bet
					var obj_benchibaoma_bet:c2s_benchibaoma_bet = new c2s_benchibaoma_bet;
					c2s_benchibaoma_bet .read(obj_benchibaoma_bet, bs);
					return obj_benchibaoma_bet;
				case Protocols.CMSG_BENCHIBAOMA_SEATED :	//benchibaoma_seated
					var obj_benchibaoma_seated:c2s_benchibaoma_seated = new c2s_benchibaoma_seated;
					c2s_benchibaoma_seated .read(obj_benchibaoma_seated, bs);
					return obj_benchibaoma_seated;
				case Protocols.CMSG_BENCHIBAOMA_GET_MAPINFO :	//benchibaoma_get_mapinfo
					var obj_benchibaoma_get_mapinfo:c2s_benchibaoma_get_mapinfo = new c2s_benchibaoma_get_mapinfo;
					return obj_benchibaoma_get_mapinfo;
				case Protocols.SMSG_BENCHIBAOMA_RETURN_MAPINFO :	//benchibaoma_return_mapinfo
					var obj_benchibaoma_return_mapinfo:s2c_benchibaoma_return_mapinfo = new s2c_benchibaoma_return_mapinfo;
					s2c_benchibaoma_return_mapinfo .read(obj_benchibaoma_return_mapinfo, bs);
					return obj_benchibaoma_return_mapinfo;
				case Protocols.CMSG_BAIRENDEZHOU_BET :	//bairendezhou_bet
					var obj_bairendezhou_bet:c2s_bairendezhou_bet = new c2s_bairendezhou_bet;
					c2s_bairendezhou_bet .read(obj_bairendezhou_bet, bs);
					return obj_bairendezhou_bet;
				case Protocols.CMSG_BAIRENDEZHOU_SEATED :	//bairendezhou_seated
					var obj_bairendezhou_seated:c2s_bairendezhou_seated = new c2s_bairendezhou_seated;
					c2s_bairendezhou_seated .read(obj_bairendezhou_seated, bs);
					return obj_bairendezhou_seated;
				case Protocols.CMSG_BAIRENDEZHOU_GET_MAPINFO :	//bairendezhou_get_mapinfo
					var obj_bairendezhou_get_mapinfo:c2s_bairendezhou_get_mapinfo = new c2s_bairendezhou_get_mapinfo;
					return obj_bairendezhou_get_mapinfo;
				case Protocols.SMSG_BAIRENDEZHOU_RETURN_MAPINFO :	//bairendezhou_return_mapinfo
					var obj_bairendezhou_return_mapinfo:s2c_bairendezhou_return_mapinfo = new s2c_bairendezhou_return_mapinfo;
					s2c_bairendezhou_return_mapinfo .read(obj_bairendezhou_return_mapinfo, bs);
					return obj_bairendezhou_return_mapinfo;
				case Protocols.CMSG_TOUBAO_BET :	//toubao_bet
					var obj_toubao_bet:c2s_toubao_bet = new c2s_toubao_bet;
					c2s_toubao_bet .read(obj_toubao_bet, bs);
					return obj_toubao_bet;
				case Protocols.CMSG_TOUBAO_SEATED :	//toubao_seated
					var obj_toubao_seated:c2s_toubao_seated = new c2s_toubao_seated;
					c2s_toubao_seated .read(obj_toubao_seated, bs);
					return obj_toubao_seated;
				case Protocols.CMSG_HHDZ_UPDATE_ROAD :	//hhdz_update_road
					var obj_hhdz_update_road:c2s_hhdz_update_road = new c2s_hhdz_update_road;
					return obj_hhdz_update_road;
				case Protocols.CMSG_BAIRENDEZHOU_UPDATE_ROAD :	//bairendezhou_update_road
					var obj_bairendezhou_update_road:c2s_bairendezhou_update_road = new c2s_bairendezhou_update_road;
					return obj_bairendezhou_update_road;
				case Protocols.CMSG_END_ROOMCARD_GAME :	//end_roomcard_game
					var obj_end_roomcard_game:c2s_end_roomcard_game = new c2s_end_roomcard_game;
					c2s_end_roomcard_game .read(obj_end_roomcard_game, bs);
					return obj_end_roomcard_game;
				case Protocols.CMSG_DEZHOU_BET :	//dezhou_bet
					var obj_dezhou_bet:c2s_dezhou_bet = new c2s_dezhou_bet;
					return obj_dezhou_bet;
				case Protocols.CMSG_DEZHOU_ADDBET :	//dezhou_addbet
					var obj_dezhou_addbet:c2s_dezhou_addbet = new c2s_dezhou_addbet;
					c2s_dezhou_addbet .read(obj_dezhou_addbet, bs);
					return obj_dezhou_addbet;
				case Protocols.CMSG_DEZHOU_PASS :	//dezhou_pass
					var obj_dezhou_pass:c2s_dezhou_pass = new c2s_dezhou_pass;
					return obj_dezhou_pass;
				case Protocols.CMSG_DEZHOU_DISCARD :	//dezhou_discard
					var obj_dezhou_discard:c2s_dezhou_discard = new c2s_dezhou_discard;
					return obj_dezhou_discard;
				case Protocols.CMSG_DEZHOU_TAKE_MONEY_TO_ROOM :	//dezhou_take_money_to_room
					var obj_dezhou_take_money_to_room:c2s_dezhou_take_money_to_room = new c2s_dezhou_take_money_to_room;
					c2s_dezhou_take_money_to_room .read(obj_dezhou_take_money_to_room, bs);
					return obj_dezhou_take_money_to_room;
				case Protocols.CMSG_VOTE_END_ROOMCARD :	//vote_end_roomcard
					var obj_vote_end_roomcard:c2s_vote_end_roomcard = new c2s_vote_end_roomcard;
					c2s_vote_end_roomcard .read(obj_vote_end_roomcard, bs);
					return obj_vote_end_roomcard;
				case Protocols.CMSG_ZOO_BET :	//zoo_bet
					var obj_zoo_bet:c2s_zoo_bet = new c2s_zoo_bet;
					c2s_zoo_bet .read(obj_zoo_bet, bs);
					return obj_zoo_bet;
				case Protocols.CMSG_ZOO_SEATED :	//zoo_seated
					var obj_zoo_seated:c2s_zoo_seated = new c2s_zoo_seated;
					c2s_zoo_seated .read(obj_zoo_seated, bs);
					return obj_zoo_seated;
				case Protocols.CMSG_ZOO_GET_MAPINFO :	//zoo_get_mapinfo
					var obj_zoo_get_mapinfo:c2s_zoo_get_mapinfo = new c2s_zoo_get_mapinfo;
					return obj_zoo_get_mapinfo;
				case Protocols.SMSG_ZOO_RETURN_MAPINFO :	//zoo_return_mapinfo
					var obj_zoo_return_mapinfo:s2c_zoo_return_mapinfo = new s2c_zoo_return_mapinfo;
					s2c_zoo_return_mapinfo .read(obj_zoo_return_mapinfo, bs);
					return obj_zoo_return_mapinfo;
				case Protocols.CMSG_DEZHOU_CONTINUE :	//dezhou_continue
					var obj_dezhou_continue:c2s_dezhou_continue = new c2s_dezhou_continue;
					return obj_dezhou_continue;
				case Protocols.CMSG_GET_APP_ADDR :	//get_app_addr
					var obj_get_app_addr:c2s_get_app_addr = new c2s_get_app_addr;
					c2s_get_app_addr .read(obj_get_app_addr, bs);
					return obj_get_app_addr;
				case Protocols.CMSG_PDK_PLAY_CARD :	//pdk_play_card
					var obj_pdk_play_card:c2s_pdk_play_card = new c2s_pdk_play_card;
					c2s_pdk_play_card .read(obj_pdk_play_card, bs);
					return obj_pdk_play_card;
				case Protocols.CMSG_PDK_PASS_CARD :	//pdk_pass_card
					var obj_pdk_pass_card:c2s_pdk_pass_card = new c2s_pdk_pass_card;
					return obj_pdk_pass_card;
				case Protocols.CMSG_PDK_QIANG_GUAN :	//pdk_qiang_guan
					var obj_pdk_qiang_guan:c2s_pdk_qiang_guan = new c2s_pdk_qiang_guan;
					c2s_pdk_qiang_guan .read(obj_pdk_qiang_guan, bs);
					return obj_pdk_qiang_guan;
				case Protocols.CMSG_GET_QIFU_LIST :	//get_qifu_list
					var obj_get_qifu_list:c2s_get_qifu_list = new c2s_get_qifu_list;
					return obj_get_qifu_list;
				case Protocols.CMSG_PLAYER_QIFU :	//player_qifu
					var obj_player_qifu:c2s_player_qifu = new c2s_player_qifu;
					c2s_player_qifu .read(obj_player_qifu, bs);
					return obj_player_qifu;
				case Protocols.CMSG_RECHARGE_CONFIRM :	//recharge_confirm
					var obj_recharge_confirm:c2s_recharge_confirm = new c2s_recharge_confirm;
					c2s_recharge_confirm .read(obj_recharge_confirm, bs);
					return obj_recharge_confirm;
				case Protocols.CMSG_LOGIN_INVITE :	//login_invite
					var obj_login_invite:c2s_login_invite = new c2s_login_invite;
					c2s_login_invite .read(obj_login_invite, bs);
					return obj_login_invite;
				case Protocols.CMSG_PDK_TRUSTEESHIP :	//pdk_trusteeship
					var obj_pdk_trusteeship:c2s_pdk_trusteeship = new c2s_pdk_trusteeship;
					return obj_pdk_trusteeship;
				case Protocols.CMSG_SSS_CANCEL_SPECIAL :	//sss_cancel_special
					var obj_sss_cancel_special:c2s_sss_cancel_special = new c2s_sss_cancel_special;
					return obj_sss_cancel_special;
				case Protocols.CMSG_SCMJ_EXCHANGE :	//scmj_exchange
					var obj_scmj_exchange:c2s_scmj_exchange = new c2s_scmj_exchange;
					c2s_scmj_exchange .read(obj_scmj_exchange, bs);
					return obj_scmj_exchange;
				case Protocols.CMSG_SCMJ_SET_LACK :	//scmj_set_lack
					var obj_scmj_set_lack:c2s_scmj_set_lack = new c2s_scmj_set_lack;
					c2s_scmj_set_lack .read(obj_scmj_set_lack, bs);
					return obj_scmj_set_lack;
				case Protocols.CMSG_SCMJ_PLAY_CARD :	//scmj_play_card
					var obj_scmj_play_card:c2s_scmj_play_card = new c2s_scmj_play_card;
					c2s_scmj_play_card .read(obj_scmj_play_card, bs);
					return obj_scmj_play_card;
				case Protocols.CMSG_SCMJ_HU :	//scmj_hu
					var obj_scmj_hu:c2s_scmj_hu = new c2s_scmj_hu;
					return obj_scmj_hu;
				case Protocols.CMSG_SCMJ_GANG :	//scmj_gang
					var obj_scmj_gang:c2s_scmj_gang = new c2s_scmj_gang;
					return obj_scmj_gang;
				case Protocols.CMSG_SCMJ_PENG :	//scmj_peng
					var obj_scmj_peng:c2s_scmj_peng = new c2s_scmj_peng;
					return obj_scmj_peng;
				case Protocols.CMSG_SCMJ_PASS :	//scmj_pass
					var obj_scmj_pass:c2s_scmj_pass = new c2s_scmj_pass;
					return obj_scmj_pass;
				case Protocols.CMSG_GET_DAILI_YONGHU :	//get_daili_yonghu
					var obj_get_daili_yonghu:c2s_get_daili_yonghu = new c2s_get_daili_yonghu;
					c2s_get_daili_yonghu .read(obj_get_daili_yonghu, bs);
					return obj_get_daili_yonghu;
				case Protocols.CMSG_LOGIN_PARAMETER :	//login_parameter
					var obj_login_parameter:c2s_login_parameter = new c2s_login_parameter;
					c2s_login_parameter .read(obj_login_parameter, bs);
					return obj_login_parameter;
				case Protocols.CMSG_GET_VIP_LIST :	//get_vip_list
					var obj_get_vip_list:c2s_get_vip_list = new c2s_get_vip_list;
					return obj_get_vip_list;
				case Protocols.CMSG_GET_VIP_AWARD :	//get_vip_award
					var obj_get_vip_award:c2s_get_vip_award = new c2s_get_vip_award;
					c2s_get_vip_award .read(obj_get_vip_award, bs);
					return obj_get_vip_award;
				case Protocols.CMSG_ELUOSILUNPAN_BET :	//eluosilunpan_bet
					var obj_eluosilunpan_bet:c2s_eluosilunpan_bet = new c2s_eluosilunpan_bet;
					c2s_eluosilunpan_bet .read(obj_eluosilunpan_bet, bs);
					return obj_eluosilunpan_bet;
				case Protocols.CMSG_ELUOSILUNPAN_SEATED :	//eluosilunpan_seated
					var obj_eluosilunpan_seated:c2s_eluosilunpan_seated = new c2s_eluosilunpan_seated;
					c2s_eluosilunpan_seated .read(obj_eluosilunpan_seated, bs);
					return obj_eluosilunpan_seated;
				case Protocols.CMSG_ELUOSILUNPAN_GET_MAPINFO :	//eluosilunpan_get_mapinfo
					var obj_eluosilunpan_get_mapinfo:c2s_eluosilunpan_get_mapinfo = new c2s_eluosilunpan_get_mapinfo;
					return obj_eluosilunpan_get_mapinfo;
				case Protocols.SMSG_ELUOSILUNPAN_RETURN_MAPINFO :	//eluosilunpan_return_mapinfo
					var obj_eluosilunpan_return_mapinfo:s2c_eluosilunpan_return_mapinfo = new s2c_eluosilunpan_return_mapinfo;
					s2c_eluosilunpan_return_mapinfo .read(obj_eluosilunpan_return_mapinfo, bs);
					return obj_eluosilunpan_return_mapinfo;
				case Protocols.CMSG_SIGNIN :	//signin
					var obj_signin:c2s_signin = new c2s_signin;
					return obj_signin;
				case Protocols.CMSG_NEW_DAILYSHARE :	//new_dailyshare
					var obj_new_dailyshare:c2s_new_dailyshare = new c2s_new_dailyshare;
					return obj_new_dailyshare;
				case Protocols.CMSG_SAVE_YUEBAO :	//save_yuebao
					var obj_save_yuebao:c2s_save_yuebao = new c2s_save_yuebao;
					c2s_save_yuebao .read(obj_save_yuebao, bs);
					return obj_save_yuebao;
				case Protocols.CMSG_TAKE_YUEBAO :	//take_yuebao
					var obj_take_yuebao:c2s_take_yuebao = new c2s_take_yuebao;
					c2s_take_yuebao .read(obj_take_yuebao, bs);
					return obj_take_yuebao;
				case Protocols.CMSG_PLAYER_QIFU_NEW :	//player_qifu_new
					var obj_player_qifu_new:c2s_player_qifu_new = new c2s_player_qifu_new;
					c2s_player_qifu_new .read(obj_player_qifu_new, bs);
					return obj_player_qifu_new;
				case Protocols.CMSG_RECEIVE_VIP_AWARD :	//receive_vip_award
					var obj_receive_vip_award:c2s_receive_vip_award = new c2s_receive_vip_award;
					c2s_receive_vip_award .read(obj_receive_vip_award, bs);
					return obj_receive_vip_award;
				case Protocols.CMSG_SCORE_LUCKY_DRAW :	//score_lucky_draw
					var obj_score_lucky_draw:c2s_score_lucky_draw = new c2s_score_lucky_draw;
					c2s_score_lucky_draw .read(obj_score_lucky_draw, bs);
					return obj_score_lucky_draw;
				case Protocols.CMSG_GET_BIND_REWARD :	//get_bind_reward
					var obj_get_bind_reward:c2s_get_bind_reward = new c2s_get_bind_reward;
					return obj_get_bind_reward;
				case Protocols.CMSG_GET_COMMISSION :	//get_commission
					var obj_get_commission:c2s_get_commission = new c2s_get_commission;
					return obj_get_commission;
				case Protocols.CMSG_FREE_SYTLE_SYNC :	//free_sytle_sync
					var obj_free_sytle_sync:c2s_free_sytle_sync = new c2s_free_sytle_sync;
					c2s_free_sytle_sync .read(obj_free_sytle_sync, bs);
					return obj_free_sytle_sync;
				case Protocols.CMSG_CHECK_LOGIN_VF :	//check_login_vf
					var obj_check_login_vf:c2s_check_login_vf = new c2s_check_login_vf;
					c2s_check_login_vf .read(obj_check_login_vf, bs);
					return obj_check_login_vf;
				case Protocols.CMSG_SET_MONEY_PWD :	//set_money_pwd
					var obj_set_money_pwd:c2s_set_money_pwd = new c2s_set_money_pwd;
					c2s_set_money_pwd .read(obj_set_money_pwd, bs);
					return obj_set_money_pwd;
				case Protocols.CMSG_GET_FIRST_PAY :	//get_first_pay
					var obj_get_first_pay:c2s_get_first_pay = new c2s_get_first_pay;
					return obj_get_first_pay;
				case Protocols.CMSG_SET_ROLE_INFO :	//set_role_info
					var obj_set_role_info:c2s_set_role_info = new c2s_set_role_info;
					c2s_set_role_info .read(obj_set_role_info, bs);
					return obj_set_role_info;
				case Protocols.CMSG_GET_BULLETIN_LIST :	//get_bulletin_list
					var obj_get_bulletin_list:c2s_get_bulletin_list = new c2s_get_bulletin_list;
					return obj_get_bulletin_list;
				default:
					break;
			}
			return null;
		}

		public call_rand_pkt():void{
			this._stream.reset();
			let optcode:number = MathU.parseInt(Math.random()*65535);
			this._stream.writeUint16(optcode);
			let count:number = Math.random()*100;
			for (let i=0;i<count;i++){
				this._stream.writeUint16(Math.random()*65535);
			}
			this.sendMsg(optcode, this._stream);
		}
		
		public call_null_action ():void{
			this._stream.reset();
			this._stream.writeUint16( 0 );
			this.sendMsg( 0 , this._stream);
			//Log.outDebug("CS====> cmd:0 null_action");
		}
		public call_ping_pong ():void{
			this._stream.reset();
			this._stream.writeUint16( 1 );
			this.sendMsg( 1 , this._stream);
			//Log.outDebug("CS====> cmd:1 ping_pong");
		}
		public call_get_session (sessionkey : string ,sign : string,version : string):void{
			this._stream.reset();
			this._stream.writeUint16( 2 );
			//
			this._stream.writeString (sessionkey);
			//签名
			this._stream.writeString (sign);
			//版本
			this._stream.writeString (version);
			this.sendMsg( 2 , this._stream);
			//Log.outDebug("CS====> cmd:2 get_session");
		}
		public call_forced_into ():void{
			this._stream.reset();
			this._stream.writeUint16( 3 );
			this.sendMsg( 3 , this._stream);
			//Log.outDebug("CS====> cmd:3 forced_into");
		}
		public call_gm_command (gm_commands : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 4 );
			//字符串string
			this._stream.writeString (gm_commands);
			this.sendMsg( 4 , this._stream);
			//Log.outDebug("CS====> cmd:4 gm_command");
		}
		public call_sync_mstime (mstime_now : number ,time_now : number ,open_time : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 6 );
			//服务器运行的毫秒数
			this._stream.writeUint32 (mstime_now);
			//自然时间
			this._stream.writeUint32 (time_now);
			//自然时间的服务器启动时间
			this._stream.writeUint32 (open_time);
			this.sendMsg( 6 , this._stream);
			//Log.outDebug("CS====> cmd:6 sync_mstime");
		}
		public call_ud_control ():void{
			this._stream.reset();
			this._stream.writeUint16( 8 );
			this.sendMsg( 8 , this._stream);
			//Log.outDebug("CS====> cmd:8 ud_control");
		}
		public call_get_login_vf (server_name : string ,mobile : string):void{
			this._stream.reset();
			this._stream.writeUint16( 11 );
			//运营商
			this._stream.writeString (server_name);
			//手机号
			this._stream.writeString (mobile);
			this.sendMsg( 11 , this._stream);
			//Log.outDebug("CS====> cmd:11 get_login_vf");
		}
		public call_login (typ : number ,server_name : string,account : string,pwd : string):void{
			this._stream.reset();
			this._stream.writeUint16( 12 );
			//登录类型
			this._stream.writeUint8 (typ);
			//服务名
			this._stream.writeString (server_name);
			//账号
			this._stream.writeString (account);
			//密码
			this._stream.writeString (pwd);
			this.sendMsg( 12 , this._stream);
			//Log.outDebug("CS====> cmd:12 login");
		}
		public call_logout ():void{
			this._stream.reset();
			this._stream.writeUint16( 13 );
			this.sendMsg( 13 , this._stream);
			//Log.outDebug("CS====> cmd:13 logout");
		}
		public call_chat_send (type : number ,content : string):void{
			this._stream.reset();
			this._stream.writeUint16( 14 );
			//类型
			this._stream.writeUint8 (type);
			//内容
			this._stream.writeString (content);
			this.sendMsg( 14 , this._stream);
			//Log.outDebug("CS====> cmd:14 chat_send");
		}
		public call_create_room (id : string ,room_config_id : number ,game_number : number ,pay_typ : number ,extra : string):void{
			this._stream.reset();
			this._stream.writeUint16( 16 );
			//游戏id
			this._stream.writeString (id);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			//局数
			this._stream.writeUint32 (game_number);
			//支付类型1:房主2:AA
			this._stream.writeUint32 (pay_typ);
			//额外的参数
			this._stream.writeString (extra);
			this.sendMsg( 16 , this._stream);
			//Log.outDebug("CS====> cmd:16 create_room");
		}
		public call_join_room (id : string ,card_id : string):void{
			this._stream.reset();
			this._stream.writeUint16( 17 );
			//游戏id
			this._stream.writeString (id);
			//房卡id
			this._stream.writeString (card_id);
			this.sendMsg( 17 , this._stream);
			//Log.outDebug("CS====> cmd:17 join_room");
		}
		public call_match_game (id : string ,room_config_id : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 18 );
			//游戏id
			this._stream.writeString (id);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			this.sendMsg( 18 , this._stream);
			//Log.outDebug("CS====> cmd:18 match_game");
		}
		public call_cancel_match ():void{
			this._stream.reset();
			this._stream.writeUint16( 19 );
			this.sendMsg( 19 , this._stream);
			//Log.outDebug("CS====> cmd:19 cancel_match");
		}
		public call_leave_game ():void{
			this._stream.reset();
			this._stream.writeUint16( 20 );
			this.sendMsg( 20 , this._stream);
			//Log.outDebug("CS====> cmd:20 leave_game");
		}
		public call_switch_seat (to_index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 22 );
			//去哪个座位
			this._stream.writeUint8 (to_index);
			this.sendMsg( 22 , this._stream);
			//Log.outDebug("CS====> cmd:22 switch_seat");
		}
		public call_sync_player_info ():void{
			this._stream.reset();
			this._stream.writeUint16( 23 );
			this.sendMsg( 23 , this._stream);
			//Log.outDebug("CS====> cmd:23 sync_player_info");
		}
		public call_sync_money ():void{
			this._stream.reset();
			this._stream.writeUint16( 24 );
			this.sendMsg( 24 , this._stream);
			//Log.outDebug("CS====> cmd:24 sync_money");
		}
		public call_bind (account : string ,type : number ,js_code : string,username : string,pwd1 : string,pwd2 : string,mobile : string,bindcode : string,device : number ,invitor : string):void{
			this._stream.reset();
			this._stream.writeUint16( 25 );
			//玩家账号
			this._stream.writeString (account);
			//绑定类型(
			this._stream.writeUint16 (type);
			//绑定微信时需要该参数
			this._stream.writeString (js_code);
			//绑定账号时需要该参数
			this._stream.writeString (username);
			//绑定账号时需要该参数
			this._stream.writeString (pwd1);
			//绑定账号时需要该参数
			this._stream.writeString (pwd2);
			//绑定手机时需要该参数
			this._stream.writeString (mobile);
			//绑定手机时需要该参数
			this._stream.writeString (bindcode);
			//非必填 0网站1安卓2苹果
			this._stream.writeUint16 (device);
			//非
			this._stream.writeString (invitor);
			this.sendMsg( 25 , this._stream);
			//Log.outDebug("CS====> cmd:25 bind");
		}
		public call_get_mails ():void{
			this._stream.reset();
			this._stream.writeUint16( 26 );
			this.sendMsg( 26 , this._stream);
			//Log.outDebug("CS====> cmd:26 get_mails");
		}
		public call_read_mail (id : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 28 );
			//
			this._stream.writeInt32 (id);
			this.sendMsg( 28 , this._stream);
			//Log.outDebug("CS====> cmd:28 read_mail");
		}
		public call_del_mail (id : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 29 );
			//
			this._stream.writeInt32 (id);
			this.sendMsg( 29 , this._stream);
			//Log.outDebug("CS====> cmd:29 del_mail");
		}
		public call_sync_web_time ():void{
			this._stream.reset();
			this._stream.writeUint16( 30 );
			this.sendMsg( 30 , this._stream);
			//Log.outDebug("CS====> cmd:30 sync_web_time");
		}
		public call_get_bindvf (mobile : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 31 );
			//
			this._stream.writeString (mobile);
			this.sendMsg( 31 , this._stream);
			//Log.outDebug("CS====> cmd:31 get_bindvf");
		}
		public call_start_roomcard_game (mapid : string ,room_config_id : number ,guid : string,card_id : string):void{
			this._stream.reset();
			this._stream.writeUint16( 32 );
			//游戏id
			this._stream.writeString (mapid);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			//主玩家unit
			this._stream.writeString (guid);
			//房卡id
			this._stream.writeString (card_id);
			this.sendMsg( 32 , this._stream);
			//Log.outDebug("CS====> cmd:32 start_roomcard_game");
		}
		public call_get_service ():void{
			this._stream.reset();
			this._stream.writeUint16( 33 );
			this.sendMsg( 33 , this._stream);
			//Log.outDebug("CS====> cmd:33 get_service");
		}
		public call_get_reset_code (mobile : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 34 );
			//手机号
			this._stream.writeString (mobile);
			this.sendMsg( 34 , this._stream);
			//Log.outDebug("CS====> cmd:34 get_reset_code");
		}
		public call_get_bet_list (page_count : number ,per_count : number ,time : number ,game_id : string,room_config_id : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 35 );
			//
			this._stream.writeInt32 (page_count);
			//
			this._stream.writeInt32 (per_count);
			//
			this._stream.writeInt32 (time);
			//游戏id
			this._stream.writeString (game_id);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			//
			this._stream.writeInt32 (index);
			this.sendMsg( 35 , this._stream);
			//Log.outDebug("CS====> cmd:35 get_bet_list");
		}
		public call_reset_pwd (vfcode : string ,pwd1 : string,pwd2 : string):void{
			this._stream.reset();
			this._stream.writeUint16( 36 );
			//
			this._stream.writeString (vfcode);
			//
			this._stream.writeString (pwd1);
			//
			this._stream.writeString (pwd2);
			this.sendMsg( 36 , this._stream);
			//Log.outDebug("CS====> cmd:36 reset_pwd");
		}
		public call_set_info (headimg : string ,sex : string,device_token : string,device_type : string,isuninstall : string,nickname : string):void{
			this._stream.reset();
			this._stream.writeUint16( 37 );
			//
			this._stream.writeString (headimg);
			//
			this._stream.writeString (sex);
			//
			this._stream.writeString (device_token);
			//
			this._stream.writeString (device_type);
			//
			this._stream.writeString (isuninstall);
			//
			this._stream.writeString (nickname);
			this.sendMsg( 37 , this._stream);
			//Log.outDebug("CS====> cmd:37 set_info");
		}
		public call_get_paychannel (paytype : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 38 );
			//
			this._stream.writeString (paytype);
			this.sendMsg( 38 , this._stream);
			//Log.outDebug("CS====> cmd:38 get_paychannel");
		}
		public call_goto_pay (money : string ,pid : number ,paytype : string):void{
			this._stream.reset();
			this._stream.writeUint16( 39 );
			//
			this._stream.writeString (money);
			//
			this._stream.writeUint16 (pid);
			//
			this._stream.writeString (paytype);
			this.sendMsg( 39 , this._stream);
			//Log.outDebug("CS====> cmd:39 goto_pay");
		}
		public call_get_drawchannel ():void{
			this._stream.reset();
			this._stream.writeUint16( 40 );
			this.sendMsg( 40 , this._stream);
			//Log.outDebug("CS====> cmd:40 get_drawchannel");
		}
		public call_goto_draw (money : string ,bindtype : string,drawpwd : string):void{
			this._stream.reset();
			this._stream.writeUint16( 41 );
			//
			this._stream.writeString (money);
			//
			this._stream.writeString (bindtype);
			//
			this._stream.writeString (drawpwd);
			this.sendMsg( 41 , this._stream);
			//Log.outDebug("CS====> cmd:41 goto_draw");
		}
		public call_bindalipay (alipayname : string ,drawpwd : string,realname : string):void{
			this._stream.reset();
			this._stream.writeUint16( 42 );
			//
			this._stream.writeString (alipayname);
			//
			this._stream.writeString (drawpwd);
			//
			this._stream.writeString (realname);
			this.sendMsg( 42 , this._stream);
			//Log.outDebug("CS====> cmd:42 bindalipay");
		}
		public call_bindbank (banknum : string ,drawpwd : string,banktype : string,bankaddr : string,realname : string):void{
			this._stream.reset();
			this._stream.writeUint16( 43 );
			//
			this._stream.writeString (banknum);
			//
			this._stream.writeString (drawpwd);
			//
			this._stream.writeString (banktype);
			//
			this._stream.writeString (bankaddr);
			//
			this._stream.writeString (realname);
			this.sendMsg( 43 , this._stream);
			//Log.outDebug("CS====> cmd:43 bindbank");
		}
		public call_get_paydrawlist (page_count : number ,per_count : number ,dc : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 44 );
			//
			this._stream.writeInt32 (page_count);
			//
			this._stream.writeInt32 (per_count);
			//
			this._stream.writeInt32 (dc);
			this.sendMsg( 44 , this._stream);
			//Log.outDebug("CS====> cmd:44 get_paydrawlist");
		}
		public call_changedrawpwd (oldpwd : string ,pwd1 : string,pwd2 : string):void{
			this._stream.reset();
			this._stream.writeUint16( 45 );
			//
			this._stream.writeString (oldpwd);
			//
			this._stream.writeString (pwd1);
			//
			this._stream.writeString (pwd2);
			this.sendMsg( 45 , this._stream);
			//Log.outDebug("CS====> cmd:45 changedrawpwd");
		}
		public call_changepwd (oldpwd : string ,pwd1 : string,pwd2 : string):void{
			this._stream.reset();
			this._stream.writeUint16( 46 );
			//
			this._stream.writeString (oldpwd);
			//
			this._stream.writeString (pwd1);
			//
			this._stream.writeString (pwd2);
			this.sendMsg( 46 , this._stream);
			//Log.outDebug("CS====> cmd:46 changepwd");
		}
		public call_get_playerinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 47 );
			this.sendMsg( 47 , this._stream);
			//Log.outDebug("CS====> cmd:47 get_playerinfo");
		}
		public call_get_siginin ():void{
			this._stream.reset();
			this._stream.writeUint16( 48 );
			this.sendMsg( 48 , this._stream);
			//Log.outDebug("CS====> cmd:48 get_siginin");
		}
		public call_siginin ():void{
			this._stream.reset();
			this._stream.writeUint16( 49 );
			this.sendMsg( 49 , this._stream);
			//Log.outDebug("CS====> cmd:49 siginin");
		}
		public call_get_signincfg ():void{
			this._stream.reset();
			this._stream.writeUint16( 50 );
			this.sendMsg( 50 , this._stream);
			//Log.outDebug("CS====> cmd:50 get_signincfg");
		}
		public call_get_ranking_list (type : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 51 );
			//排行榜类型
			this._stream.writeInt32 (type);
			this.sendMsg( 51 , this._stream);
			//Log.outDebug("CS====> cmd:51 get_ranking_list");
		}
		public call_saveboxin (money : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 52 );
			//
			this._stream.writeFloat (money);
			this.sendMsg( 52 , this._stream);
			//Log.outDebug("CS====> cmd:52 saveboxin");
		}
		public call_saveboxout (money : number ,drawpwd : string):void{
			this._stream.reset();
			this._stream.writeUint16( 53 );
			//
			this._stream.writeFloat (money);
			//
			this._stream.writeString (drawpwd);
			this.sendMsg( 53 , this._stream);
			//Log.outDebug("CS====> cmd:53 saveboxout");
		}
		public call_get_savebox_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 54 );
			this.sendMsg( 54 , this._stream);
			//Log.outDebug("CS====> cmd:54 get_savebox_list");
		}
		public call_get_active_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 55 );
			this.sendMsg( 55 , this._stream);
			//Log.outDebug("CS====> cmd:55 get_active_list");
		}
		public call_get_agencyreport ():void{
			this._stream.reset();
			this._stream.writeUint16( 56 );
			this.sendMsg( 56 , this._stream);
			//Log.outDebug("CS====> cmd:56 get_agencyreport");
		}
		public call_get_rbmoney ():void{
			this._stream.reset();
			this._stream.writeUint16( 57 );
			this.sendMsg( 57 , this._stream);
			//Log.outDebug("CS====> cmd:57 get_rbmoney");
		}
		public call_get_agencylvlist ():void{
			this._stream.reset();
			this._stream.writeUint16( 58 );
			this.sendMsg( 58 , this._stream);
			//Log.outDebug("CS====> cmd:58 get_agencylvlist");
		}
		public call_get_turntablecfg ():void{
			this._stream.reset();
			this._stream.writeUint16( 59 );
			this.sendMsg( 59 , this._stream);
			//Log.outDebug("CS====> cmd:59 get_turntablecfg");
		}
		public call_get_turntableinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 60 );
			this.sendMsg( 60 , this._stream);
			//Log.outDebug("CS====> cmd:60 get_turntableinfo");
		}
		public call_turntable (type_id : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 61 );
			//
			this._stream.writeUint8 (type_id);
			this.sendMsg( 61 , this._stream);
			//Log.outDebug("CS====> cmd:61 turntable");
		}
		public call_get_turntablelist ():void{
			this._stream.reset();
			this._stream.writeUint16( 62 );
			this.sendMsg( 62 , this._stream);
			//Log.outDebug("CS====> cmd:62 get_turntablelist");
		}
		public call_sync_token (token : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 63 );
			//
			this._stream.writeString (token);
			this.sendMsg( 63 , this._stream);
			//Log.outDebug("CS====> cmd:63 sync_token");
		}
		public call_get_myshare ():void{
			this._stream.reset();
			this._stream.writeUint16( 64 );
			this.sendMsg( 64 , this._stream);
			//Log.outDebug("CS====> cmd:64 get_myshare");
		}
		public call_get_agrlastweek ():void{
			this._stream.reset();
			this._stream.writeUint16( 65 );
			this.sendMsg( 65 , this._stream);
			//Log.outDebug("CS====> cmd:65 get_agrlastweek");
		}
		public call_get_rbmoneylog ():void{
			this._stream.reset();
			this._stream.writeUint16( 66 );
			this.sendMsg( 66 , this._stream);
			//Log.outDebug("CS====> cmd:66 get_rbmoneylog");
		}
		public call_get_dailyshare ():void{
			this._stream.reset();
			this._stream.writeUint16( 67 );
			this.sendMsg( 67 , this._stream);
			//Log.outDebug("CS====> cmd:67 get_dailyshare");
		}
		public call_client_error (err : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 68 );
			//
			this._stream.writeString (err);
			this.sendMsg( 68 , this._stream);
			//Log.outDebug("CS====> cmd:68 client_error");
		}
		public call_get_moneylog (page_count : number ,per_count : number ,time : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 69 );
			//
			this._stream.writeInt32 (page_count);
			//
			this._stream.writeInt32 (per_count);
			//
			this._stream.writeInt32 (time);
			//
			this._stream.writeInt32 (index);
			this.sendMsg( 69 , this._stream);
			//Log.outDebug("CS====> cmd:69 get_moneylog");
		}
		public call_get_battle_log (battle_id : string ,game_id : string,time : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 70 );
			//
			this._stream.writeString (battle_id);
			//游戏id
			this._stream.writeString (game_id);
			//
			this._stream.writeInt32 (time);
			this.sendMsg( 70 , this._stream);
			//Log.outDebug("CS====> cmd:70 get_battle_log");
		}
		public call_get_inventory (game_id : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 71 );
			//游戏id
			this._stream.writeString (game_id);
			this.sendMsg( 71 , this._stream);
			//Log.outDebug("CS====> cmd:71 get_inventory");
		}
		public call_get_ramdon_name (num : number ,time : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 72 );
			//数量
			this._stream.writeInt32 (num);
			//时间
			this._stream.writeInt32 (time);
			this.sendMsg( 72 , this._stream);
			//Log.outDebug("CS====> cmd:72 get_ramdon_name");
		}
		public call_get_roomcard_share (game_id : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 74 );
			//游戏id
			this._stream.writeString (game_id);
			this.sendMsg( 74 , this._stream);
			//Log.outDebug("CS====> cmd:74 get_roomcard_share");
		}
		public call_get_promo_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 75 );
			this.sendMsg( 75 , this._stream);
			//Log.outDebug("CS====> cmd:75 get_promo_list");
		}
		public call_zhajinhua_call ():void{
			this._stream.reset();
			this._stream.writeUint16( 76 );
			this.sendMsg( 76 , this._stream);
			//Log.outDebug("CS====> cmd:76 zhajinhua_call");
		}
		public call_zhajinhua_auto_call ():void{
			this._stream.reset();
			this._stream.writeUint16( 77 );
			this.sendMsg( 77 , this._stream);
			//Log.outDebug("CS====> cmd:77 zhajinhua_auto_call");
		}
		public call_zhajinhua_filling (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 78 );
			//下注数额
			this._stream.writeUint8 (num);
			this.sendMsg( 78 , this._stream);
			//Log.outDebug("CS====> cmd:78 zhajinhua_filling");
		}
		public call_zhajinhua_see_card ():void{
			this._stream.reset();
			this._stream.writeUint16( 79 );
			this.sendMsg( 79 , this._stream);
			//Log.outDebug("CS====> cmd:79 zhajinhua_see_card");
		}
		public call_zhajinhua_give_up ():void{
			this._stream.reset();
			this._stream.writeUint16( 80 );
			this.sendMsg( 80 , this._stream);
			//Log.outDebug("CS====> cmd:80 zhajinhua_give_up");
		}
		public call_zhajinhua_compare (pos : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 81 );
			//目标玩家位置
			this._stream.writeUint8 (pos);
			this.sendMsg( 81 , this._stream);
			//Log.outDebug("CS====> cmd:81 zhajinhua_compare");
		}
		public call_niuniu_ready ():void{
			this._stream.reset();
			this._stream.writeUint16( 82 );
			this.sendMsg( 82 , this._stream);
			//Log.outDebug("CS====> cmd:82 niuniu_ready");
		}
		public call_niuniu_banker (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 83 );
			//抢庄倍率
			this._stream.writeUint8 (num);
			this.sendMsg( 83 , this._stream);
			//Log.outDebug("CS====> cmd:83 niuniu_banker");
		}
		public call_niuniu_bet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 84 );
			//下注倍率
			this._stream.writeUint8 (num);
			this.sendMsg( 84 , this._stream);
			//Log.outDebug("CS====> cmd:84 niuniu_bet");
		}
		public call_niuniu_pinpai ():void{
			this._stream.reset();
			this._stream.writeUint16( 85 );
			this.sendMsg( 85 , this._stream);
			//Log.outDebug("CS====> cmd:85 niuniu_pinpai");
		}
		public call_ddz_ready ():void{
			this._stream.reset();
			this._stream.writeUint16( 86 );
			this.sendMsg( 86 , this._stream);
			//Log.outDebug("CS====> cmd:86 ddz_ready");
		}
		public call_ddz_mingpai ():void{
			this._stream.reset();
			this._stream.writeUint16( 87 );
			this.sendMsg( 87 , this._stream);
			//Log.outDebug("CS====> cmd:87 ddz_mingpai");
		}
		public call_ddz_jiaodizhu ():void{
			this._stream.reset();
			this._stream.writeUint16( 88 );
			this.sendMsg( 88 , this._stream);
			//Log.outDebug("CS====> cmd:88 ddz_jiaodizhu");
		}
		public call_ddz_jiaodizhu_pass ():void{
			this._stream.reset();
			this._stream.writeUint16( 89 );
			this.sendMsg( 89 , this._stream);
			//Log.outDebug("CS====> cmd:89 ddz_jiaodizhu_pass");
		}
		public call_ddz_jiabei (typ : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 90 );
			//加倍类型
			this._stream.writeUint8 (typ);
			this.sendMsg( 90 , this._stream);
			//Log.outDebug("CS====> cmd:90 ddz_jiabei");
		}
		public call_ddz_play_card (typ : number ,len : number ,val : number ,cards : string):void{
			this._stream.reset();
			this._stream.writeUint16( 91 );
			//牌类型
			this._stream.writeUint8 (typ);
			//牌长度
			this._stream.writeUint8 (len);
			//最大牌
			this._stream.writeUint8 (val);
			//出的牌
			this._stream.writeString (cards);
			this.sendMsg( 91 , this._stream);
			//Log.outDebug("CS====> cmd:91 ddz_play_card");
		}
		public call_ddz_play_card_pass ():void{
			this._stream.reset();
			this._stream.writeUint16( 92 );
			this.sendMsg( 92 , this._stream);
			//Log.outDebug("CS====> cmd:92 ddz_play_card_pass");
		}
		public call_ddz_trusteeship ():void{
			this._stream.reset();
			this._stream.writeUint16( 93 );
			this.sendMsg( 93 , this._stream);
			//Log.outDebug("CS====> cmd:93 ddz_trusteeship");
		}
		public call_zjh_continue ():void{
			this._stream.reset();
			this._stream.writeUint16( 94 );
			this.sendMsg( 94 , this._stream);
			//Log.outDebug("CS====> cmd:94 zjh_continue");
		}
		public call_niuniu_continue ():void{
			this._stream.reset();
			this._stream.writeUint16( 95 );
			this.sendMsg( 95 , this._stream);
			//Log.outDebug("CS====> cmd:95 niuniu_continue");
		}
		public call_zjh_cancel_matching ():void{
			this._stream.reset();
			this._stream.writeUint16( 96 );
			this.sendMsg( 96 , this._stream);
			//Log.outDebug("CS====> cmd:96 zjh_cancel_matching");
		}
		public call_niuniu_cancel_matching ():void{
			this._stream.reset();
			this._stream.writeUint16( 97 );
			this.sendMsg( 97 , this._stream);
			//Log.outDebug("CS====> cmd:97 niuniu_cancel_matching");
		}
		public call_zjh_leave_map ():void{
			this._stream.reset();
			this._stream.writeUint16( 98 );
			this.sendMsg( 98 , this._stream);
			//Log.outDebug("CS====> cmd:98 zjh_leave_map");
		}
		public call_blackjack_bet (num : string ,pos : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 99 );
			//下注数额
			this._stream.writeString (num);
			//下注位置
			this._stream.writeUint8 (pos);
			this.sendMsg( 99 , this._stream);
			//Log.outDebug("CS====> cmd:99 blackjack_bet");
		}
		public call_blackjack_buy_insurance (opt_type : number ,pos : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 100 );
			//操作1买2不买
			this._stream.writeUint8 (opt_type);
			//买保险位置
			this._stream.writeUint8 (pos);
			this.sendMsg( 100 , this._stream);
			//Log.outDebug("CS====> cmd:100 blackjack_buy_insurance");
		}
		public call_blackjack_extend_bet ():void{
			this._stream.reset();
			this._stream.writeUint16( 101 );
			this.sendMsg( 101 , this._stream);
			//Log.outDebug("CS====> cmd:101 blackjack_extend_bet");
		}
		public call_blackjack_bet_double ():void{
			this._stream.reset();
			this._stream.writeUint16( 102 );
			this.sendMsg( 102 , this._stream);
			//Log.outDebug("CS====> cmd:102 blackjack_bet_double");
		}
		public call_blackjack_part_card ():void{
			this._stream.reset();
			this._stream.writeUint16( 103 );
			this.sendMsg( 103 , this._stream);
			//Log.outDebug("CS====> cmd:103 blackjack_part_card");
		}
		public call_blackjack_ask_card ():void{
			this._stream.reset();
			this._stream.writeUint16( 104 );
			this.sendMsg( 104 , this._stream);
			//Log.outDebug("CS====> cmd:104 blackjack_ask_card");
		}
		public call_blackjack_stop_card ():void{
			this._stream.reset();
			this._stream.writeUint16( 105 );
			this.sendMsg( 105 , this._stream);
			//Log.outDebug("CS====> cmd:105 blackjack_stop_card");
		}
		public call_blackjack_bet_complete ():void{
			this._stream.reset();
			this._stream.writeUint16( 106 );
			this.sendMsg( 106 , this._stream);
			//Log.outDebug("CS====> cmd:106 blackjack_bet_complete");
		}
		public call_tbniuniu_bet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 107 );
			//下注倍率
			this._stream.writeUint8 (num);
			this.sendMsg( 107 , this._stream);
			//Log.outDebug("CS====> cmd:107 tbniuniu_bet");
		}
		public call_tbniuniu_showcard ():void{
			this._stream.reset();
			this._stream.writeUint16( 108 );
			this.sendMsg( 108 , this._stream);
			//Log.outDebug("CS====> cmd:108 tbniuniu_showcard");
		}
		public call_tbniuniu_continue ():void{
			this._stream.reset();
			this._stream.writeUint16( 109 );
			this.sendMsg( 109 , this._stream);
			//Log.outDebug("CS====> cmd:109 tbniuniu_continue");
		}
		public call_tbniuniu_trusteeship ():void{
			this._stream.reset();
			this._stream.writeUint16( 110 );
			this.sendMsg( 110 , this._stream);
			//Log.outDebug("CS====> cmd:110 tbniuniu_trusteeship");
		}
		public call_brniuniu_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 111 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 111 , this._stream);
			//Log.outDebug("CS====> cmd:111 brniuniu_bet");
		}
		public call_fish_get_dole ():void{
			this._stream.reset();
			this._stream.writeUint16( 112 );
			this.sendMsg( 112 , this._stream);
			//Log.outDebug("CS====> cmd:112 fish_get_dole");
		}
		public call_start_fire (toward : number ,target_oid : number ,is_boom : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 113 );
			//相对自身的朝向
			this._stream.writeUint8 (toward);
			//瞄准目标OID
			this._stream.writeUint32 (target_oid);
			//是否炸金币
			this._stream.writeUint8 (is_boom);
			this.sendMsg( 113 , this._stream);
			//Log.outDebug("CS====> cmd:113 start_fire");
		}
		public call_fire_at (oid : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 115 );
			//鱼ID
			this._stream.writeUint32 (oid);
			this.sendMsg( 115 , this._stream);
			//Log.outDebug("CS====> cmd:115 fire_at");
		}
		public call_change_fire_lv (lv : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 116 );
			//目标炮的等级
			this._stream.writeUint32 (lv);
			this.sendMsg( 116 , this._stream);
			//Log.outDebug("CS====> cmd:116 change_fire_lv");
		}
		public call_aim_at (oid : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 117 );
			//鱼ID
			this._stream.writeUint32 (oid);
			this.sendMsg( 117 , this._stream);
			//Log.outDebug("CS====> cmd:117 aim_at");
		}
		public call_change_bullet_state (state : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 118 );
			//状态
			this._stream.writeUint32 (state);
			this.sendMsg( 118 , this._stream);
			//Log.outDebug("CS====> cmd:118 change_bullet_state");
		}
		public call_fish_result (before : number ,after : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 119 );
			//状态
			this._stream.writeUint32 (before);
			//状态
			this._stream.writeUint32 (after);
			this.sendMsg( 119 , this._stream);
			//Log.outDebug("CS====> cmd:119 fish_result");
		}
		public call_brniuniu_xiazhuang ():void{
			this._stream.reset();
			this._stream.writeUint16( 120 );
			this.sendMsg( 120 , this._stream);
			//Log.outDebug("CS====> cmd:120 brniuniu_xiazhuang");
		}
		public call_brniuniu_shangzhuang ():void{
			this._stream.reset();
			this._stream.writeUint16( 121 );
			this.sendMsg( 121 , this._stream);
			//Log.outDebug("CS====> cmd:121 brniuniu_shangzhuang");
		}
		public call_brniuniu_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 122 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 122 , this._stream);
			//Log.outDebug("CS====> cmd:122 brniuniu_seated");
		}
		public call_brnn_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 123 );
			this.sendMsg( 123 , this._stream);
			//Log.outDebug("CS====> cmd:123 brnn_get_mapinfo");
		}
		public call_sg_banker (opt_type : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 126 );
			//操作1买2不买
			this._stream.writeUint8 (opt_type);
			this.sendMsg( 126 , this._stream);
			//Log.outDebug("CS====> cmd:126 sg_banker");
		}
		public call_sg_bet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 127 );
			//下注倍数
			this._stream.writeUint8 (num);
			this.sendMsg( 127 , this._stream);
			//Log.outDebug("CS====> cmd:127 sg_bet");
		}
		public call_sg_show_cards ():void{
			this._stream.reset();
			this._stream.writeUint16( 128 );
			this.sendMsg( 128 , this._stream);
			//Log.outDebug("CS====> cmd:128 sg_show_cards");
		}
		public call_longhu_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 129 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 129 , this._stream);
			//Log.outDebug("CS====> cmd:129 longhu_bet");
		}
		public call_longhu_xiazhuang ():void{
			this._stream.reset();
			this._stream.writeUint16( 130 );
			this.sendMsg( 130 , this._stream);
			//Log.outDebug("CS====> cmd:130 longhu_xiazhuang");
		}
		public call_longhu_shangzhuang ():void{
			this._stream.reset();
			this._stream.writeUint16( 131 );
			this.sendMsg( 131 , this._stream);
			//Log.outDebug("CS====> cmd:131 longhu_shangzhuang");
		}
		public call_longhu_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 132 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 132 , this._stream);
			//Log.outDebug("CS====> cmd:132 longhu_seated");
		}
		public call_longhu_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 133 );
			this.sendMsg( 133 , this._stream);
			//Log.outDebug("CS====> cmd:133 longhu_get_mapinfo");
		}
		public call_ebgang_banker (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 135 );
			//抢庄倍率
			this._stream.writeUint8 (num);
			this.sendMsg( 135 , this._stream);
			//Log.outDebug("CS====> cmd:135 ebgang_banker");
		}
		public call_ebgang_bet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 136 );
			//下注倍数
			this._stream.writeUint8 (num);
			this.sendMsg( 136 , this._stream);
			//Log.outDebug("CS====> cmd:136 ebgang_bet");
		}
		public call_hhdazhan_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 137 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 137 , this._stream);
			//Log.outDebug("CS====> cmd:137 hhdazhan_bet");
		}
		public call_hhdazhan_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 138 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 138 , this._stream);
			//Log.outDebug("CS====> cmd:138 hhdazhan_seated");
		}
		public call_qzpaijiu_banker (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 139 );
			//抢庄倍率
			this._stream.writeUint8 (num);
			this.sendMsg( 139 , this._stream);
			//Log.outDebug("CS====> cmd:139 qzpaijiu_banker");
		}
		public call_qzpaijiu_bet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 140 );
			//下注倍数
			this._stream.writeUint8 (num);
			this.sendMsg( 140 , this._stream);
			//Log.outDebug("CS====> cmd:140 qzpaijiu_bet");
		}
		public call_shuiguoji_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 141 );
			//下注倍数
			this._stream.writeUint8 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 141 , this._stream);
			//Log.outDebug("CS====> cmd:141 shuiguoji_bet");
		}
		public call_shuiguoji_lottery (type : number ,param : string):void{
			this._stream.reset();
			this._stream.writeUint16( 142 );
			//开奖类型0正常开奖1猜大小
			this._stream.writeUint8 (type);
			//参数为下注类型和下注倍数用逗号隔开
			this._stream.writeString (param);
			this.sendMsg( 142 , this._stream);
			//Log.outDebug("CS====> cmd:142 shuiguoji_lottery");
		}
		public call_shuiguoji_result ():void{
			this._stream.reset();
			this._stream.writeUint16( 143 );
			this.sendMsg( 143 , this._stream);
			//Log.outDebug("CS====> cmd:143 shuiguoji_result");
		}
		public call_robot_start_fire (robot_oid : number ,toward : number ,target_oid : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 144 );
			//机器人oid
			this._stream.writeUint32 (robot_oid);
			//相对自身的朝向
			this._stream.writeUint8 (toward);
			//瞄准目标OID
			this._stream.writeUint32 (target_oid);
			this.sendMsg( 144 , this._stream);
			//Log.outDebug("CS====> cmd:144 robot_start_fire");
		}
		public call_robot_fire_at (robot_oid : number ,oid : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 145 );
			//机器人oid
			this._stream.writeUint32 (robot_oid);
			//鱼ID
			this._stream.writeUint32 (oid);
			this.sendMsg( 145 , this._stream);
			//Log.outDebug("CS====> cmd:145 robot_fire_at");
		}
		public call_baijiale_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 146 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 146 , this._stream);
			//Log.outDebug("CS====> cmd:146 baijiale_bet");
		}
		public call_baijiale_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 147 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 147 , this._stream);
			//Log.outDebug("CS====> cmd:147 baijiale_seated");
		}
		public call_baijiale_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 148 );
			this.sendMsg( 148 , this._stream);
			//Log.outDebug("CS====> cmd:148 baijiale_get_mapinfo");
		}
		public call_hhdz_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 150 );
			this.sendMsg( 150 , this._stream);
			//Log.outDebug("CS====> cmd:150 hhdz_get_mapinfo");
		}
		public call_longhu_update_road ():void{
			this._stream.reset();
			this._stream.writeUint16( 152 );
			this.sendMsg( 152 , this._stream);
			//Log.outDebug("CS====> cmd:152 longhu_update_road");
		}
		public call_baijiale_update_road ():void{
			this._stream.reset();
			this._stream.writeUint16( 153 );
			this.sendMsg( 153 , this._stream);
			//Log.outDebug("CS====> cmd:153 baijiale_update_road");
		}
		public call_shisanshui_playing (cards : string ,opt_type : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 154 );
			//拼好的所有牌
			this._stream.writeString (cards);
			//是否特殊牌0不是1是
			this._stream.writeUint8 (opt_type);
			this.sendMsg( 154 , this._stream);
			//Log.outDebug("CS====> cmd:154 shisanshui_playing");
		}
		public call_benchibaoma_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 155 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 155 , this._stream);
			//Log.outDebug("CS====> cmd:155 benchibaoma_bet");
		}
		public call_benchibaoma_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 156 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 156 , this._stream);
			//Log.outDebug("CS====> cmd:156 benchibaoma_seated");
		}
		public call_benchibaoma_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 157 );
			this.sendMsg( 157 , this._stream);
			//Log.outDebug("CS====> cmd:157 benchibaoma_get_mapinfo");
		}
		public call_bairendezhou_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 159 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 159 , this._stream);
			//Log.outDebug("CS====> cmd:159 bairendezhou_bet");
		}
		public call_bairendezhou_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 160 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 160 , this._stream);
			//Log.outDebug("CS====> cmd:160 bairendezhou_seated");
		}
		public call_bairendezhou_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 161 );
			this.sendMsg( 161 , this._stream);
			//Log.outDebug("CS====> cmd:161 bairendezhou_get_mapinfo");
		}
		public call_toubao_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 163 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 163 , this._stream);
			//Log.outDebug("CS====> cmd:163 toubao_bet");
		}
		public call_toubao_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 164 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 164 , this._stream);
			//Log.outDebug("CS====> cmd:164 toubao_seated");
		}
		public call_hhdz_update_road ():void{
			this._stream.reset();
			this._stream.writeUint16( 165 );
			this.sendMsg( 165 , this._stream);
			//Log.outDebug("CS====> cmd:165 hhdz_update_road");
		}
		public call_bairendezhou_update_road ():void{
			this._stream.reset();
			this._stream.writeUint16( 166 );
			this.sendMsg( 166 , this._stream);
			//Log.outDebug("CS====> cmd:166 bairendezhou_update_road");
		}
		public call_end_roomcard_game (mapid : string ,room_config_id : number ,index : number ,card_id : string):void{
			this._stream.reset();
			this._stream.writeUint16( 167 );
			//游戏id
			this._stream.writeString (mapid);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			//入座位置
			this._stream.writeUint8 (index);
			//房卡id
			this._stream.writeString (card_id);
			this.sendMsg( 167 , this._stream);
			//Log.outDebug("CS====> cmd:167 end_roomcard_game");
		}
		public call_dezhou_bet ():void{
			this._stream.reset();
			this._stream.writeUint16( 168 );
			this.sendMsg( 168 , this._stream);
			//Log.outDebug("CS====> cmd:168 dezhou_bet");
		}
		public call_dezhou_addbet (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 169 );
			//下注金额
			this._stream.writeUint32 (num);
			this.sendMsg( 169 , this._stream);
			//Log.outDebug("CS====> cmd:169 dezhou_addbet");
		}
		public call_dezhou_pass ():void{
			this._stream.reset();
			this._stream.writeUint16( 170 );
			this.sendMsg( 170 , this._stream);
			//Log.outDebug("CS====> cmd:170 dezhou_pass");
		}
		public call_dezhou_discard ():void{
			this._stream.reset();
			this._stream.writeUint16( 171 );
			this.sendMsg( 171 , this._stream);
			//Log.outDebug("CS====> cmd:171 dezhou_discard");
		}
		public call_dezhou_take_money_to_room (num : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 172 );
			//携带金额
			this._stream.writeUint32 (num);
			this.sendMsg( 172 , this._stream);
			//Log.outDebug("CS====> cmd:172 dezhou_take_money_to_room");
		}
		public call_vote_end_roomcard (mapid : string ,room_config_id : number ,index : number ,card_id : string,isagree : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 173 );
			//游戏id
			this._stream.writeString (mapid);
			//房间配置id
			this._stream.writeUint32 (room_config_id);
			//入座位置
			this._stream.writeUint8 (index);
			//房卡id
			this._stream.writeString (card_id);
			//是否同意
			this._stream.writeUint8 (isagree);
			this.sendMsg( 173 , this._stream);
			//Log.outDebug("CS====> cmd:173 vote_end_roomcard");
		}
		public call_zoo_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 174 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 174 , this._stream);
			//Log.outDebug("CS====> cmd:174 zoo_bet");
		}
		public call_zoo_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 175 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 175 , this._stream);
			//Log.outDebug("CS====> cmd:175 zoo_seated");
		}
		public call_zoo_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 176 );
			this.sendMsg( 176 , this._stream);
			//Log.outDebug("CS====> cmd:176 zoo_get_mapinfo");
		}
		public call_dezhou_continue ():void{
			this._stream.reset();
			this._stream.writeUint16( 178 );
			this.sendMsg( 178 , this._stream);
			//Log.outDebug("CS====> cmd:178 dezhou_continue");
		}
		public call_get_app_addr (app_type : number ,device_type : number ,data : string):void{
			this._stream.reset();
			this._stream.writeUint16( 179 );
			//入口类型
			this._stream.writeUint8 (app_type);
			//设备类型
			this._stream.writeUint8 (device_type);
			//其他数据
			this._stream.writeString (data);
			this.sendMsg( 179 , this._stream);
			//Log.outDebug("CS====> cmd:179 get_app_addr");
		}
		public call_pdk_play_card (typ : number ,len : number ,val : number ,cards : string):void{
			this._stream.reset();
			this._stream.writeUint16( 180 );
			//牌类型
			this._stream.writeUint8 (typ);
			//牌长度
			this._stream.writeUint8 (len);
			//最大牌
			this._stream.writeUint8 (val);
			//出的牌
			this._stream.writeString (cards);
			this.sendMsg( 180 , this._stream);
			//Log.outDebug("CS====> cmd:180 pdk_play_card");
		}
		public call_pdk_pass_card ():void{
			this._stream.reset();
			this._stream.writeUint16( 181 );
			this.sendMsg( 181 , this._stream);
			//Log.outDebug("CS====> cmd:181 pdk_pass_card");
		}
		public call_pdk_qiang_guan (typ : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 182 );
			//操作类型0不抢1抢
			this._stream.writeUint8 (typ);
			this.sendMsg( 182 , this._stream);
			//Log.outDebug("CS====> cmd:182 pdk_qiang_guan");
		}
		public call_get_qifu_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 183 );
			this.sendMsg( 183 , this._stream);
			//Log.outDebug("CS====> cmd:183 get_qifu_list");
		}
		public call_player_qifu (typ : number ,id : number ,name : string):void{
			this._stream.reset();
			this._stream.writeUint16( 184 );
			//祈福类型
			this._stream.writeUint8 (typ);
			//祈福枚举
			this._stream.writeUint8 (id);
			//祈福对象名称
			this._stream.writeString (name);
			this.sendMsg( 184 , this._stream);
			//Log.outDebug("CS====> cmd:184 player_qifu");
		}
		public call_recharge_confirm (account : string ,money : number ,type : number ,from_msg : string):void{
			this._stream.reset();
			this._stream.writeUint16( 185 );
			//账号
			this._stream.writeString (account);
			//转账的钱
			this._stream.writeInt32 (money);
			//转账类型
			this._stream.writeInt32 (type);
			//转账信息
			this._stream.writeString (from_msg);
			this.sendMsg( 185 , this._stream);
			//Log.outDebug("CS====> cmd:185 recharge_confirm");
		}
		public call_login_invite (typ : number ,server_name : string,account : string,pwd : string,invitor : string):void{
			this._stream.reset();
			this._stream.writeUint16( 186 );
			//登录类型
			this._stream.writeUint8 (typ);
			//服务名
			this._stream.writeString (server_name);
			//账号
			this._stream.writeString (account);
			//密码
			this._stream.writeString (pwd);
			//非
			this._stream.writeString (invitor);
			this.sendMsg( 186 , this._stream);
			//Log.outDebug("CS====> cmd:186 login_invite");
		}
		public call_pdk_trusteeship ():void{
			this._stream.reset();
			this._stream.writeUint16( 187 );
			this.sendMsg( 187 , this._stream);
			//Log.outDebug("CS====> cmd:187 pdk_trusteeship");
		}
		public call_sss_cancel_special ():void{
			this._stream.reset();
			this._stream.writeUint16( 188 );
			this.sendMsg( 188 , this._stream);
			//Log.outDebug("CS====> cmd:188 sss_cancel_special");
		}
		public call_scmj_exchange (cards : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 189 );
			//选的牌
			this._stream.writeString (cards);
			this.sendMsg( 189 , this._stream);
			//Log.outDebug("CS====> cmd:189 scmj_exchange");
		}
		public call_scmj_set_lack (color : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 190 );
			//选的花色
			this._stream.writeUint8 (color);
			this.sendMsg( 190 , this._stream);
			//Log.outDebug("CS====> cmd:190 scmj_set_lack");
		}
		public call_scmj_play_card (cards : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 191 );
			//出的牌
			this._stream.writeUint8 (cards);
			this.sendMsg( 191 , this._stream);
			//Log.outDebug("CS====> cmd:191 scmj_play_card");
		}
		public call_scmj_hu ():void{
			this._stream.reset();
			this._stream.writeUint16( 192 );
			this.sendMsg( 192 , this._stream);
			//Log.outDebug("CS====> cmd:192 scmj_hu");
		}
		public call_scmj_gang ():void{
			this._stream.reset();
			this._stream.writeUint16( 193 );
			this.sendMsg( 193 , this._stream);
			//Log.outDebug("CS====> cmd:193 scmj_gang");
		}
		public call_scmj_peng ():void{
			this._stream.reset();
			this._stream.writeUint16( 194 );
			this.sendMsg( 194 , this._stream);
			//Log.outDebug("CS====> cmd:194 scmj_peng");
		}
		public call_scmj_pass ():void{
			this._stream.reset();
			this._stream.writeUint16( 195 );
			this.sendMsg( 195 , this._stream);
			//Log.outDebug("CS====> cmd:195 scmj_pass");
		}
		public call_get_daili_yonghu (date_type : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 196 );
			//
			this._stream.writeInt32 (date_type);
			this.sendMsg( 196 , this._stream);
			//Log.outDebug("CS====> cmd:196 get_daili_yonghu");
		}
		public call_login_parameter (typ : number ,server_name : string,account : string,pwd : string,invitor : string,system : string,model : string,deviceid : string,parms : string):void{
			this._stream.reset();
			this._stream.writeUint16( 197 );
			//登录类型
			this._stream.writeUint8 (typ);
			//服务名
			this._stream.writeString (server_name);
			//账号
			this._stream.writeString (account);
			//密码
			this._stream.writeString (pwd);
			//邀请码
			this._stream.writeString (invitor);
			//系统版本号
			this._stream.writeString (system);
			//手机型号
			this._stream.writeString (model);
			//唯一标识
			this._stream.writeString (deviceid);
			//额外数据
			this._stream.writeString (parms);
			this.sendMsg( 197 , this._stream);
			//Log.outDebug("CS====> cmd:197 login_parameter");
		}
		public call_get_vip_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 198 );
			this.sendMsg( 198 , this._stream);
			//Log.outDebug("CS====> cmd:198 get_vip_list");
		}
		public call_get_vip_award (lv : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 199 );
			//
			this._stream.writeInt32 (lv);
			this.sendMsg( 199 , this._stream);
			//Log.outDebug("CS====> cmd:199 get_vip_award");
		}
		public call_eluosilunpan_bet (num : number ,index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 200 );
			//下注金额
			this._stream.writeUint32 (num);
			//下注位置
			this._stream.writeUint8 (index);
			this.sendMsg( 200 , this._stream);
			//Log.outDebug("CS====> cmd:200 eluosilunpan_bet");
		}
		public call_eluosilunpan_seated (index : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 201 );
			//入座位置
			this._stream.writeUint8 (index);
			this.sendMsg( 201 , this._stream);
			//Log.outDebug("CS====> cmd:201 eluosilunpan_seated");
		}
		public call_eluosilunpan_get_mapinfo ():void{
			this._stream.reset();
			this._stream.writeUint16( 202 );
			this.sendMsg( 202 , this._stream);
			//Log.outDebug("CS====> cmd:202 eluosilunpan_get_mapinfo");
		}
		public call_signin ():void{
			this._stream.reset();
			this._stream.writeUint16( 204 );
			this.sendMsg( 204 , this._stream);
			//Log.outDebug("CS====> cmd:204 signin");
		}
		public call_new_dailyshare ():void{
			this._stream.reset();
			this._stream.writeUint16( 205 );
			this.sendMsg( 205 , this._stream);
			//Log.outDebug("CS====> cmd:205 new_dailyshare");
		}
		public call_save_yuebao (money : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 206 );
			//
			this._stream.writeInt32 (money);
			this.sendMsg( 206 , this._stream);
			//Log.outDebug("CS====> cmd:206 save_yuebao");
		}
		public call_take_yuebao (money : number ,drawpwd : string):void{
			this._stream.reset();
			this._stream.writeUint16( 207 );
			//
			this._stream.writeInt32 (money);
			//
			this._stream.writeString (drawpwd);
			this.sendMsg( 207 , this._stream);
			//Log.outDebug("CS====> cmd:207 take_yuebao");
		}
		public call_player_qifu_new (typ : number ,id : number ,name : string):void{
			this._stream.reset();
			this._stream.writeUint16( 208 );
			//祈福类型
			this._stream.writeUint8 (typ);
			//祈福枚举
			this._stream.writeUint8 (id);
			//祈福对象名称
			this._stream.writeString (name);
			this.sendMsg( 208 , this._stream);
			//Log.outDebug("CS====> cmd:208 player_qifu_new");
		}
		public call_receive_vip_award (lv : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 209 );
			//
			this._stream.writeInt32 (lv);
			this.sendMsg( 209 , this._stream);
			//Log.outDebug("CS====> cmd:209 receive_vip_award");
		}
		public call_score_lucky_draw (type_id : number ):void{
			this._stream.reset();
			this._stream.writeUint16( 210 );
			//
			this._stream.writeUint8 (type_id);
			this.sendMsg( 210 , this._stream);
			//Log.outDebug("CS====> cmd:210 score_lucky_draw");
		}
		public call_get_bind_reward ():void{
			this._stream.reset();
			this._stream.writeUint16( 211 );
			this.sendMsg( 211 , this._stream);
			//Log.outDebug("CS====> cmd:211 get_bind_reward");
		}
		public call_get_commission ():void{
			this._stream.reset();
			this._stream.writeUint16( 212 );
			this.sendMsg( 212 , this._stream);
			//Log.outDebug("CS====> cmd:212 get_commission");
		}
		public call_free_sytle_sync (data : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 213 );
			//
			this._stream.writeString (data);
			this.sendMsg( 213 , this._stream);
			//Log.outDebug("CS====> cmd:213 free_sytle_sync");
		}
		public call_check_login_vf (mobile : string ,code : string,server_name : string):void{
			this._stream.reset();
			this._stream.writeUint16( 214 );
			//手机号
			this._stream.writeString (mobile);
			//验证码
			this._stream.writeString (code);
			//运营商
			this._stream.writeString (server_name);
			this.sendMsg( 214 , this._stream);
			//Log.outDebug("CS====> cmd:214 check_login_vf");
		}
		public call_set_money_pwd (pwd : string ):void{
			this._stream.reset();
			this._stream.writeUint16( 215 );
			//取款密码
			this._stream.writeString (pwd);
			this.sendMsg( 215 , this._stream);
			//Log.outDebug("CS====> cmd:215 set_money_pwd");
		}
		public call_get_first_pay ():void{
			this._stream.reset();
			this._stream.writeUint16( 216 );
			this.sendMsg( 216 , this._stream);
			//Log.outDebug("CS====> cmd:216 get_first_pay");
		}
		public call_set_role_info (type : number ,info : string):void{
			this._stream.reset();
			this._stream.writeUint16( 217 );
			//
			this._stream.writeInt32 (type);
			//
			this._stream.writeString (info);
			this.sendMsg( 217 , this._stream);
			//Log.outDebug("CS====> cmd:217 set_role_info");
		}
		public call_get_bulletin_list ():void{
			this._stream.reset();
			this._stream.writeUint16( 218 );
			this.sendMsg( 218 , this._stream);
			//Log.outDebug("CS====> cmd:218 get_bulletin_list");
		}
	}

	export class both_null_action
	{
		public optcode:number = 0;
		public optname:string = "onNull_action";
	
		public constructor()
		{
			
		}
	}
	export class both_ping_pong
	{
		public optcode:number = 0;
		public optname:string = "onPing_pong";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_session
	{
		public optcode:number = 0;
		public optname:string = "onGet_session";
	
		/**
		* 
		*/
		public sessionkey : string ;	//String
		/**
		* 签名
		*/
		public sign : string ;	//String
		/**
		* 版本
		*/
		public version : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_session, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.sessionkey = bytes. readString ();		
			//签名
			self.sign = bytes. readString ();		
			//版本
			self.version = bytes. readString ();		
		}
	}
	export class c2s_forced_into
	{
		public optcode:number = 0;
		public optname:string = "onForced_into";
	
		public constructor()
		{
			
		}
	}
	export class c2s_gm_command
	{
		public optcode:number = 0;
		public optname:string = "onGm_command";
	
		/**
		* 字符串string
		*/
		public gm_commands : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_gm_command, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//字符串string
			self.gm_commands = bytes. readString ();		
		}
	}
	export class s2c_operation_failed
	{
		public optcode:number = 0;
		public optname:string = "onOperation_failed";
	
		/**
		* 操作类型
		*/
		public type : number ;	//uint16
		/**
		* 失败原因
		*/
		public reason : number ;	//uint16
		/**
		* 预留参数
		*/
		public data : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_operation_failed, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//操作类型
			self.type = bytes. readUint16 ();		
			//失败原因
			self.reason = bytes. readUint16 ();		
			//预留参数
			self.data = bytes. readString ();		
		}
	}
	export class both_sync_mstime
	{
		public optcode:number = 0;
		public optname:string = "onSync_mstime";
	
		/**
		* 服务器运行的毫秒数
		*/
		public mstime_now : number ;	//uint32
		/**
		* 自然时间
		*/
		public time_now : number ;	//uint32
		/**
		* 自然时间的服务器启动时间
		*/
		public open_time : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:both_sync_mstime, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//服务器运行的毫秒数
			self.mstime_now = bytes. readUint32 ();		
			//自然时间
			self.time_now = bytes. readUint32 ();		
			//自然时间的服务器启动时间
			self.open_time = bytes. readUint32 ();		
		}
	}
	export class s2c_ud_object
	{
		public optcode:number = 0;
		public optname:string = "onUd_object";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ud_control
	{
		public optcode:number = 0;
		public optname:string = "onUd_control";
	
		public constructor()
		{
			
		}
	}
	export class s2c_ud_control_result
	{
		public optcode:number = 0;
		public optname:string = "onUd_control_result";
	
		public constructor()
		{
			
		}
	}
	export class s2c_grid_update_data
	{
		public optcode:number = 0;
		public optname:string = "onGrid_update_data";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_login_vf
	{
		public optcode:number = 0;
		public optname:string = "onGet_login_vf";
	
		/**
		* 运营商
		*/
		public server_name : string ;	//String
		/**
		* 手机号
		*/
		public mobile : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_login_vf, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//运营商
			self.server_name = bytes. readString ();		
			//手机号
			self.mobile = bytes. readString ();		
		}
	}
	export class c2s_login
	{
		public optcode:number = 0;
		public optname:string = "onLogin";
	
		/**
		* 登录类型
		*/
		public typ : number ;	//uint8
		/**
		* 服务名
		*/
		public server_name : string ;	//String
		/**
		* 账号
		*/
		public account : string ;	//String
		/**
		* 密码
		*/
		public pwd : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_login, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//登录类型
			self.typ = bytes. readUint8 ();		
			//服务名
			self.server_name = bytes. readString ();		
			//账号
			self.account = bytes. readString ();		
			//密码
			self.pwd = bytes. readString ();		
		}
	}
	export class c2s_logout
	{
		public optcode:number = 0;
		public optname:string = "onLogout";
	
		public constructor()
		{
			
		}
	}
	export class c2s_chat_send
	{
		public optcode:number = 0;
		public optname:string = "onChat_send";
	
		/**
		* 类型
		*/
		public type : number ;	//uint8
		/**
		* 内容
		*/
		public content : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_chat_send, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//类型
			self.type = bytes. readUint8 ();		
			//内容
			self.content = bytes. readString ();		
		}
	}
	export class s2c_chat_info
	{
		public optcode:number = 0;
		public optname:string = "onChat_info";
	
		/**
		* 类型
		*/
		public type : number ;	//uint8
		/**
		* guid
		*/
		public guid : string ;	//String
		/**
		* 名字
		*/
		public name : string ;	//String
		/**
		* 头像
		*/
		public head : string ;	//String
		/**
		* 性别
		*/
		public sex : number ;	//uint8
		/**
		* 月卡
		*/
		public yueka : number ;	//uint8
		/**
		* 内容
		*/
		public content : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_chat_info, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//类型
			self.type = bytes. readUint8 ();		
			//guid
			self.guid = bytes. readString ();		
			//名字
			self.name = bytes. readString ();		
			//头像
			self.head = bytes. readString ();		
			//性别
			self.sex = bytes. readUint8 ();		
			//月卡
			self.yueka = bytes. readUint8 ();		
			//内容
			self.content = bytes. readString ();		
		}
	}
	export class c2s_create_room
	{
		public optcode:number = 0;
		public optname:string = "onCreate_room";
	
		/**
		* 游戏id
		*/
		public id : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		/**
		* 局数
		*/
		public game_number : number ;	//uint32
		/**
		* 支付类型1:房主2:AA
		*/
		public pay_typ : number ;	//uint32
		/**
		* 额外的参数
		*/
		public extra : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_create_room, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.id = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
			//局数
			self.game_number = bytes. readUint32 ();		
			//支付类型1:房主2:AA
			self.pay_typ = bytes. readUint32 ();		
			//额外的参数
			self.extra = bytes. readString ();		
		}
	}
	export class c2s_join_room
	{
		public optcode:number = 0;
		public optname:string = "onJoin_room";
	
		/**
		* 游戏id
		*/
		public id : string ;	//String
		/**
		* 房卡id
		*/
		public card_id : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_join_room, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.id = bytes. readString ();		
			//房卡id
			self.card_id = bytes. readString ();		
		}
	}
	export class c2s_match_game
	{
		public optcode:number = 0;
		public optname:string = "onMatch_game";
	
		/**
		* 游戏id
		*/
		public id : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_match_game, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.id = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
		}
	}
	export class c2s_cancel_match
	{
		public optcode:number = 0;
		public optname:string = "onCancel_match";
	
		public constructor()
		{
			
		}
	}
	export class c2s_leave_game
	{
		public optcode:number = 0;
		public optname:string = "onLeave_game";
	
		public constructor()
		{
			
		}
	}
	export class s2c_join_game_result
	{
		public optcode:number = 0;
		public optname:string = "onJoin_game_result";
	
		/**
		* 主玩家unit
		*/
		public guid : string ;	//String
		/**
		* 游戏id
		*/
		public mapid : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_join_game_result, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//主玩家unit
			self.guid = bytes. readString ();		
			//游戏id
			self.mapid = bytes. readString ();		
		}
	}
	export class c2s_switch_seat
	{
		public optcode:number = 0;
		public optname:string = "onSwitch_seat";
	
		/**
		* 去哪个座位
		*/
		public to_index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_switch_seat, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//去哪个座位
			self.to_index = bytes. readUint8 ();		
		}
	}
	export class c2s_sync_player_info
	{
		public optcode:number = 0;
		public optname:string = "onSync_player_info";
	
		public constructor()
		{
			
		}
	}
	export class c2s_sync_money
	{
		public optcode:number = 0;
		public optname:string = "onSync_money";
	
		public constructor()
		{
			
		}
	}
	export class c2s_bind
	{
		public optcode:number = 0;
		public optname:string = "onBind";
	
		/**
		* 玩家账号
		*/
		public account : string ;	//String
		/**
		* 绑定类型(
		*/
		public type : number ;	//uint16
		/**
		* 绑定微信时需要该参数
		*/
		public js_code : string ;	//String
		/**
		* 绑定账号时需要该参数
		*/
		public username : string ;	//String
		/**
		* 绑定账号时需要该参数
		*/
		public pwd1 : string ;	//String
		/**
		* 绑定账号时需要该参数
		*/
		public pwd2 : string ;	//String
		/**
		* 绑定手机时需要该参数
		*/
		public mobile : string ;	//String
		/**
		* 绑定手机时需要该参数
		*/
		public bindcode : string ;	//String
		/**
		* 非必填 0网站1安卓2苹果
		*/
		public device : number ;	//uint16
		/**
		* 非
		*/
		public invitor : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_bind, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//玩家账号
			self.account = bytes. readString ();		
			//绑定类型(
			self.type = bytes. readUint16 ();		
			//绑定微信时需要该参数
			self.js_code = bytes. readString ();		
			//绑定账号时需要该参数
			self.username = bytes. readString ();		
			//绑定账号时需要该参数
			self.pwd1 = bytes. readString ();		
			//绑定账号时需要该参数
			self.pwd2 = bytes. readString ();		
			//绑定手机时需要该参数
			self.mobile = bytes. readString ();		
			//绑定手机时需要该参数
			self.bindcode = bytes. readString ();		
			//非必填 0网站1安卓2苹果
			self.device = bytes. readUint16 ();		
			//非
			self.invitor = bytes. readString ();		
		}
	}
	export class c2s_get_mails
	{
		public optcode:number = 0;
		public optname:string = "onGet_mails";
	
		public constructor()
		{
			
		}
	}
	export class s2c_send_notices
	{
		public optcode:number = 0;
		public optname:string = "onSend_notices";
	
		/**
		* 公告内容
		*/
		public content : string ;	//String
		/**
		* 类型
		*/
		public type : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_send_notices, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//公告内容
			self.content = bytes. readString ();		
			//类型
			self.type = bytes. readUint8 ();		
		}
	}
	export class c2s_read_mail
	{
		public optcode:number = 0;
		public optname:string = "onRead_mail";
	
		/**
		* 
		*/
		public id : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_read_mail, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.id = bytes. readInt32 ();		
		}
	}
	export class c2s_del_mail
	{
		public optcode:number = 0;
		public optname:string = "onDel_mail";
	
		/**
		* 
		*/
		public id : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_del_mail, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.id = bytes. readInt32 ();		
		}
	}
	export class c2s_sync_web_time
	{
		public optcode:number = 0;
		public optname:string = "onSync_web_time";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_bindvf
	{
		public optcode:number = 0;
		public optname:string = "onGet_bindvf";
	
		/**
		* 
		*/
		public mobile : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_bindvf, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.mobile = bytes. readString ();		
		}
	}
	export class c2s_start_roomcard_game
	{
		public optcode:number = 0;
		public optname:string = "onStart_roomcard_game";
	
		/**
		* 游戏id
		*/
		public mapid : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		/**
		* 主玩家unit
		*/
		public guid : string ;	//String
		/**
		* 房卡id
		*/
		public card_id : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_start_roomcard_game, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.mapid = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
			//主玩家unit
			self.guid = bytes. readString ();		
			//房卡id
			self.card_id = bytes. readString ();		
		}
	}
	export class c2s_get_service
	{
		public optcode:number = 0;
		public optname:string = "onGet_service";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_reset_code
	{
		public optcode:number = 0;
		public optname:string = "onGet_reset_code";
	
		/**
		* 手机号
		*/
		public mobile : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_reset_code, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//手机号
			self.mobile = bytes. readString ();		
		}
	}
	export class c2s_get_bet_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_bet_list";
	
		/**
		* 
		*/
		public page_count : number ;	//int32
		/**
		* 
		*/
		public per_count : number ;	//int32
		/**
		* 
		*/
		public time : number ;	//int32
		/**
		* 游戏id
		*/
		public game_id : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		/**
		* 
		*/
		public index : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_bet_list, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.page_count = bytes. readInt32 ();		
			//
			self.per_count = bytes. readInt32 ();		
			//
			self.time = bytes. readInt32 ();		
			//游戏id
			self.game_id = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
			//
			self.index = bytes. readInt32 ();		
		}
	}
	export class c2s_reset_pwd
	{
		public optcode:number = 0;
		public optname:string = "onReset_pwd";
	
		/**
		* 
		*/
		public vfcode : string ;	//String
		/**
		* 
		*/
		public pwd1 : string ;	//String
		/**
		* 
		*/
		public pwd2 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_reset_pwd, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.vfcode = bytes. readString ();		
			//
			self.pwd1 = bytes. readString ();		
			//
			self.pwd2 = bytes. readString ();		
		}
	}
	export class c2s_set_info
	{
		public optcode:number = 0;
		public optname:string = "onSet_info";
	
		/**
		* 
		*/
		public headimg : string ;	//String
		/**
		* 
		*/
		public sex : string ;	//String
		/**
		* 
		*/
		public device_token : string ;	//String
		/**
		* 
		*/
		public device_type : string ;	//String
		/**
		* 
		*/
		public isuninstall : string ;	//String
		/**
		* 
		*/
		public nickname : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_set_info, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.headimg = bytes. readString ();		
			//
			self.sex = bytes. readString ();		
			//
			self.device_token = bytes. readString ();		
			//
			self.device_type = bytes. readString ();		
			//
			self.isuninstall = bytes. readString ();		
			//
			self.nickname = bytes. readString ();		
		}
	}
	export class c2s_get_paychannel
	{
		public optcode:number = 0;
		public optname:string = "onGet_paychannel";
	
		/**
		* 
		*/
		public paytype : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_paychannel, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.paytype = bytes. readString ();		
		}
	}
	export class c2s_goto_pay
	{
		public optcode:number = 0;
		public optname:string = "onGoto_pay";
	
		/**
		* 
		*/
		public money : string ;	//String
		/**
		* 
		*/
		public pid : number ;	//uint16
		/**
		* 
		*/
		public paytype : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_goto_pay, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readString ();		
			//
			self.pid = bytes. readUint16 ();		
			//
			self.paytype = bytes. readString ();		
		}
	}
	export class c2s_get_drawchannel
	{
		public optcode:number = 0;
		public optname:string = "onGet_drawchannel";
	
		public constructor()
		{
			
		}
	}
	export class c2s_goto_draw
	{
		public optcode:number = 0;
		public optname:string = "onGoto_draw";
	
		/**
		* 
		*/
		public money : string ;	//String
		/**
		* 
		*/
		public bindtype : string ;	//String
		/**
		* 
		*/
		public drawpwd : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_goto_draw, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readString ();		
			//
			self.bindtype = bytes. readString ();		
			//
			self.drawpwd = bytes. readString ();		
		}
	}
	export class c2s_bindalipay
	{
		public optcode:number = 0;
		public optname:string = "onBindalipay";
	
		/**
		* 
		*/
		public alipayname : string ;	//String
		/**
		* 
		*/
		public drawpwd : string ;	//String
		/**
		* 
		*/
		public realname : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_bindalipay, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.alipayname = bytes. readString ();		
			//
			self.drawpwd = bytes. readString ();		
			//
			self.realname = bytes. readString ();		
		}
	}
	export class c2s_bindbank
	{
		public optcode:number = 0;
		public optname:string = "onBindbank";
	
		/**
		* 
		*/
		public banknum : string ;	//String
		/**
		* 
		*/
		public drawpwd : string ;	//String
		/**
		* 
		*/
		public banktype : string ;	//String
		/**
		* 
		*/
		public bankaddr : string ;	//String
		/**
		* 
		*/
		public realname : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_bindbank, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.banknum = bytes. readString ();		
			//
			self.drawpwd = bytes. readString ();		
			//
			self.banktype = bytes. readString ();		
			//
			self.bankaddr = bytes. readString ();		
			//
			self.realname = bytes. readString ();		
		}
	}
	export class c2s_get_paydrawlist
	{
		public optcode:number = 0;
		public optname:string = "onGet_paydrawlist";
	
		/**
		* 
		*/
		public page_count : number ;	//int32
		/**
		* 
		*/
		public per_count : number ;	//int32
		/**
		* 
		*/
		public dc : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_paydrawlist, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.page_count = bytes. readInt32 ();		
			//
			self.per_count = bytes. readInt32 ();		
			//
			self.dc = bytes. readInt32 ();		
		}
	}
	export class c2s_changedrawpwd
	{
		public optcode:number = 0;
		public optname:string = "onChangedrawpwd";
	
		/**
		* 
		*/
		public oldpwd : string ;	//String
		/**
		* 
		*/
		public pwd1 : string ;	//String
		/**
		* 
		*/
		public pwd2 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_changedrawpwd, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.oldpwd = bytes. readString ();		
			//
			self.pwd1 = bytes. readString ();		
			//
			self.pwd2 = bytes. readString ();		
		}
	}
	export class c2s_changepwd
	{
		public optcode:number = 0;
		public optname:string = "onChangepwd";
	
		/**
		* 
		*/
		public oldpwd : string ;	//String
		/**
		* 
		*/
		public pwd1 : string ;	//String
		/**
		* 
		*/
		public pwd2 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_changepwd, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.oldpwd = bytes. readString ();		
			//
			self.pwd1 = bytes. readString ();		
			//
			self.pwd2 = bytes. readString ();		
		}
	}
	export class c2s_get_playerinfo
	{
		public optcode:number = 0;
		public optname:string = "onGet_playerinfo";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_siginin
	{
		public optcode:number = 0;
		public optname:string = "onGet_siginin";
	
		public constructor()
		{
			
		}
	}
	export class c2s_siginin
	{
		public optcode:number = 0;
		public optname:string = "onSiginin";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_signincfg
	{
		public optcode:number = 0;
		public optname:string = "onGet_signincfg";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_ranking_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_ranking_list";
	
		/**
		* 排行榜类型
		*/
		public type : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_ranking_list, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//排行榜类型
			self.type = bytes. readInt32 ();		
		}
	}
	export class c2s_saveboxin
	{
		public optcode:number = 0;
		public optname:string = "onSaveboxin";
	
		/**
		* 
		*/
		public money : number ;	//float
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_saveboxin, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readFloat ();		
		}
	}
	export class c2s_saveboxout
	{
		public optcode:number = 0;
		public optname:string = "onSaveboxout";
	
		/**
		* 
		*/
		public money : number ;	//float
		/**
		* 
		*/
		public drawpwd : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_saveboxout, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readFloat ();		
			//
			self.drawpwd = bytes. readString ();		
		}
	}
	export class c2s_get_savebox_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_savebox_list";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_active_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_active_list";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_agencyreport
	{
		public optcode:number = 0;
		public optname:string = "onGet_agencyreport";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_rbmoney
	{
		public optcode:number = 0;
		public optname:string = "onGet_rbmoney";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_agencylvlist
	{
		public optcode:number = 0;
		public optname:string = "onGet_agencylvlist";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_turntablecfg
	{
		public optcode:number = 0;
		public optname:string = "onGet_turntablecfg";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_turntableinfo
	{
		public optcode:number = 0;
		public optname:string = "onGet_turntableinfo";
	
		public constructor()
		{
			
		}
	}
	export class c2s_turntable
	{
		public optcode:number = 0;
		public optname:string = "onTurntable";
	
		/**
		* 
		*/
		public type_id : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_turntable, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.type_id = bytes. readUint8 ();		
		}
	}
	export class c2s_get_turntablelist
	{
		public optcode:number = 0;
		public optname:string = "onGet_turntablelist";
	
		public constructor()
		{
			
		}
	}
	export class c2s_sync_token
	{
		public optcode:number = 0;
		public optname:string = "onSync_token";
	
		/**
		* 
		*/
		public token : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_sync_token, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.token = bytes. readString ();		
		}
	}
	export class c2s_get_myshare
	{
		public optcode:number = 0;
		public optname:string = "onGet_myshare";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_agrlastweek
	{
		public optcode:number = 0;
		public optname:string = "onGet_agrlastweek";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_rbmoneylog
	{
		public optcode:number = 0;
		public optname:string = "onGet_rbmoneylog";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_dailyshare
	{
		public optcode:number = 0;
		public optname:string = "onGet_dailyshare";
	
		public constructor()
		{
			
		}
	}
	export class c2s_client_error
	{
		public optcode:number = 0;
		public optname:string = "onClient_error";
	
		/**
		* 
		*/
		public err : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_client_error, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.err = bytes. readString ();		
		}
	}
	export class c2s_get_moneylog
	{
		public optcode:number = 0;
		public optname:string = "onGet_moneylog";
	
		/**
		* 
		*/
		public page_count : number ;	//int32
		/**
		* 
		*/
		public per_count : number ;	//int32
		/**
		* 
		*/
		public time : number ;	//int32
		/**
		* 
		*/
		public index : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_moneylog, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.page_count = bytes. readInt32 ();		
			//
			self.per_count = bytes. readInt32 ();		
			//
			self.time = bytes. readInt32 ();		
			//
			self.index = bytes. readInt32 ();		
		}
	}
	export class c2s_get_battle_log
	{
		public optcode:number = 0;
		public optname:string = "onGet_battle_log";
	
		/**
		* 
		*/
		public battle_id : string ;	//String
		/**
		* 游戏id
		*/
		public game_id : string ;	//String
		/**
		* 
		*/
		public time : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_battle_log, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.battle_id = bytes. readString ();		
			//游戏id
			self.game_id = bytes. readString ();		
			//
			self.time = bytes. readInt32 ();		
		}
	}
	export class c2s_get_inventory
	{
		public optcode:number = 0;
		public optname:string = "onGet_inventory";
	
		/**
		* 游戏id
		*/
		public game_id : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_inventory, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.game_id = bytes. readString ();		
		}
	}
	export class c2s_get_ramdon_name
	{
		public optcode:number = 0;
		public optname:string = "onGet_ramdon_name";
	
		/**
		* 数量
		*/
		public num : number ;	//int32
		/**
		* 时间
		*/
		public time : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_ramdon_name, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//数量
			self.num = bytes. readInt32 ();		
			//时间
			self.time = bytes. readInt32 ();		
		}
	}
	export class s2c_send_ramdon_name
	{
		public optcode:number = 0;
		public optname:string = "onSend_ramdon_name";
	
		/**
		* 名字包
		*/
		public str : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_send_ramdon_name, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//名字包
			self.str = bytes. readString ();		
		}
	}
	export class c2s_get_roomcard_share
	{
		public optcode:number = 0;
		public optname:string = "onGet_roomcard_share";
	
		/**
		* 游戏id
		*/
		public game_id : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_roomcard_share, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.game_id = bytes. readString ();		
		}
	}
	export class c2s_get_promo_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_promo_list";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zhajinhua_call
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_call";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zhajinhua_auto_call
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_auto_call";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zhajinhua_filling
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_filling";
	
		/**
		* 下注数额
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_zhajinhua_filling, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注数额
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_zhajinhua_see_card
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_see_card";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zhajinhua_give_up
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_give_up";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zhajinhua_compare
	{
		public optcode:number = 0;
		public optname:string = "onZhajinhua_compare";
	
		/**
		* 目标玩家位置
		*/
		public pos : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_zhajinhua_compare, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//目标玩家位置
			self.pos = bytes. readUint8 ();		
		}
	}
	export class c2s_niuniu_ready
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_ready";
	
		public constructor()
		{
			
		}
	}
	export class c2s_niuniu_banker
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_banker";
	
		/**
		* 抢庄倍率
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_niuniu_banker, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//抢庄倍率
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_niuniu_bet
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_bet";
	
		/**
		* 下注倍率
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_niuniu_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍率
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_niuniu_pinpai
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_pinpai";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_ready
	{
		public optcode:number = 0;
		public optname:string = "onDdz_ready";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_mingpai
	{
		public optcode:number = 0;
		public optname:string = "onDdz_mingpai";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_jiaodizhu
	{
		public optcode:number = 0;
		public optname:string = "onDdz_jiaodizhu";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_jiaodizhu_pass
	{
		public optcode:number = 0;
		public optname:string = "onDdz_jiaodizhu_pass";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_jiabei
	{
		public optcode:number = 0;
		public optname:string = "onDdz_jiabei";
	
		/**
		* 加倍类型
		*/
		public typ : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_ddz_jiabei, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//加倍类型
			self.typ = bytes. readUint8 ();		
		}
	}
	export class c2s_ddz_play_card
	{
		public optcode:number = 0;
		public optname:string = "onDdz_play_card";
	
		/**
		* 牌类型
		*/
		public typ : number ;	//uint8
		/**
		* 牌长度
		*/
		public len : number ;	//uint8
		/**
		* 最大牌
		*/
		public val : number ;	//uint8
		/**
		* 出的牌
		*/
		public cards : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_ddz_play_card, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//牌类型
			self.typ = bytes. readUint8 ();		
			//牌长度
			self.len = bytes. readUint8 ();		
			//最大牌
			self.val = bytes. readUint8 ();		
			//出的牌
			self.cards = bytes. readString ();		
		}
	}
	export class c2s_ddz_play_card_pass
	{
		public optcode:number = 0;
		public optname:string = "onDdz_play_card_pass";
	
		public constructor()
		{
			
		}
	}
	export class c2s_ddz_trusteeship
	{
		public optcode:number = 0;
		public optname:string = "onDdz_trusteeship";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zjh_continue
	{
		public optcode:number = 0;
		public optname:string = "onZjh_continue";
	
		public constructor()
		{
			
		}
	}
	export class c2s_niuniu_continue
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_continue";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zjh_cancel_matching
	{
		public optcode:number = 0;
		public optname:string = "onZjh_cancel_matching";
	
		public constructor()
		{
			
		}
	}
	export class c2s_niuniu_cancel_matching
	{
		public optcode:number = 0;
		public optname:string = "onNiuniu_cancel_matching";
	
		public constructor()
		{
			
		}
	}
	export class c2s_zjh_leave_map
	{
		public optcode:number = 0;
		public optname:string = "onZjh_leave_map";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_bet
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_bet";
	
		/**
		* 下注数额
		*/
		public num : string ;	//String
		/**
		* 下注位置
		*/
		public pos : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_blackjack_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注数额
			self.num = bytes. readString ();		
			//下注位置
			self.pos = bytes. readUint8 ();		
		}
	}
	export class c2s_blackjack_buy_insurance
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_buy_insurance";
	
		/**
		* 操作1买2不买
		*/
		public opt_type : number ;	//uint8
		/**
		* 买保险位置
		*/
		public pos : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_blackjack_buy_insurance, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//操作1买2不买
			self.opt_type = bytes. readUint8 ();		
			//买保险位置
			self.pos = bytes. readUint8 ();		
		}
	}
	export class c2s_blackjack_extend_bet
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_extend_bet";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_bet_double
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_bet_double";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_part_card
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_part_card";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_ask_card
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_ask_card";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_stop_card
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_stop_card";
	
		public constructor()
		{
			
		}
	}
	export class c2s_blackjack_bet_complete
	{
		public optcode:number = 0;
		public optname:string = "onBlackjack_bet_complete";
	
		public constructor()
		{
			
		}
	}
	export class c2s_tbniuniu_bet
	{
		public optcode:number = 0;
		public optname:string = "onTbniuniu_bet";
	
		/**
		* 下注倍率
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_tbniuniu_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍率
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_tbniuniu_showcard
	{
		public optcode:number = 0;
		public optname:string = "onTbniuniu_showcard";
	
		public constructor()
		{
			
		}
	}
	export class c2s_tbniuniu_continue
	{
		public optcode:number = 0;
		public optname:string = "onTbniuniu_continue";
	
		public constructor()
		{
			
		}
	}
	export class c2s_tbniuniu_trusteeship
	{
		public optcode:number = 0;
		public optname:string = "onTbniuniu_trusteeship";
	
		public constructor()
		{
			
		}
	}
	export class c2s_brniuniu_bet
	{
		public optcode:number = 0;
		public optname:string = "onBrniuniu_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_brniuniu_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class both_fish_get_dole
	{
		public optcode:number = 0;
		public optname:string = "onFish_get_dole";
	
		public constructor()
		{
			
		}
	}
	export class c2s_start_fire
	{
		public optcode:number = 0;
		public optname:string = "onStart_fire";
	
		/**
		* 相对自身的朝向
		*/
		public toward : number ;	//uint8
		/**
		* 瞄准目标OID
		*/
		public target_oid : number ;	//uint32
		/**
		* 是否炸金币
		*/
		public is_boom : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_start_fire, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//相对自身的朝向
			self.toward = bytes. readUint8 ();		
			//瞄准目标OID
			self.target_oid = bytes. readUint32 ();		
			//是否炸金币
			self.is_boom = bytes. readUint8 ();		
		}
	}
	export class s2c_start_fire_result
	{
		public optcode:number = 0;
		public optname:string = "onStart_fire_result";
	
		/**
		* 正在开火
		*/
		public oid : number ;	//uint32
		/**
		* 相对朝向
		*/
		public toward : number ;	//uint8
		/**
		* 瞄准目标OID
		*/
		public target_oid : number ;	//uint32
		/**
		* 是否炸金币
		*/
		public is_boom : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_start_fire_result, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//正在开火
			self.oid = bytes. readUint32 ();		
			//相对朝向
			self.toward = bytes. readUint8 ();		
			//瞄准目标OID
			self.target_oid = bytes. readUint32 ();		
			//是否炸金币
			self.is_boom = bytes. readUint8 ();		
		}
	}
	export class c2s_fire_at
	{
		public optcode:number = 0;
		public optname:string = "onFire_at";
	
		/**
		* 鱼ID
		*/
		public oid : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_fire_at, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//鱼ID
			self.oid = bytes. readUint32 ();		
		}
	}
	export class c2s_change_fire_lv
	{
		public optcode:number = 0;
		public optname:string = "onChange_fire_lv";
	
		/**
		* 目标炮的等级
		*/
		public lv : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_change_fire_lv, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//目标炮的等级
			self.lv = bytes. readUint32 ();		
		}
	}
	export class c2s_aim_at
	{
		public optcode:number = 0;
		public optname:string = "onAim_at";
	
		/**
		* 鱼ID
		*/
		public oid : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_aim_at, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//鱼ID
			self.oid = bytes. readUint32 ();		
		}
	}
	export class both_change_bullet_state
	{
		public optcode:number = 0;
		public optname:string = "onChange_bullet_state";
	
		/**
		* 状态
		*/
		public state : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:both_change_bullet_state, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//状态
			self.state = bytes. readUint32 ();		
		}
	}
	export class both_fish_result
	{
		public optcode:number = 0;
		public optname:string = "onFish_result";
	
		/**
		* 状态
		*/
		public before : number ;	//uint32
		/**
		* 状态
		*/
		public after : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:both_fish_result, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//状态
			self.before = bytes. readUint32 ();		
			//状态
			self.after = bytes. readUint32 ();		
		}
	}
	export class c2s_brniuniu_xiazhuang
	{
		public optcode:number = 0;
		public optname:string = "onBrniuniu_xiazhuang";
	
		public constructor()
		{
			
		}
	}
	export class c2s_brniuniu_shangzhuang
	{
		public optcode:number = 0;
		public optname:string = "onBrniuniu_shangzhuang";
	
		public constructor()
		{
			
		}
	}
	export class c2s_brniuniu_seated
	{
		public optcode:number = 0;
		public optname:string = "onBrniuniu_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_brniuniu_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_brnn_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBrnn_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_brnn_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBrnn_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_brnn_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
		}
	}
	export class s2c_dianyu_result
	{
		public optcode:number = 0;
		public optname:string = "onDianyu_result";
	
		/**
		* 玩家
		*/
		public p_id : number ;	//uint32
		/**
		* 电鱼
		*/
		public fish_id : number ;	//uint32
		/**
		* 被电死的鱼
		*/
		public dead_fishs :Array<number> = []; //uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_dianyu_result, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//玩家
			self.p_id = bytes. readUint32 ();		
			//电鱼
			self.fish_id = bytes. readUint32 ();		
			//被电死的鱼
			self.dead_fishs .length = 0;		//清空数组				
			parmLen = bytes.readUint16();
			for(i=0;i<parmLen;i++){				
				self.dead_fishs .push( bytes.readUint32 ());
			}
		}
	}
	export class c2s_sg_banker
	{
		public optcode:number = 0;
		public optname:string = "onSg_banker";
	
		/**
		* 操作1买2不买
		*/
		public opt_type : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_sg_banker, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//操作1买2不买
			self.opt_type = bytes. readUint8 ();		
		}
	}
	export class c2s_sg_bet
	{
		public optcode:number = 0;
		public optname:string = "onSg_bet";
	
		/**
		* 下注倍数
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_sg_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍数
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_sg_show_cards
	{
		public optcode:number = 0;
		public optname:string = "onSg_show_cards";
	
		public constructor()
		{
			
		}
	}
	export class c2s_longhu_bet
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_longhu_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_longhu_xiazhuang
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_xiazhuang";
	
		public constructor()
		{
			
		}
	}
	export class c2s_longhu_shangzhuang
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_shangzhuang";
	
		public constructor()
		{
			
		}
	}
	export class c2s_longhu_seated
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_longhu_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_longhu_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_longhu_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图1坐标
		*/
		public pos1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图2坐标
		*/
		public pos2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图3坐标
		*/
		public pos3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		/**
		* 地图4坐标
		*/
		public pos4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_longhu_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图1坐标
			self.pos1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图2坐标
			self.pos2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图3坐标
			self.pos3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
			//地图4坐标
			self.pos4 = bytes. readString ();		
		}
	}
	export class c2s_ebgang_banker
	{
		public optcode:number = 0;
		public optname:string = "onEbgang_banker";
	
		/**
		* 抢庄倍率
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_ebgang_banker, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//抢庄倍率
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_ebgang_bet
	{
		public optcode:number = 0;
		public optname:string = "onEbgang_bet";
	
		/**
		* 下注倍数
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_ebgang_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍数
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_hhdazhan_bet
	{
		public optcode:number = 0;
		public optname:string = "onHhdazhan_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_hhdazhan_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_hhdazhan_seated
	{
		public optcode:number = 0;
		public optname:string = "onHhdazhan_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_hhdazhan_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_qzpaijiu_banker
	{
		public optcode:number = 0;
		public optname:string = "onQzpaijiu_banker";
	
		/**
		* 抢庄倍率
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_qzpaijiu_banker, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//抢庄倍率
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_qzpaijiu_bet
	{
		public optcode:number = 0;
		public optname:string = "onQzpaijiu_bet";
	
		/**
		* 下注倍数
		*/
		public num : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_qzpaijiu_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍数
			self.num = bytes. readUint8 ();		
		}
	}
	export class c2s_shuiguoji_bet
	{
		public optcode:number = 0;
		public optname:string = "onShuiguoji_bet";
	
		/**
		* 下注倍数
		*/
		public num : number ;	//uint8
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_shuiguoji_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注倍数
			self.num = bytes. readUint8 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_shuiguoji_lottery
	{
		public optcode:number = 0;
		public optname:string = "onShuiguoji_lottery";
	
		/**
		* 开奖类型0正常开奖1猜大小
		*/
		public type : number ;	//uint8
		/**
		* 参数为下注类型和下注倍数用逗号隔开
		*/
		public param : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_shuiguoji_lottery, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//开奖类型0正常开奖1猜大小
			self.type = bytes. readUint8 ();		
			//参数为下注类型和下注倍数用逗号隔开
			self.param = bytes. readString ();		
		}
	}
	export class c2s_shuiguoji_result
	{
		public optcode:number = 0;
		public optname:string = "onShuiguoji_result";
	
		public constructor()
		{
			
		}
	}
	export class c2s_robot_start_fire
	{
		public optcode:number = 0;
		public optname:string = "onRobot_start_fire";
	
		/**
		* 机器人oid
		*/
		public robot_oid : number ;	//uint32
		/**
		* 相对自身的朝向
		*/
		public toward : number ;	//uint8
		/**
		* 瞄准目标OID
		*/
		public target_oid : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取?峁固?
		*/
		public static read(self:c2s_robot_start_fire, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//机器人oid
			self.robot_oid = bytes. readUint32 ();		
			//相对自身的朝向
			self.toward = bytes. readUint8 ();		
			//瞄准目标OID
			self.target_oid = bytes. readUint32 ();		
		}
	}
	export class c2s_robot_fire_at
	{
		public optcode:number = 0;
		public optname:string = "onRobot_fire_at";
	
		/**
		* 机器人oid
		*/
		public robot_oid : number ;	//uint32
		/**
		* 鱼ID
		*/
		public oid : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_robot_fire_at, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//机器人oid
			self.robot_oid = bytes. readUint32 ();		
			//鱼ID
			self.oid = bytes. readUint32 ();		
		}
	}
	export class c2s_baijiale_bet
	{
		public optcode:number = 0;
		public optname:string = "onBaijiale_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_baijiale_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_baijiale_seated
	{
		public optcode:number = 0;
		public optname:string = "onBaijiale_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_baijiale_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_baijiale_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBaijiale_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_baijiale_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBaijiale_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图1坐标
		*/
		public pos1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图2坐标
		*/
		public pos2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图3坐标
		*/
		public pos3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		/**
		* 地图4坐标
		*/
		public pos4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_baijiale_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图1坐标
			self.pos1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图2坐标
			self.pos2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图3坐标
			self.pos3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
			//地图4坐标
			self.pos4 = bytes. readString ();		
		}
	}
	export class c2s_hhdz_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onHhdz_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_hhdz_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onHhdz_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图1坐标
		*/
		public pos1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图2坐标
		*/
		public pos2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图3坐标
		*/
		public pos3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		/**
		* 地图4坐标
		*/
		public pos4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_hhdz_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图1坐标
			self.pos1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图2坐标
			self.pos2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图3坐标
			self.pos3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
			//地图4坐标
			self.pos4 = bytes. readString ();		
		}
	}
	export class c2s_longhu_update_road
	{
		public optcode:number = 0;
		public optname:string = "onLonghu_update_road";
	
		public constructor()
		{
			
		}
	}
	export class c2s_baijiale_update_road
	{
		public optcode:number = 0;
		public optname:string = "onBaijiale_update_road";
	
		public constructor()
		{
			
		}
	}
	export class c2s_shisanshui_playing
	{
		public optcode:number = 0;
		public optname:string = "onShisanshui_playing";
	
		/**
		* 拼好的所有牌
		*/
		public cards : string ;	//String
		/**
		* 是否特殊牌0不是1是
		*/
		public opt_type : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_shisanshui_playing, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//拼好的所有牌
			self.cards = bytes. readString ();		
			//是否特殊牌0不是1是
			self.opt_type = bytes. readUint8 ();		
		}
	}
	export class c2s_benchibaoma_bet
	{
		public optcode:number = 0;
		public optname:string = "onBenchibaoma_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_benchibaoma_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_benchibaoma_seated
	{
		public optcode:number = 0;
		public optname:string = "onBenchibaoma_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_benchibaoma_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_benchibaoma_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBenchibaoma_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_benchibaoma_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBenchibaoma_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_benchibaoma_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
		}
	}
	export class c2s_bairendezhou_bet
	{
		public optcode:number = 0;
		public optname:string = "onBairendezhou_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_bairendezhou_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_bairendezhou_seated
	{
		public optcode:number = 0;
		public optname:string = "onBairendezhou_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_bairendezhou_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_bairendezhou_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBairendezhou_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_bairendezhou_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onBairendezhou_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图1坐标
		*/
		public pos1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图2坐标
		*/
		public pos2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图3坐标
		*/
		public pos3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		/**
		* 地图4坐标
		*/
		public pos4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_bairendezhou_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图1坐标
			self.pos1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图2坐标
			self.pos2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图3坐标
			self.pos3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
			//地图4坐标
			self.pos4 = bytes. readString ();		
		}
	}
	export class c2s_toubao_bet
	{
		public optcode:number = 0;
		public optname:string = "onToubao_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_toubao_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_toubao_seated
	{
		public optcode:number = 0;
		public optname:string = "onToubao_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_toubao_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_hhdz_update_road
	{
		public optcode:number = 0;
		public optname:string = "onHhdz_update_road";
	
		public constructor()
		{
			
		}
	}
	export class c2s_bairendezhou_update_road
	{
		public optcode:number = 0;
		public optname:string = "onBairendezhou_update_road";
	
		public constructor()
		{
			
		}
	}
	export class c2s_end_roomcard_game
	{
		public optcode:number = 0;
		public optname:string = "onEnd_roomcard_game";
	
		/**
		* 游戏id
		*/
		public mapid : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		/**
		* 房卡id
		*/
		public card_id : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_end_roomcard_game, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.mapid = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
			//入座位置
			self.index = bytes. readUint8 ();		
			//房卡id
			self.card_id = bytes. readString ();		
		}
	}
	export class c2s_dezhou_bet
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_bet";
	
		public constructor()
		{
			
		}
	}
	export class c2s_dezhou_addbet
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_addbet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_dezhou_addbet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
		}
	}
	export class c2s_dezhou_pass
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_pass";
	
		public constructor()
		{
			
		}
	}
	export class c2s_dezhou_discard
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_discard";
	
		public constructor()
		{
			
		}
	}
	export class c2s_dezhou_take_money_to_room
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_take_money_to_room";
	
		/**
		* 携带金额
		*/
		public num : number ;	//uint32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_dezhou_take_money_to_room, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//携带金额
			self.num = bytes. readUint32 ();		
		}
	}
	export class c2s_vote_end_roomcard
	{
		public optcode:number = 0;
		public optname:string = "onVote_end_roomcard";
	
		/**
		* 游戏id
		*/
		public mapid : string ;	//String
		/**
		* 房间配置id
		*/
		public room_config_id : number ;	//uint32
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		/**
		* 房卡id
		*/
		public card_id : string ;	//String
		/**
		* 是否同意
		*/
		public isagree : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_vote_end_roomcard, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//游戏id
			self.mapid = bytes. readString ();		
			//房间配置id
			self.room_config_id = bytes. readUint32 ();		
			//入座位置
			self.index = bytes. readUint8 ();		
			//房卡id
			self.card_id = bytes. readString ();		
			//是否同意
			self.isagree = bytes. readUint8 ();		
		}
	}
	export class c2s_zoo_bet
	{
		public optcode:number = 0;
		public optname:string = "onZoo_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_zoo_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_zoo_seated
	{
		public optcode:number = 0;
		public optname:string = "onZoo_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_zoo_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_zoo_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onZoo_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_zoo_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onZoo_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_zoo_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
		}
	}
	export class c2s_dezhou_continue
	{
		public optcode:number = 0;
		public optname:string = "onDezhou_continue";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_app_addr
	{
		public optcode:number = 0;
		public optname:string = "onGet_app_addr";
	
		/**
		* 入口类型
		*/
		public app_type : number ;	//uint8
		/**
		* 设备类型
		*/
		public device_type : number ;	//uint8
		/**
		* 其他数据
		*/
		public data : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_app_addr, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入口类型
			self.app_type = bytes. readUint8 ();		
			//设备类型
			self.device_type = bytes. readUint8 ();		
			//其他数据
			self.data = bytes. readString ();		
		}
	}
	export class c2s_pdk_play_card
	{
		public optcode:number = 0;
		public optname:string = "onPdk_play_card";
	
		/**
		* 牌类型
		*/
		public typ : number ;	//uint8
		/**
		* 牌长度
		*/
		public len : number ;	//uint8
		/**
		* 最大牌
		*/
		public val : number ;	//uint8
		/**
		* 出的牌
		*/
		public cards : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_pdk_play_card, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//牌类型
			self.typ = bytes. readUint8 ();		
			//牌长度
			self.len = bytes. readUint8 ();		
			//最大牌
			self.val = bytes. readUint8 ();		
			//出的牌
			self.cards = bytes. readString ();		
		}
	}
	export class c2s_pdk_pass_card
	{
		public optcode:number = 0;
		public optname:string = "onPdk_pass_card";
	
		public constructor()
		{
			
		}
	}
	export class c2s_pdk_qiang_guan
	{
		public optcode:number = 0;
		public optname:string = "onPdk_qiang_guan";
	
		/**
		* 操作类型0不抢1抢
		*/
		public typ : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_pdk_qiang_guan, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//操作类型0不抢1抢
			self.typ = bytes. readUint8 ();		
		}
	}
	export class c2s_get_qifu_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_qifu_list";
	
		public constructor()
		{
			
		}
	}
	export class c2s_player_qifu
	{
		public optcode:number = 0;
		public optname:string = "onPlayer_qifu";
	
		/**
		* 祈福类型
		*/
		public typ : number ;	//uint8
		/**
		* 祈福枚举
		*/
		public id : number ;	//uint8
		/**
		* 祈福对象名称
		*/
		public name : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_player_qifu, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//祈福类型
			self.typ = bytes. readUint8 ();		
			//祈福枚举
			self.id = bytes. readUint8 ();		
			//祈福对象名称
			self.name = bytes. readString ();		
		}
	}
	export class c2s_recharge_confirm
	{
		public optcode:number = 0;
		public optname:string = "onRecharge_confirm";
	
		/**
		* 账号
		*/
		public account : string ;	//String
		/**
		* 转账的钱
		*/
		public money : number ;	//int32
		/**
		* 转账类型
		*/
		public type : number ;	//int32
		/**
		* 转账信息
		*/
		public from_msg : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_recharge_confirm, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//账号
			self.account = bytes. readString ();		
			//转账的钱
			self.money = bytes. readInt32 ();		
			//转账类型
			self.type = bytes. readInt32 ();		
			//转账信息
			self.from_msg = bytes. readString ();		
		}
	}
	export class c2s_login_invite
	{
		public optcode:number = 0;
		public optname:string = "onLogin_invite";
	
		/**
		* 登录类型
		*/
		public typ : number ;	//uint8
		/**
		* 服务名
		*/
		public server_name : string ;	//String
		/**
		* 账号
		*/
		public account : string ;	//String
		/**
		* 密码
		*/
		public pwd : string ;	//String
		/**
		* 非
		*/
		public invitor : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_login_invite, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//登录类型
			self.typ = bytes. readUint8 ();		
			//服务名
			self.server_name = bytes. readString ();		
			//账号
			self.account = bytes. readString ();		
			//密码
			self.pwd = bytes. readString ();		
			//非
			self.invitor = bytes. readString ();		
		}
	}
	export class c2s_pdk_trusteeship
	{
		public optcode:number = 0;
		public optname:string = "onPdk_trusteeship";
	
		public constructor()
		{
			
		}
	}
	export class c2s_sss_cancel_special
	{
		public optcode:number = 0;
		public optname:string = "onSss_cancel_special";
	
		public constructor()
		{
			
		}
	}
	export class c2s_scmj_exchange
	{
		public optcode:number = 0;
		public optname:string = "onScmj_exchange";
	
		/**
		* 选的牌
		*/
		public cards : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_scmj_exchange, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//选的牌
			self.cards = bytes. readString ();		
		}
	}
	export class c2s_scmj_set_lack
	{
		public optcode:number = 0;
		public optname:string = "onScmj_set_lack";
	
		/**
		* 选的花色
		*/
		public color : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_scmj_set_lack, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//选的花色
			self.color = bytes. readUint8 ();		
		}
	}
	export class c2s_scmj_play_card
	{
		public optcode:number = 0;
		public optname:string = "onScmj_play_card";
	
		/**
		* 出的牌
		*/
		public cards : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_scmj_play_card, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//出的牌
			self.cards = bytes. readUint8 ();		
		}
	}
	export class c2s_scmj_hu
	{
		public optcode:number = 0;
		public optname:string = "onScmj_hu";
	
		public constructor()
		{
			
		}
	}
	export class c2s_scmj_gang
	{
		public optcode:number = 0;
		public optname:string = "onScmj_gang";
	
		public constructor()
		{
			
		}
	}
	export class c2s_scmj_peng
	{
		public optcode:number = 0;
		public optname:string = "onScmj_peng";
	
		public constructor()
		{
			
		}
	}
	export class c2s_scmj_pass
	{
		public optcode:number = 0;
		public optname:string = "onScmj_pass";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_daili_yonghu
	{
		public optcode:number = 0;
		public optname:string = "onGet_daili_yonghu";
	
		/**
		* 
		*/
		public date_type : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_daili_yonghu, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.date_type = bytes. readInt32 ();		
		}
	}
	export class c2s_login_parameter
	{
		public optcode:number = 0;
		public optname:string = "onLogin_parameter";
	
		/**
		* 登录类型
		*/
		public typ : number ;	//uint8
		/**
		* 服务名
		*/
		public server_name : string ;	//String
		/**
		* 账号
		*/
		public account : string ;	//String
		/**
		* 密码
		*/
		public pwd : string ;	//String
		/**
		* 邀请码
		*/
		public invitor : string ;	//String
		/**
		* 系统版本号
		*/
		public system : string ;	//String
		/**
		* 手机型号
		*/
		public model : string ;	//String
		/**
		* 唯一标识
		*/
		public deviceid : string ;	//String
		/**
		* 额外数据
		*/
		public parms : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_login_parameter, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//登录类型
			self.typ = bytes. readUint8 ();		
			//服务名
			self.server_name = bytes. readString ();		
			//账号
			self.account = bytes. readString ();		
			//密码
			self.pwd = bytes. readString ();		
			//邀请码
			self.invitor = bytes. readString ();		
			//系统版本号
			self.system = bytes. readString ();		
			//手机型号
			self.model = bytes. readString ();		
			//唯一标识
			self.deviceid = bytes. readString ();		
			//额外数据
			self.parms = bytes. readString ();		
		}
	}
	export class c2s_get_vip_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_vip_list";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_vip_award
	{
		public optcode:number = 0;
		public optname:string = "onGet_vip_award";
	
		/**
		* 
		*/
		public lv : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_get_vip_award, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.lv = bytes. readInt32 ();		
		}
	}
	export class c2s_eluosilunpan_bet
	{
		public optcode:number = 0;
		public optname:string = "onEluosilunpan_bet";
	
		/**
		* 下注金额
		*/
		public num : number ;	//uint32
		/**
		* 下注位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_eluosilunpan_bet, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//下注金额
			self.num = bytes. readUint32 ();		
			//下注位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_eluosilunpan_seated
	{
		public optcode:number = 0;
		public optname:string = "onEluosilunpan_seated";
	
		/**
		* 入座位置
		*/
		public index : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_eluosilunpan_seated, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//入座位置
			self.index = bytes. readUint8 ();		
		}
	}
	export class c2s_eluosilunpan_get_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onEluosilunpan_get_mapinfo";
	
		public constructor()
		{
			
		}
	}
	export class s2c_eluosilunpan_return_mapinfo
	{
		public optcode:number = 0;
		public optname:string = "onEluosilunpan_return_mapinfo";
	
		/**
		* 地图1状态
		*/
		public status1 : number ;	//uint8
		/**
		* 地图1倒计时
		*/
		public countdown1 : number ;	//uint32
		/**
		* 地图1战绩
		*/
		public record1 : string ;	//String
		/**
		* 地图2状态
		*/
		public status2 : number ;	//uint8
		/**
		* 地图2倒计时
		*/
		public countdown2 : number ;	//uint32
		/**
		* 地图2战绩
		*/
		public record2 : string ;	//String
		/**
		* 地图3状态
		*/
		public status3 : number ;	//uint8
		/**
		* 地图3倒计时
		*/
		public countdown3 : number ;	//uint32
		/**
		* 地图3战绩
		*/
		public record3 : string ;	//String
		/**
		* 地图4状态
		*/
		public status4 : number ;	//uint8
		/**
		* 地图4倒计时
		*/
		public countdown4 : number ;	//uint32
		/**
		* 地图4战绩
		*/
		public record4 : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:s2c_eluosilunpan_return_mapinfo, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//地图1状态
			self.status1 = bytes. readUint8 ();		
			//地图1倒计时
			self.countdown1 = bytes. readUint32 ();		
			//地图1战绩
			self.record1 = bytes. readString ();		
			//地图2状态
			self.status2 = bytes. readUint8 ();		
			//地图2倒计时
			self.countdown2 = bytes. readUint32 ();		
			//地图2战绩
			self.record2 = bytes. readString ();		
			//地图3状态
			self.status3 = bytes. readUint8 ();		
			//地图3倒计时
			self.countdown3 = bytes. readUint32 ();		
			//地图3战绩
			self.record3 = bytes. readString ();		
			//地图4状态
			self.status4 = bytes. readUint8 ();		
			//地图4倒计时
			self.countdown4 = bytes. readUint32 ();		
			//地图4战绩
			self.record4 = bytes. readString ();		
		}
	}
	export class c2s_signin
	{
		public optcode:number = 0;
		public optname:string = "onSignin";
	
		public constructor()
		{
			
		}
	}
	export class c2s_new_dailyshare
	{
		public optcode:number = 0;
		public optname:string = "onNew_dailyshare";
	
		public constructor()
		{
			
		}
	}
	export class c2s_save_yuebao
	{
		public optcode:number = 0;
		public optname:string = "onSave_yuebao";
	
		/**
		* 
		*/
		public money : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_save_yuebao, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readInt32 ();		
		}
	}
	export class c2s_take_yuebao
	{
		public optcode:number = 0;
		public optname:string = "onTake_yuebao";
	
		/**
		* 
		*/
		public money : number ;	//int32
		/**
		* 
		*/
		public drawpwd : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_take_yuebao, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.money = bytes. readInt32 ();		
			//
			self.drawpwd = bytes. readString ();		
		}
	}
	export class c2s_player_qifu_new
	{
		public optcode:number = 0;
		public optname:string = "onPlayer_qifu_new";
	
		/**
		* 祈福类型
		*/
		public typ : number ;	//uint8
		/**
		* 祈福枚举
		*/
		public id : number ;	//uint8
		/**
		* 祈福对象名称
		*/
		public name : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_player_qifu_new, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//祈福类型
			self.typ = bytes. readUint8 ();		
			//祈福枚举
			self.id = bytes. readUint8 ();		
			//祈福对象名称
			self.name = bytes. readString ();		
		}
	}
	export class c2s_receive_vip_award
	{
		public optcode:number = 0;
		public optname:string = "onReceive_vip_award";
	
		/**
		* 
		*/
		public lv : number ;	//int32
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_receive_vip_award, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.lv = bytes. readInt32 ();		
		}
	}
	export class c2s_score_lucky_draw
	{
		public optcode:number = 0;
		public optname:string = "onScore_lucky_draw";
	
		/**
		* 
		*/
		public type_id : number ;	//uint8
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_score_lucky_draw, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.type_id = bytes. readUint8 ();		
		}
	}
	export class c2s_get_bind_reward
	{
		public optcode:number = 0;
		public optname:string = "onGet_bind_reward";
	
		public constructor()
		{
			
		}
	}
	export class c2s_get_commission
	{
		public optcode:number = 0;
		public optname:string = "onGet_commission";
	
		public constructor()
		{
			
		}
	}
	export class c2s_free_sytle_sync
	{
		public optcode:number = 0;
		public optname:string = "onFree_sytle_sync";
	
		/**
		* 
		*/
		public data : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_free_sytle_sync, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.data = bytes. readString ();		
		}
	}
	export class c2s_check_login_vf
	{
		public optcode:number = 0;
		public optname:string = "onCheck_login_vf";
	
		/**
		* 手机号
		*/
		public mobile : string ;	//String
		/**
		* 验证码
		*/
		public code : string ;	//String
		/**
		* 运营商
		*/
		public server_name : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_check_login_vf, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//手机号
			self.mobile = bytes. readString ();		
			//验证码
			self.code = bytes. readString ();		
			//运营商
			self.server_name = bytes. readString ();		
		}
	}
	export class c2s_set_money_pwd
	{
		public optcode:number = 0;
		public optname:string = "onSet_money_pwd";
	
		/**
		* 取款密码
		*/
		public pwd : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_set_money_pwd, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//取款密码
			self.pwd = bytes. readString ();		
		}
	}
	export class c2s_get_first_pay
	{
		public optcode:number = 0;
		public optname:string = "onGet_first_pay";
	
		public constructor()
		{
			
		}
	}
	export class c2s_set_role_info
	{
		public optcode:number = 0;
		public optname:string = "onSet_role_info";
	
		/**
		* 
		*/
		public type : number ;	//int32
		/**
		* 
		*/
		public info : string ;	//String
		public constructor()
		{
			
		}

		/**
		从输入二进制流中读取结构体
		*/
		public static read(self:c2s_set_role_info, bytes:ByteArray):void
		{
			var parmLen:number;
			var i:number;
			//
			self.type = bytes. readInt32 ();		
			//
			self.info = bytes. readString ();		
		}
	}
	export class c2s_get_bulletin_list
	{
		public optcode:number = 0;
		public optname:string = "onGet_bulletin_list";
	
		public constructor()
		{
			
		}
	}


}