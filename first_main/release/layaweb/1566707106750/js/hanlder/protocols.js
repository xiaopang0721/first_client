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
/***********************************************************************/
/***************本代码由协议工具自动生成，请勿手动修改****************/
/************************ 协议版本号:#类型名称，注释 ******************************/
/***********************************************************************/
var hanlder;
(function (hanlder) {
    var Protocols = /** @class */ (function (_super) {
        __extends(Protocols, _super);
        /**
        * 发送明文数据包（自动加密）
        * @param stream
        */
        function Protocols(v) {
            var _this = _super.call(this, v) || this;
            _this._FUNCS = new Object();
            _this._stream = new ByteArray;
            _this._FUNCS[0] = "null_action";
            _this._FUNCS[1] = "ping_pong";
            _this._FUNCS[2] = "get_session";
            _this._FUNCS[3] = "forced_into";
            _this._FUNCS[4] = "gm_command";
            _this._FUNCS[5] = "operation_failed";
            _this._FUNCS[6] = "sync_mstime";
            _this._FUNCS[7] = "ud_object";
            _this._FUNCS[8] = "ud_control";
            _this._FUNCS[9] = "ud_control_result";
            _this._FUNCS[10] = "grid_update_data";
            _this._FUNCS[11] = "get_login_vf";
            _this._FUNCS[12] = "login";
            _this._FUNCS[13] = "logout";
            _this._FUNCS[14] = "chat_send";
            _this._FUNCS[15] = "chat_info";
            _this._FUNCS[16] = "create_room";
            _this._FUNCS[17] = "join_room";
            _this._FUNCS[18] = "match_game";
            _this._FUNCS[19] = "cancel_match";
            _this._FUNCS[20] = "leave_game";
            _this._FUNCS[21] = "join_game_result";
            _this._FUNCS[22] = "switch_seat";
            _this._FUNCS[23] = "sync_player_info";
            _this._FUNCS[24] = "sync_money";
            _this._FUNCS[25] = "bind";
            _this._FUNCS[26] = "get_mails";
            _this._FUNCS[27] = "send_notices";
            _this._FUNCS[28] = "read_mail";
            _this._FUNCS[29] = "del_mail";
            _this._FUNCS[30] = "sync_web_time";
            _this._FUNCS[31] = "get_bindvf";
            _this._FUNCS[32] = "start_roomcard_game";
            _this._FUNCS[33] = "get_service";
            _this._FUNCS[34] = "get_reset_code";
            _this._FUNCS[35] = "get_bet_list";
            _this._FUNCS[36] = "reset_pwd";
            _this._FUNCS[37] = "set_info";
            _this._FUNCS[38] = "get_paychannel";
            _this._FUNCS[39] = "goto_pay";
            _this._FUNCS[40] = "get_drawchannel";
            _this._FUNCS[41] = "goto_draw";
            _this._FUNCS[42] = "bindalipay";
            _this._FUNCS[43] = "bindbank";
            _this._FUNCS[44] = "get_paydrawlist";
            _this._FUNCS[45] = "changedrawpwd";
            _this._FUNCS[46] = "changepwd";
            _this._FUNCS[47] = "get_playerinfo";
            _this._FUNCS[48] = "get_siginin";
            _this._FUNCS[49] = "siginin";
            _this._FUNCS[50] = "get_signincfg";
            _this._FUNCS[51] = "get_ranking_list";
            _this._FUNCS[52] = "saveboxin";
            _this._FUNCS[53] = "saveboxout";
            _this._FUNCS[54] = "get_savebox_list";
            _this._FUNCS[55] = "get_active_list";
            _this._FUNCS[56] = "get_agencyreport";
            _this._FUNCS[57] = "get_rbmoney";
            _this._FUNCS[58] = "get_agencylvlist";
            _this._FUNCS[59] = "get_turntablecfg";
            _this._FUNCS[60] = "get_turntableinfo";
            _this._FUNCS[61] = "turntable";
            _this._FUNCS[62] = "get_turntablelist";
            _this._FUNCS[63] = "sync_token";
            _this._FUNCS[64] = "get_myshare";
            _this._FUNCS[65] = "get_agrlastweek";
            _this._FUNCS[66] = "get_rbmoneylog";
            _this._FUNCS[67] = "get_dailyshare";
            _this._FUNCS[68] = "client_error";
            _this._FUNCS[69] = "get_moneylog";
            _this._FUNCS[70] = "get_battle_log";
            _this._FUNCS[71] = "get_inventory";
            _this._FUNCS[72] = "get_ramdon_name";
            _this._FUNCS[73] = "send_ramdon_name";
            _this._FUNCS[74] = "get_roomcard_share";
            _this._FUNCS[75] = "get_promo_list";
            _this._FUNCS[76] = "zhajinhua_call";
            _this._FUNCS[77] = "zhajinhua_auto_call";
            _this._FUNCS[78] = "zhajinhua_filling";
            _this._FUNCS[79] = "zhajinhua_see_card";
            _this._FUNCS[80] = "zhajinhua_give_up";
            _this._FUNCS[81] = "zhajinhua_compare";
            _this._FUNCS[82] = "niuniu_ready";
            _this._FUNCS[83] = "niuniu_banker";
            _this._FUNCS[84] = "niuniu_bet";
            _this._FUNCS[85] = "niuniu_pinpai";
            _this._FUNCS[86] = "ddz_ready";
            _this._FUNCS[87] = "ddz_mingpai";
            _this._FUNCS[88] = "ddz_jiaodizhu";
            _this._FUNCS[89] = "ddz_jiaodizhu_pass";
            _this._FUNCS[90] = "ddz_jiabei";
            _this._FUNCS[91] = "ddz_play_card";
            _this._FUNCS[92] = "ddz_play_card_pass";
            _this._FUNCS[93] = "ddz_trusteeship";
            _this._FUNCS[94] = "zjh_continue";
            _this._FUNCS[95] = "niuniu_continue";
            _this._FUNCS[96] = "zjh_cancel_matching";
            _this._FUNCS[97] = "niuniu_cancel_matching";
            _this._FUNCS[98] = "zjh_leave_map";
            _this._FUNCS[99] = "blackjack_bet";
            _this._FUNCS[100] = "blackjack_buy_insurance";
            _this._FUNCS[101] = "blackjack_extend_bet";
            _this._FUNCS[102] = "blackjack_bet_double";
            _this._FUNCS[103] = "blackjack_part_card";
            _this._FUNCS[104] = "blackjack_ask_card";
            _this._FUNCS[105] = "blackjack_stop_card";
            _this._FUNCS[106] = "blackjack_bet_complete";
            _this._FUNCS[107] = "tbniuniu_bet";
            _this._FUNCS[108] = "tbniuniu_showcard";
            _this._FUNCS[109] = "tbniuniu_continue";
            _this._FUNCS[110] = "tbniuniu_trusteeship";
            _this._FUNCS[111] = "brniuniu_bet";
            _this._FUNCS[112] = "fish_get_dole";
            _this._FUNCS[113] = "start_fire";
            _this._FUNCS[114] = "start_fire_result";
            _this._FUNCS[115] = "fire_at";
            _this._FUNCS[116] = "change_fire_lv";
            _this._FUNCS[117] = "aim_at";
            _this._FUNCS[118] = "change_bullet_state";
            _this._FUNCS[119] = "fish_result";
            _this._FUNCS[120] = "brniuniu_xiazhuang";
            _this._FUNCS[121] = "brniuniu_shangzhuang";
            _this._FUNCS[122] = "brniuniu_seated";
            _this._FUNCS[123] = "brnn_get_mapinfo";
            _this._FUNCS[124] = "brnn_return_mapinfo";
            _this._FUNCS[125] = "dianyu_result";
            _this._FUNCS[126] = "sg_banker";
            _this._FUNCS[127] = "sg_bet";
            _this._FUNCS[128] = "sg_show_cards";
            _this._FUNCS[129] = "longhu_bet";
            _this._FUNCS[130] = "longhu_xiazhuang";
            _this._FUNCS[131] = "longhu_shangzhuang";
            _this._FUNCS[132] = "longhu_seated";
            _this._FUNCS[133] = "longhu_get_mapinfo";
            _this._FUNCS[134] = "longhu_return_mapinfo";
            _this._FUNCS[135] = "ebgang_banker";
            _this._FUNCS[136] = "ebgang_bet";
            _this._FUNCS[137] = "hhdazhan_bet";
            _this._FUNCS[138] = "hhdazhan_seated";
            _this._FUNCS[139] = "qzpaijiu_banker";
            _this._FUNCS[140] = "qzpaijiu_bet";
            _this._FUNCS[141] = "shuiguoji_bet";
            _this._FUNCS[142] = "shuiguoji_lottery";
            _this._FUNCS[143] = "shuiguoji_result";
            _this._FUNCS[144] = "robot_start_fire";
            _this._FUNCS[145] = "robot_fire_at";
            _this._FUNCS[146] = "baijiale_bet";
            _this._FUNCS[147] = "baijiale_seated";
            _this._FUNCS[148] = "baijiale_get_mapinfo";
            _this._FUNCS[149] = "baijiale_return_mapinfo";
            _this._FUNCS[150] = "hhdz_get_mapinfo";
            _this._FUNCS[151] = "hhdz_return_mapinfo";
            _this._FUNCS[152] = "longhu_update_road";
            _this._FUNCS[153] = "baijiale_update_road";
            _this._FUNCS[154] = "shisanshui_playing";
            _this._FUNCS[155] = "benchibaoma_bet";
            _this._FUNCS[156] = "benchibaoma_seated";
            _this._FUNCS[157] = "benchibaoma_get_mapinfo";
            _this._FUNCS[158] = "benchibaoma_return_mapinfo";
            _this._FUNCS[159] = "bairendezhou_bet";
            _this._FUNCS[160] = "bairendezhou_seated";
            _this._FUNCS[161] = "bairendezhou_get_mapinfo";
            _this._FUNCS[162] = "bairendezhou_return_mapinfo";
            _this._FUNCS[163] = "toubao_bet";
            _this._FUNCS[164] = "toubao_seated";
            _this._FUNCS[165] = "hhdz_update_road";
            _this._FUNCS[166] = "bairendezhou_update_road";
            _this._FUNCS[167] = "end_roomcard_game";
            _this._FUNCS[168] = "dezhou_bet";
            _this._FUNCS[169] = "dezhou_addbet";
            _this._FUNCS[170] = "dezhou_pass";
            _this._FUNCS[171] = "dezhou_discard";
            _this._FUNCS[172] = "dezhou_take_money_to_room";
            _this._FUNCS[173] = "vote_end_roomcard";
            _this._FUNCS[174] = "zoo_bet";
            _this._FUNCS[175] = "zoo_seated";
            _this._FUNCS[176] = "zoo_get_mapinfo";
            _this._FUNCS[177] = "zoo_return_mapinfo";
            _this._FUNCS[178] = "dezhou_continue";
            _this._FUNCS[179] = "get_app_addr";
            _this._FUNCS[180] = "pdk_play_card";
            _this._FUNCS[181] = "pdk_pass_card";
            _this._FUNCS[182] = "pdk_qiang_guan";
            _this._FUNCS[183] = "get_qifu_list";
            _this._FUNCS[184] = "player_qifu";
            _this._FUNCS[185] = "recharge_confirm";
            _this._FUNCS[186] = "login_invite";
            _this._FUNCS[187] = "pdk_trusteeship";
            _this._FUNCS[188] = "sss_cancel_special";
            _this._FUNCS[189] = "scmj_exchange";
            _this._FUNCS[190] = "scmj_set_lack";
            _this._FUNCS[191] = "scmj_play_card";
            _this._FUNCS[192] = "scmj_hu";
            _this._FUNCS[193] = "scmj_gang";
            _this._FUNCS[194] = "scmj_peng";
            _this._FUNCS[195] = "scmj_pass";
            _this._FUNCS[196] = "get_daili_yonghu";
            _this._FUNCS[197] = "login_parameter";
            _this._FUNCS[198] = "get_vip_list";
            _this._FUNCS[199] = "get_vip_award";
            _this._FUNCS[200] = "eluosilunpan_bet";
            _this._FUNCS[201] = "eluosilunpan_seated";
            _this._FUNCS[202] = "eluosilunpan_get_mapinfo";
            _this._FUNCS[203] = "eluosilunpan_return_mapinfo";
            _this._FUNCS[204] = "signin";
            _this._FUNCS[205] = "new_dailyshare";
            _this._FUNCS[206] = "save_yuebao";
            _this._FUNCS[207] = "take_yuebao";
            _this._FUNCS[208] = "player_qifu_new";
            _this._FUNCS[209] = "receive_vip_award";
            _this._FUNCS[210] = "score_lucky_draw";
            _this._FUNCS[211] = "get_bind_reward";
            _this._FUNCS[212] = "get_commission";
            _this._FUNCS[213] = "free_sytle_sync";
            _this._FUNCS[214] = "check_login_vf";
            _this._FUNCS[215] = "set_money_pwd";
            _this._FUNCS[216] = "get_first_pay";
            _this._FUNCS[217] = "set_role_info";
            return _this;
        }
        /**
        * 获取发送协议函数名称
        * @param cmd:number
        */
        Protocols.prototype.getFuncName = function (cmd) {
            if (this._FUNCS.hasOwnProperty(cmd.toString())) {
                return this._FUNCS[cmd];
            }
            return null;
        };
        Protocols.prototype.readPacket = function (optcode, bs) {
            switch (optcode) {
                case Protocols.MSG_NULL_ACTION: //null_action
                    var obj_null_action = new both_null_action;
                    return obj_null_action;
                case Protocols.MSG_PING_PONG: //ping_pong
                    var obj_ping_pong = new both_ping_pong;
                    return obj_ping_pong;
                case Protocols.CMSG_GET_SESSION: //get_session
                    var obj_get_session = new c2s_get_session;
                    c2s_get_session.read(obj_get_session, bs);
                    return obj_get_session;
                case Protocols.CMSG_FORCED_INTO: //forced_into
                    var obj_forced_into = new c2s_forced_into;
                    return obj_forced_into;
                case Protocols.CMSG_GM_COMMAND: //gm_command
                    var obj_gm_command = new c2s_gm_command;
                    c2s_gm_command.read(obj_gm_command, bs);
                    return obj_gm_command;
                case Protocols.SMSG_OPERATION_FAILED: //operation_failed
                    var obj_operation_failed = new s2c_operation_failed;
                    s2c_operation_failed.read(obj_operation_failed, bs);
                    return obj_operation_failed;
                case Protocols.MSG_SYNC_MSTIME: //sync_mstime
                    var obj_sync_mstime = new both_sync_mstime;
                    both_sync_mstime.read(obj_sync_mstime, bs);
                    return obj_sync_mstime;
                case Protocols.CMSG_UD_CONTROL: //ud_control
                    var obj_ud_control = new c2s_ud_control;
                    return obj_ud_control;
                case Protocols.CMSG_GET_LOGIN_VF: //get_login_vf
                    var obj_get_login_vf = new c2s_get_login_vf;
                    c2s_get_login_vf.read(obj_get_login_vf, bs);
                    return obj_get_login_vf;
                case Protocols.CMSG_LOGIN: //login
                    var obj_login = new c2s_login;
                    c2s_login.read(obj_login, bs);
                    return obj_login;
                case Protocols.CMSG_LOGOUT: //logout
                    var obj_logout = new c2s_logout;
                    return obj_logout;
                case Protocols.CMSG_CHAT_SEND: //chat_send
                    var obj_chat_send = new c2s_chat_send;
                    c2s_chat_send.read(obj_chat_send, bs);
                    return obj_chat_send;
                case Protocols.SMSG_CHAT_INFO: //chat_info
                    var obj_chat_info = new s2c_chat_info;
                    s2c_chat_info.read(obj_chat_info, bs);
                    return obj_chat_info;
                case Protocols.CMSG_CREATE_ROOM: //create_room
                    var obj_create_room = new c2s_create_room;
                    c2s_create_room.read(obj_create_room, bs);
                    return obj_create_room;
                case Protocols.CMSG_JOIN_ROOM: //join_room
                    var obj_join_room = new c2s_join_room;
                    c2s_join_room.read(obj_join_room, bs);
                    return obj_join_room;
                case Protocols.CMSG_MATCH_GAME: //match_game
                    var obj_match_game = new c2s_match_game;
                    c2s_match_game.read(obj_match_game, bs);
                    return obj_match_game;
                case Protocols.CMSG_CANCEL_MATCH: //cancel_match
                    var obj_cancel_match = new c2s_cancel_match;
                    return obj_cancel_match;
                case Protocols.CMSG_LEAVE_GAME: //leave_game
                    var obj_leave_game = new c2s_leave_game;
                    return obj_leave_game;
                case Protocols.SMSG_JOIN_GAME_RESULT: //join_game_result
                    var obj_join_game_result = new s2c_join_game_result;
                    s2c_join_game_result.read(obj_join_game_result, bs);
                    return obj_join_game_result;
                case Protocols.CMSG_SWITCH_SEAT: //switch_seat
                    var obj_switch_seat = new c2s_switch_seat;
                    c2s_switch_seat.read(obj_switch_seat, bs);
                    return obj_switch_seat;
                case Protocols.CMSG_SYNC_PLAYER_INFO: //sync_player_info
                    var obj_sync_player_info = new c2s_sync_player_info;
                    return obj_sync_player_info;
                case Protocols.CMSG_SYNC_MONEY: //sync_money
                    var obj_sync_money = new c2s_sync_money;
                    return obj_sync_money;
                case Protocols.CMSG_BIND: //bind
                    var obj_bind = new c2s_bind;
                    c2s_bind.read(obj_bind, bs);
                    return obj_bind;
                case Protocols.CMSG_GET_MAILS: //get_mails
                    var obj_get_mails = new c2s_get_mails;
                    return obj_get_mails;
                case Protocols.SMSG_SEND_NOTICES: //send_notices
                    var obj_send_notices = new s2c_send_notices;
                    s2c_send_notices.read(obj_send_notices, bs);
                    return obj_send_notices;
                case Protocols.CMSG_READ_MAIL: //read_mail
                    var obj_read_mail = new c2s_read_mail;
                    c2s_read_mail.read(obj_read_mail, bs);
                    return obj_read_mail;
                case Protocols.CMSG_DEL_MAIL: //del_mail
                    var obj_del_mail = new c2s_del_mail;
                    c2s_del_mail.read(obj_del_mail, bs);
                    return obj_del_mail;
                case Protocols.CMSG_SYNC_WEB_TIME: //sync_web_time
                    var obj_sync_web_time = new c2s_sync_web_time;
                    return obj_sync_web_time;
                case Protocols.CMSG_GET_BINDVF: //get_bindvf
                    var obj_get_bindvf = new c2s_get_bindvf;
                    c2s_get_bindvf.read(obj_get_bindvf, bs);
                    return obj_get_bindvf;
                case Protocols.CMSG_START_ROOMCARD_GAME: //start_roomcard_game
                    var obj_start_roomcard_game = new c2s_start_roomcard_game;
                    c2s_start_roomcard_game.read(obj_start_roomcard_game, bs);
                    return obj_start_roomcard_game;
                case Protocols.CMSG_GET_SERVICE: //get_service
                    var obj_get_service = new c2s_get_service;
                    return obj_get_service;
                case Protocols.CMSG_GET_RESET_CODE: //get_reset_code
                    var obj_get_reset_code = new c2s_get_reset_code;
                    return obj_get_reset_code;
                case Protocols.CMSG_GET_BET_LIST: //get_bet_list
                    var obj_get_bet_list = new c2s_get_bet_list;
                    c2s_get_bet_list.read(obj_get_bet_list, bs);
                    return obj_get_bet_list;
                case Protocols.CMSG_RESET_PWD: //reset_pwd
                    var obj_reset_pwd = new c2s_reset_pwd;
                    c2s_reset_pwd.read(obj_reset_pwd, bs);
                    return obj_reset_pwd;
                case Protocols.CMSG_SET_INFO: //set_info
                    var obj_set_info = new c2s_set_info;
                    c2s_set_info.read(obj_set_info, bs);
                    return obj_set_info;
                case Protocols.CMSG_GET_PAYCHANNEL: //get_paychannel
                    var obj_get_paychannel = new c2s_get_paychannel;
                    c2s_get_paychannel.read(obj_get_paychannel, bs);
                    return obj_get_paychannel;
                case Protocols.CMSG_GOTO_PAY: //goto_pay
                    var obj_goto_pay = new c2s_goto_pay;
                    c2s_goto_pay.read(obj_goto_pay, bs);
                    return obj_goto_pay;
                case Protocols.CMSG_GET_DRAWCHANNEL: //get_drawchannel
                    var obj_get_drawchannel = new c2s_get_drawchannel;
                    return obj_get_drawchannel;
                case Protocols.CMSG_GOTO_DRAW: //goto_draw
                    var obj_goto_draw = new c2s_goto_draw;
                    c2s_goto_draw.read(obj_goto_draw, bs);
                    return obj_goto_draw;
                case Protocols.CMSG_BINDALIPAY: //bindalipay
                    var obj_bindalipay = new c2s_bindalipay;
                    c2s_bindalipay.read(obj_bindalipay, bs);
                    return obj_bindalipay;
                case Protocols.CMSG_BINDBANK: //bindbank
                    var obj_bindbank = new c2s_bindbank;
                    c2s_bindbank.read(obj_bindbank, bs);
                    return obj_bindbank;
                case Protocols.CMSG_GET_PAYDRAWLIST: //get_paydrawlist
                    var obj_get_paydrawlist = new c2s_get_paydrawlist;
                    c2s_get_paydrawlist.read(obj_get_paydrawlist, bs);
                    return obj_get_paydrawlist;
                case Protocols.CMSG_CHANGEDRAWPWD: //changedrawpwd
                    var obj_changedrawpwd = new c2s_changedrawpwd;
                    c2s_changedrawpwd.read(obj_changedrawpwd, bs);
                    return obj_changedrawpwd;
                case Protocols.CMSG_CHANGEPWD: //changepwd
                    var obj_changepwd = new c2s_changepwd;
                    c2s_changepwd.read(obj_changepwd, bs);
                    return obj_changepwd;
                case Protocols.CMSG_GET_PLAYERINFO: //get_playerinfo
                    var obj_get_playerinfo = new c2s_get_playerinfo;
                    return obj_get_playerinfo;
                case Protocols.CMSG_GET_SIGININ: //get_siginin
                    var obj_get_siginin = new c2s_get_siginin;
                    return obj_get_siginin;
                case Protocols.CMSG_SIGININ: //siginin
                    var obj_siginin = new c2s_siginin;
                    return obj_siginin;
                case Protocols.CMSG_GET_SIGNINCFG: //get_signincfg
                    var obj_get_signincfg = new c2s_get_signincfg;
                    return obj_get_signincfg;
                case Protocols.CMSG_GET_RANKING_LIST: //get_ranking_list
                    var obj_get_ranking_list = new c2s_get_ranking_list;
                    c2s_get_ranking_list.read(obj_get_ranking_list, bs);
                    return obj_get_ranking_list;
                case Protocols.CMSG_SAVEBOXIN: //saveboxin
                    var obj_saveboxin = new c2s_saveboxin;
                    c2s_saveboxin.read(obj_saveboxin, bs);
                    return obj_saveboxin;
                case Protocols.CMSG_SAVEBOXOUT: //saveboxout
                    var obj_saveboxout = new c2s_saveboxout;
                    c2s_saveboxout.read(obj_saveboxout, bs);
                    return obj_saveboxout;
                case Protocols.CMSG_GET_SAVEBOX_LIST: //get_savebox_list
                    var obj_get_savebox_list = new c2s_get_savebox_list;
                    return obj_get_savebox_list;
                case Protocols.CMSG_GET_ACTIVE_LIST: //get_active_list
                    var obj_get_active_list = new c2s_get_active_list;
                    return obj_get_active_list;
                case Protocols.CMSG_GET_AGENCYREPORT: //get_agencyreport
                    var obj_get_agencyreport = new c2s_get_agencyreport;
                    return obj_get_agencyreport;
                case Protocols.CMSG_GET_RBMONEY: //get_rbmoney
                    var obj_get_rbmoney = new c2s_get_rbmoney;
                    return obj_get_rbmoney;
                case Protocols.CMSG_GET_AGENCYLVLIST: //get_agencylvlist
                    var obj_get_agencylvlist = new c2s_get_agencylvlist;
                    return obj_get_agencylvlist;
                case Protocols.CMSG_GET_TURNTABLECFG: //get_turntablecfg
                    var obj_get_turntablecfg = new c2s_get_turntablecfg;
                    return obj_get_turntablecfg;
                case Protocols.CMSG_GET_TURNTABLEINFO: //get_turntableinfo
                    var obj_get_turntableinfo = new c2s_get_turntableinfo;
                    return obj_get_turntableinfo;
                case Protocols.CMSG_TURNTABLE: //turntable
                    var obj_turntable = new c2s_turntable;
                    c2s_turntable.read(obj_turntable, bs);
                    return obj_turntable;
                case Protocols.CMSG_GET_TURNTABLELIST: //get_turntablelist
                    var obj_get_turntablelist = new c2s_get_turntablelist;
                    return obj_get_turntablelist;
                case Protocols.CMSG_SYNC_TOKEN: //sync_token
                    var obj_sync_token = new c2s_sync_token;
                    c2s_sync_token.read(obj_sync_token, bs);
                    return obj_sync_token;
                case Protocols.CMSG_GET_MYSHARE: //get_myshare
                    var obj_get_myshare = new c2s_get_myshare;
                    return obj_get_myshare;
                case Protocols.CMSG_GET_AGRLASTWEEK: //get_agrlastweek
                    var obj_get_agrlastweek = new c2s_get_agrlastweek;
                    return obj_get_agrlastweek;
                case Protocols.CMSG_GET_RBMONEYLOG: //get_rbmoneylog
                    var obj_get_rbmoneylog = new c2s_get_rbmoneylog;
                    return obj_get_rbmoneylog;
                case Protocols.CMSG_GET_DAILYSHARE: //get_dailyshare
                    var obj_get_dailyshare = new c2s_get_dailyshare;
                    return obj_get_dailyshare;
                case Protocols.CMSG_CLIENT_ERROR: //client_error
                    var obj_client_error = new c2s_client_error;
                    c2s_client_error.read(obj_client_error, bs);
                    return obj_client_error;
                case Protocols.CMSG_GET_MONEYLOG: //get_moneylog
                    var obj_get_moneylog = new c2s_get_moneylog;
                    c2s_get_moneylog.read(obj_get_moneylog, bs);
                    return obj_get_moneylog;
                case Protocols.CMSG_GET_BATTLE_LOG: //get_battle_log
                    var obj_get_battle_log = new c2s_get_battle_log;
                    c2s_get_battle_log.read(obj_get_battle_log, bs);
                    return obj_get_battle_log;
                case Protocols.CMSG_GET_INVENTORY: //get_inventory
                    var obj_get_inventory = new c2s_get_inventory;
                    c2s_get_inventory.read(obj_get_inventory, bs);
                    return obj_get_inventory;
                case Protocols.CMSG_GET_RAMDON_NAME: //get_ramdon_name
                    var obj_get_ramdon_name = new c2s_get_ramdon_name;
                    c2s_get_ramdon_name.read(obj_get_ramdon_name, bs);
                    return obj_get_ramdon_name;
                case Protocols.SMSG_SEND_RAMDON_NAME: //send_ramdon_name
                    var obj_send_ramdon_name = new s2c_send_ramdon_name;
                    s2c_send_ramdon_name.read(obj_send_ramdon_name, bs);
                    return obj_send_ramdon_name;
                case Protocols.CMSG_GET_ROOMCARD_SHARE: //get_roomcard_share
                    var obj_get_roomcard_share = new c2s_get_roomcard_share;
                    c2s_get_roomcard_share.read(obj_get_roomcard_share, bs);
                    return obj_get_roomcard_share;
                case Protocols.CMSG_GET_PROMO_LIST: //get_promo_list
                    var obj_get_promo_list = new c2s_get_promo_list;
                    return obj_get_promo_list;
                case Protocols.CMSG_ZHAJINHUA_CALL: //zhajinhua_call
                    var obj_zhajinhua_call = new c2s_zhajinhua_call;
                    return obj_zhajinhua_call;
                case Protocols.CMSG_ZHAJINHUA_AUTO_CALL: //zhajinhua_auto_call
                    var obj_zhajinhua_auto_call = new c2s_zhajinhua_auto_call;
                    return obj_zhajinhua_auto_call;
                case Protocols.CMSG_ZHAJINHUA_FILLING: //zhajinhua_filling
                    var obj_zhajinhua_filling = new c2s_zhajinhua_filling;
                    c2s_zhajinhua_filling.read(obj_zhajinhua_filling, bs);
                    return obj_zhajinhua_filling;
                case Protocols.CMSG_ZHAJINHUA_SEE_CARD: //zhajinhua_see_card
                    var obj_zhajinhua_see_card = new c2s_zhajinhua_see_card;
                    return obj_zhajinhua_see_card;
                case Protocols.CMSG_ZHAJINHUA_GIVE_UP: //zhajinhua_give_up
                    var obj_zhajinhua_give_up = new c2s_zhajinhua_give_up;
                    return obj_zhajinhua_give_up;
                case Protocols.CMSG_ZHAJINHUA_COMPARE: //zhajinhua_compare
                    var obj_zhajinhua_compare = new c2s_zhajinhua_compare;
                    c2s_zhajinhua_compare.read(obj_zhajinhua_compare, bs);
                    return obj_zhajinhua_compare;
                case Protocols.CMSG_NIUNIU_READY: //niuniu_ready
                    var obj_niuniu_ready = new c2s_niuniu_ready;
                    return obj_niuniu_ready;
                case Protocols.CMSG_NIUNIU_BANKER: //niuniu_banker
                    var obj_niuniu_banker = new c2s_niuniu_banker;
                    c2s_niuniu_banker.read(obj_niuniu_banker, bs);
                    return obj_niuniu_banker;
                case Protocols.CMSG_NIUNIU_BET: //niuniu_bet
                    var obj_niuniu_bet = new c2s_niuniu_bet;
                    c2s_niuniu_bet.read(obj_niuniu_bet, bs);
                    return obj_niuniu_bet;
                case Protocols.CMSG_NIUNIU_PINPAI: //niuniu_pinpai
                    var obj_niuniu_pinpai = new c2s_niuniu_pinpai;
                    return obj_niuniu_pinpai;
                case Protocols.CMSG_DDZ_READY: //ddz_ready
                    var obj_ddz_ready = new c2s_ddz_ready;
                    return obj_ddz_ready;
                case Protocols.CMSG_DDZ_MINGPAI: //ddz_mingpai
                    var obj_ddz_mingpai = new c2s_ddz_mingpai;
                    return obj_ddz_mingpai;
                case Protocols.CMSG_DDZ_JIAODIZHU: //ddz_jiaodizhu
                    var obj_ddz_jiaodizhu = new c2s_ddz_jiaodizhu;
                    return obj_ddz_jiaodizhu;
                case Protocols.CMSG_DDZ_JIAODIZHU_PASS: //ddz_jiaodizhu_pass
                    var obj_ddz_jiaodizhu_pass = new c2s_ddz_jiaodizhu_pass;
                    return obj_ddz_jiaodizhu_pass;
                case Protocols.CMSG_DDZ_JIABEI: //ddz_jiabei
                    var obj_ddz_jiabei = new c2s_ddz_jiabei;
                    c2s_ddz_jiabei.read(obj_ddz_jiabei, bs);
                    return obj_ddz_jiabei;
                case Protocols.CMSG_DDZ_PLAY_CARD: //ddz_play_card
                    var obj_ddz_play_card = new c2s_ddz_play_card;
                    c2s_ddz_play_card.read(obj_ddz_play_card, bs);
                    return obj_ddz_play_card;
                case Protocols.CMSG_DDZ_PLAY_CARD_PASS: //ddz_play_card_pass
                    var obj_ddz_play_card_pass = new c2s_ddz_play_card_pass;
                    return obj_ddz_play_card_pass;
                case Protocols.CMSG_DDZ_TRUSTEESHIP: //ddz_trusteeship
                    var obj_ddz_trusteeship = new c2s_ddz_trusteeship;
                    return obj_ddz_trusteeship;
                case Protocols.CMSG_ZJH_CONTINUE: //zjh_continue
                    var obj_zjh_continue = new c2s_zjh_continue;
                    return obj_zjh_continue;
                case Protocols.CMSG_NIUNIU_CONTINUE: //niuniu_continue
                    var obj_niuniu_continue = new c2s_niuniu_continue;
                    return obj_niuniu_continue;
                case Protocols.CMSG_ZJH_CANCEL_MATCHING: //zjh_cancel_matching
                    var obj_zjh_cancel_matching = new c2s_zjh_cancel_matching;
                    return obj_zjh_cancel_matching;
                case Protocols.CMSG_NIUNIU_CANCEL_MATCHING: //niuniu_cancel_matching
                    var obj_niuniu_cancel_matching = new c2s_niuniu_cancel_matching;
                    return obj_niuniu_cancel_matching;
                case Protocols.CMSG_ZJH_LEAVE_MAP: //zjh_leave_map
                    var obj_zjh_leave_map = new c2s_zjh_leave_map;
                    return obj_zjh_leave_map;
                case Protocols.CMSG_BLACKJACK_BET: //blackjack_bet
                    var obj_blackjack_bet = new c2s_blackjack_bet;
                    c2s_blackjack_bet.read(obj_blackjack_bet, bs);
                    return obj_blackjack_bet;
                case Protocols.CMSG_BLACKJACK_BUY_INSURANCE: //blackjack_buy_insurance
                    var obj_blackjack_buy_insurance = new c2s_blackjack_buy_insurance;
                    c2s_blackjack_buy_insurance.read(obj_blackjack_buy_insurance, bs);
                    return obj_blackjack_buy_insurance;
                case Protocols.CMSG_BLACKJACK_EXTEND_BET: //blackjack_extend_bet
                    var obj_blackjack_extend_bet = new c2s_blackjack_extend_bet;
                    return obj_blackjack_extend_bet;
                case Protocols.CMSG_BLACKJACK_BET_DOUBLE: //blackjack_bet_double
                    var obj_blackjack_bet_double = new c2s_blackjack_bet_double;
                    return obj_blackjack_bet_double;
                case Protocols.CMSG_BLACKJACK_PART_CARD: //blackjack_part_card
                    var obj_blackjack_part_card = new c2s_blackjack_part_card;
                    return obj_blackjack_part_card;
                case Protocols.CMSG_BLACKJACK_ASK_CARD: //blackjack_ask_card
                    var obj_blackjack_ask_card = new c2s_blackjack_ask_card;
                    return obj_blackjack_ask_card;
                case Protocols.CMSG_BLACKJACK_STOP_CARD: //blackjack_stop_card
                    var obj_blackjack_stop_card = new c2s_blackjack_stop_card;
                    return obj_blackjack_stop_card;
                case Protocols.CMSG_BLACKJACK_BET_COMPLETE: //blackjack_bet_complete
                    var obj_blackjack_bet_complete = new c2s_blackjack_bet_complete;
                    return obj_blackjack_bet_complete;
                case Protocols.CMSG_TBNIUNIU_BET: //tbniuniu_bet
                    var obj_tbniuniu_bet = new c2s_tbniuniu_bet;
                    c2s_tbniuniu_bet.read(obj_tbniuniu_bet, bs);
                    return obj_tbniuniu_bet;
                case Protocols.CMSG_TBNIUNIU_SHOWCARD: //tbniuniu_showcard
                    var obj_tbniuniu_showcard = new c2s_tbniuniu_showcard;
                    return obj_tbniuniu_showcard;
                case Protocols.CMSG_TBNIUNIU_CONTINUE: //tbniuniu_continue
                    var obj_tbniuniu_continue = new c2s_tbniuniu_continue;
                    return obj_tbniuniu_continue;
                case Protocols.CMSG_TBNIUNIU_TRUSTEESHIP: //tbniuniu_trusteeship
                    var obj_tbniuniu_trusteeship = new c2s_tbniuniu_trusteeship;
                    return obj_tbniuniu_trusteeship;
                case Protocols.CMSG_BRNIUNIU_BET: //brniuniu_bet
                    var obj_brniuniu_bet = new c2s_brniuniu_bet;
                    c2s_brniuniu_bet.read(obj_brniuniu_bet, bs);
                    return obj_brniuniu_bet;
                case Protocols.MSG_FISH_GET_DOLE: //fish_get_dole
                    var obj_fish_get_dole = new both_fish_get_dole;
                    return obj_fish_get_dole;
                case Protocols.CMSG_START_FIRE: //start_fire
                    var obj_start_fire = new c2s_start_fire;
                    c2s_start_fire.read(obj_start_fire, bs);
                    return obj_start_fire;
                case Protocols.SMSG_START_FIRE_RESULT: //start_fire_result
                    var obj_start_fire_result = new s2c_start_fire_result;
                    s2c_start_fire_result.read(obj_start_fire_result, bs);
                    return obj_start_fire_result;
                case Protocols.CMSG_FIRE_AT: //fire_at
                    var obj_fire_at = new c2s_fire_at;
                    c2s_fire_at.read(obj_fire_at, bs);
                    return obj_fire_at;
                case Protocols.CMSG_CHANGE_FIRE_LV: //change_fire_lv
                    var obj_change_fire_lv = new c2s_change_fire_lv;
                    c2s_change_fire_lv.read(obj_change_fire_lv, bs);
                    return obj_change_fire_lv;
                case Protocols.CMSG_AIM_AT: //aim_at
                    var obj_aim_at = new c2s_aim_at;
                    c2s_aim_at.read(obj_aim_at, bs);
                    return obj_aim_at;
                case Protocols.MSG_CHANGE_BULLET_STATE: //change_bullet_state
                    var obj_change_bullet_state = new both_change_bullet_state;
                    both_change_bullet_state.read(obj_change_bullet_state, bs);
                    return obj_change_bullet_state;
                case Protocols.MSG_FISH_RESULT: //fish_result
                    var obj_fish_result = new both_fish_result;
                    both_fish_result.read(obj_fish_result, bs);
                    return obj_fish_result;
                case Protocols.CMSG_BRNIUNIU_XIAZHUANG: //brniuniu_xiazhuang
                    var obj_brniuniu_xiazhuang = new c2s_brniuniu_xiazhuang;
                    return obj_brniuniu_xiazhuang;
                case Protocols.CMSG_BRNIUNIU_SHANGZHUANG: //brniuniu_shangzhuang
                    var obj_brniuniu_shangzhuang = new c2s_brniuniu_shangzhuang;
                    return obj_brniuniu_shangzhuang;
                case Protocols.CMSG_BRNIUNIU_SEATED: //brniuniu_seated
                    var obj_brniuniu_seated = new c2s_brniuniu_seated;
                    c2s_brniuniu_seated.read(obj_brniuniu_seated, bs);
                    return obj_brniuniu_seated;
                case Protocols.CMSG_BRNN_GET_MAPINFO: //brnn_get_mapinfo
                    var obj_brnn_get_mapinfo = new c2s_brnn_get_mapinfo;
                    return obj_brnn_get_mapinfo;
                case Protocols.SMSG_BRNN_RETURN_MAPINFO: //brnn_return_mapinfo
                    var obj_brnn_return_mapinfo = new s2c_brnn_return_mapinfo;
                    s2c_brnn_return_mapinfo.read(obj_brnn_return_mapinfo, bs);
                    return obj_brnn_return_mapinfo;
                case Protocols.SMSG_DIANYU_RESULT: //dianyu_result
                    var obj_dianyu_result = new s2c_dianyu_result;
                    s2c_dianyu_result.read(obj_dianyu_result, bs);
                    return obj_dianyu_result;
                case Protocols.CMSG_SG_BANKER: //sg_banker
                    var obj_sg_banker = new c2s_sg_banker;
                    c2s_sg_banker.read(obj_sg_banker, bs);
                    return obj_sg_banker;
                case Protocols.CMSG_SG_BET: //sg_bet
                    var obj_sg_bet = new c2s_sg_bet;
                    c2s_sg_bet.read(obj_sg_bet, bs);
                    return obj_sg_bet;
                case Protocols.CMSG_SG_SHOW_CARDS: //sg_show_cards
                    var obj_sg_show_cards = new c2s_sg_show_cards;
                    return obj_sg_show_cards;
                case Protocols.CMSG_LONGHU_BET: //longhu_bet
                    var obj_longhu_bet = new c2s_longhu_bet;
                    c2s_longhu_bet.read(obj_longhu_bet, bs);
                    return obj_longhu_bet;
                case Protocols.CMSG_LONGHU_XIAZHUANG: //longhu_xiazhuang
                    var obj_longhu_xiazhuang = new c2s_longhu_xiazhuang;
                    return obj_longhu_xiazhuang;
                case Protocols.CMSG_LONGHU_SHANGZHUANG: //longhu_shangzhuang
                    var obj_longhu_shangzhuang = new c2s_longhu_shangzhuang;
                    return obj_longhu_shangzhuang;
                case Protocols.CMSG_LONGHU_SEATED: //longhu_seated
                    var obj_longhu_seated = new c2s_longhu_seated;
                    c2s_longhu_seated.read(obj_longhu_seated, bs);
                    return obj_longhu_seated;
                case Protocols.CMSG_LONGHU_GET_MAPINFO: //longhu_get_mapinfo
                    var obj_longhu_get_mapinfo = new c2s_longhu_get_mapinfo;
                    return obj_longhu_get_mapinfo;
                case Protocols.SMSG_LONGHU_RETURN_MAPINFO: //longhu_return_mapinfo
                    var obj_longhu_return_mapinfo = new s2c_longhu_return_mapinfo;
                    s2c_longhu_return_mapinfo.read(obj_longhu_return_mapinfo, bs);
                    return obj_longhu_return_mapinfo;
                case Protocols.CMSG_EBGANG_BANKER: //ebgang_banker
                    var obj_ebgang_banker = new c2s_ebgang_banker;
                    c2s_ebgang_banker.read(obj_ebgang_banker, bs);
                    return obj_ebgang_banker;
                case Protocols.CMSG_EBGANG_BET: //ebgang_bet
                    var obj_ebgang_bet = new c2s_ebgang_bet;
                    c2s_ebgang_bet.read(obj_ebgang_bet, bs);
                    return obj_ebgang_bet;
                case Protocols.CMSG_HHDAZHAN_BET: //hhdazhan_bet
                    var obj_hhdazhan_bet = new c2s_hhdazhan_bet;
                    c2s_hhdazhan_bet.read(obj_hhdazhan_bet, bs);
                    return obj_hhdazhan_bet;
                case Protocols.CMSG_HHDAZHAN_SEATED: //hhdazhan_seated
                    var obj_hhdazhan_seated = new c2s_hhdazhan_seated;
                    c2s_hhdazhan_seated.read(obj_hhdazhan_seated, bs);
                    return obj_hhdazhan_seated;
                case Protocols.CMSG_QZPAIJIU_BANKER: //qzpaijiu_banker
                    var obj_qzpaijiu_banker = new c2s_qzpaijiu_banker;
                    c2s_qzpaijiu_banker.read(obj_qzpaijiu_banker, bs);
                    return obj_qzpaijiu_banker;
                case Protocols.CMSG_QZPAIJIU_BET: //qzpaijiu_bet
                    var obj_qzpaijiu_bet = new c2s_qzpaijiu_bet;
                    c2s_qzpaijiu_bet.read(obj_qzpaijiu_bet, bs);
                    return obj_qzpaijiu_bet;
                case Protocols.CMSG_SHUIGUOJI_BET: //shuiguoji_bet
                    var obj_shuiguoji_bet = new c2s_shuiguoji_bet;
                    c2s_shuiguoji_bet.read(obj_shuiguoji_bet, bs);
                    return obj_shuiguoji_bet;
                case Protocols.CMSG_SHUIGUOJI_LOTTERY: //shuiguoji_lottery
                    var obj_shuiguoji_lottery = new c2s_shuiguoji_lottery;
                    c2s_shuiguoji_lottery.read(obj_shuiguoji_lottery, bs);
                    return obj_shuiguoji_lottery;
                case Protocols.CMSG_SHUIGUOJI_RESULT: //shuiguoji_result
                    var obj_shuiguoji_result = new c2s_shuiguoji_result;
                    return obj_shuiguoji_result;
                case Protocols.CMSG_ROBOT_START_FIRE: //robot_start_fire
                    var obj_robot_start_fire = new c2s_robot_start_fire;
                    c2s_robot_start_fire.read(obj_robot_start_fire, bs);
                    return obj_robot_start_fire;
                case Protocols.CMSG_ROBOT_FIRE_AT: //robot_fire_at
                    var obj_robot_fire_at = new c2s_robot_fire_at;
                    c2s_robot_fire_at.read(obj_robot_fire_at, bs);
                    return obj_robot_fire_at;
                case Protocols.CMSG_BAIJIALE_BET: //baijiale_bet
                    var obj_baijiale_bet = new c2s_baijiale_bet;
                    c2s_baijiale_bet.read(obj_baijiale_bet, bs);
                    return obj_baijiale_bet;
                case Protocols.CMSG_BAIJIALE_SEATED: //baijiale_seated
                    var obj_baijiale_seated = new c2s_baijiale_seated;
                    c2s_baijiale_seated.read(obj_baijiale_seated, bs);
                    return obj_baijiale_seated;
                case Protocols.CMSG_BAIJIALE_GET_MAPINFO: //baijiale_get_mapinfo
                    var obj_baijiale_get_mapinfo = new c2s_baijiale_get_mapinfo;
                    return obj_baijiale_get_mapinfo;
                case Protocols.SMSG_BAIJIALE_RETURN_MAPINFO: //baijiale_return_mapinfo
                    var obj_baijiale_return_mapinfo = new s2c_baijiale_return_mapinfo;
                    s2c_baijiale_return_mapinfo.read(obj_baijiale_return_mapinfo, bs);
                    return obj_baijiale_return_mapinfo;
                case Protocols.CMSG_HHDZ_GET_MAPINFO: //hhdz_get_mapinfo
                    var obj_hhdz_get_mapinfo = new c2s_hhdz_get_mapinfo;
                    return obj_hhdz_get_mapinfo;
                case Protocols.SMSG_HHDZ_RETURN_MAPINFO: //hhdz_return_mapinfo
                    var obj_hhdz_return_mapinfo = new s2c_hhdz_return_mapinfo;
                    s2c_hhdz_return_mapinfo.read(obj_hhdz_return_mapinfo, bs);
                    return obj_hhdz_return_mapinfo;
                case Protocols.CMSG_LONGHU_UPDATE_ROAD: //longhu_update_road
                    var obj_longhu_update_road = new c2s_longhu_update_road;
                    return obj_longhu_update_road;
                case Protocols.CMSG_BAIJIALE_UPDATE_ROAD: //baijiale_update_road
                    var obj_baijiale_update_road = new c2s_baijiale_update_road;
                    return obj_baijiale_update_road;
                case Protocols.CMSG_SHISANSHUI_PLAYING: //shisanshui_playing
                    var obj_shisanshui_playing = new c2s_shisanshui_playing;
                    c2s_shisanshui_playing.read(obj_shisanshui_playing, bs);
                    return obj_shisanshui_playing;
                case Protocols.CMSG_BENCHIBAOMA_BET: //benchibaoma_bet
                    var obj_benchibaoma_bet = new c2s_benchibaoma_bet;
                    c2s_benchibaoma_bet.read(obj_benchibaoma_bet, bs);
                    return obj_benchibaoma_bet;
                case Protocols.CMSG_BENCHIBAOMA_SEATED: //benchibaoma_seated
                    var obj_benchibaoma_seated = new c2s_benchibaoma_seated;
                    c2s_benchibaoma_seated.read(obj_benchibaoma_seated, bs);
                    return obj_benchibaoma_seated;
                case Protocols.CMSG_BENCHIBAOMA_GET_MAPINFO: //benchibaoma_get_mapinfo
                    var obj_benchibaoma_get_mapinfo = new c2s_benchibaoma_get_mapinfo;
                    return obj_benchibaoma_get_mapinfo;
                case Protocols.SMSG_BENCHIBAOMA_RETURN_MAPINFO: //benchibaoma_return_mapinfo
                    var obj_benchibaoma_return_mapinfo = new s2c_benchibaoma_return_mapinfo;
                    s2c_benchibaoma_return_mapinfo.read(obj_benchibaoma_return_mapinfo, bs);
                    return obj_benchibaoma_return_mapinfo;
                case Protocols.CMSG_BAIRENDEZHOU_BET: //bairendezhou_bet
                    var obj_bairendezhou_bet = new c2s_bairendezhou_bet;
                    c2s_bairendezhou_bet.read(obj_bairendezhou_bet, bs);
                    return obj_bairendezhou_bet;
                case Protocols.CMSG_BAIRENDEZHOU_SEATED: //bairendezhou_seated
                    var obj_bairendezhou_seated = new c2s_bairendezhou_seated;
                    c2s_bairendezhou_seated.read(obj_bairendezhou_seated, bs);
                    return obj_bairendezhou_seated;
                case Protocols.CMSG_BAIRENDEZHOU_GET_MAPINFO: //bairendezhou_get_mapinfo
                    var obj_bairendezhou_get_mapinfo = new c2s_bairendezhou_get_mapinfo;
                    return obj_bairendezhou_get_mapinfo;
                case Protocols.SMSG_BAIRENDEZHOU_RETURN_MAPINFO: //bairendezhou_return_mapinfo
                    var obj_bairendezhou_return_mapinfo = new s2c_bairendezhou_return_mapinfo;
                    s2c_bairendezhou_return_mapinfo.read(obj_bairendezhou_return_mapinfo, bs);
                    return obj_bairendezhou_return_mapinfo;
                case Protocols.CMSG_TOUBAO_BET: //toubao_bet
                    var obj_toubao_bet = new c2s_toubao_bet;
                    c2s_toubao_bet.read(obj_toubao_bet, bs);
                    return obj_toubao_bet;
                case Protocols.CMSG_TOUBAO_SEATED: //toubao_seated
                    var obj_toubao_seated = new c2s_toubao_seated;
                    c2s_toubao_seated.read(obj_toubao_seated, bs);
                    return obj_toubao_seated;
                case Protocols.CMSG_HHDZ_UPDATE_ROAD: //hhdz_update_road
                    var obj_hhdz_update_road = new c2s_hhdz_update_road;
                    return obj_hhdz_update_road;
                case Protocols.CMSG_BAIRENDEZHOU_UPDATE_ROAD: //bairendezhou_update_road
                    var obj_bairendezhou_update_road = new c2s_bairendezhou_update_road;
                    return obj_bairendezhou_update_road;
                case Protocols.CMSG_END_ROOMCARD_GAME: //end_roomcard_game
                    var obj_end_roomcard_game = new c2s_end_roomcard_game;
                    c2s_end_roomcard_game.read(obj_end_roomcard_game, bs);
                    return obj_end_roomcard_game;
                case Protocols.CMSG_DEZHOU_BET: //dezhou_bet
                    var obj_dezhou_bet = new c2s_dezhou_bet;
                    return obj_dezhou_bet;
                case Protocols.CMSG_DEZHOU_ADDBET: //dezhou_addbet
                    var obj_dezhou_addbet = new c2s_dezhou_addbet;
                    c2s_dezhou_addbet.read(obj_dezhou_addbet, bs);
                    return obj_dezhou_addbet;
                case Protocols.CMSG_DEZHOU_PASS: //dezhou_pass
                    var obj_dezhou_pass = new c2s_dezhou_pass;
                    return obj_dezhou_pass;
                case Protocols.CMSG_DEZHOU_DISCARD: //dezhou_discard
                    var obj_dezhou_discard = new c2s_dezhou_discard;
                    return obj_dezhou_discard;
                case Protocols.CMSG_DEZHOU_TAKE_MONEY_TO_ROOM: //dezhou_take_money_to_room
                    var obj_dezhou_take_money_to_room = new c2s_dezhou_take_money_to_room;
                    c2s_dezhou_take_money_to_room.read(obj_dezhou_take_money_to_room, bs);
                    return obj_dezhou_take_money_to_room;
                case Protocols.CMSG_VOTE_END_ROOMCARD: //vote_end_roomcard
                    var obj_vote_end_roomcard = new c2s_vote_end_roomcard;
                    c2s_vote_end_roomcard.read(obj_vote_end_roomcard, bs);
                    return obj_vote_end_roomcard;
                case Protocols.CMSG_ZOO_BET: //zoo_bet
                    var obj_zoo_bet = new c2s_zoo_bet;
                    c2s_zoo_bet.read(obj_zoo_bet, bs);
                    return obj_zoo_bet;
                case Protocols.CMSG_ZOO_SEATED: //zoo_seated
                    var obj_zoo_seated = new c2s_zoo_seated;
                    c2s_zoo_seated.read(obj_zoo_seated, bs);
                    return obj_zoo_seated;
                case Protocols.CMSG_ZOO_GET_MAPINFO: //zoo_get_mapinfo
                    var obj_zoo_get_mapinfo = new c2s_zoo_get_mapinfo;
                    return obj_zoo_get_mapinfo;
                case Protocols.SMSG_ZOO_RETURN_MAPINFO: //zoo_return_mapinfo
                    var obj_zoo_return_mapinfo = new s2c_zoo_return_mapinfo;
                    s2c_zoo_return_mapinfo.read(obj_zoo_return_mapinfo, bs);
                    return obj_zoo_return_mapinfo;
                case Protocols.CMSG_DEZHOU_CONTINUE: //dezhou_continue
                    var obj_dezhou_continue = new c2s_dezhou_continue;
                    return obj_dezhou_continue;
                case Protocols.CMSG_GET_APP_ADDR: //get_app_addr
                    var obj_get_app_addr = new c2s_get_app_addr;
                    c2s_get_app_addr.read(obj_get_app_addr, bs);
                    return obj_get_app_addr;
                case Protocols.CMSG_PDK_PLAY_CARD: //pdk_play_card
                    var obj_pdk_play_card = new c2s_pdk_play_card;
                    c2s_pdk_play_card.read(obj_pdk_play_card, bs);
                    return obj_pdk_play_card;
                case Protocols.CMSG_PDK_PASS_CARD: //pdk_pass_card
                    var obj_pdk_pass_card = new c2s_pdk_pass_card;
                    return obj_pdk_pass_card;
                case Protocols.CMSG_PDK_QIANG_GUAN: //pdk_qiang_guan
                    var obj_pdk_qiang_guan = new c2s_pdk_qiang_guan;
                    c2s_pdk_qiang_guan.read(obj_pdk_qiang_guan, bs);
                    return obj_pdk_qiang_guan;
                case Protocols.CMSG_GET_QIFU_LIST: //get_qifu_list
                    var obj_get_qifu_list = new c2s_get_qifu_list;
                    return obj_get_qifu_list;
                case Protocols.CMSG_PLAYER_QIFU: //player_qifu
                    var obj_player_qifu = new c2s_player_qifu;
                    c2s_player_qifu.read(obj_player_qifu, bs);
                    return obj_player_qifu;
                case Protocols.CMSG_RECHARGE_CONFIRM: //recharge_confirm
                    var obj_recharge_confirm = new c2s_recharge_confirm;
                    c2s_recharge_confirm.read(obj_recharge_confirm, bs);
                    return obj_recharge_confirm;
                case Protocols.CMSG_LOGIN_INVITE: //login_invite
                    var obj_login_invite = new c2s_login_invite;
                    c2s_login_invite.read(obj_login_invite, bs);
                    return obj_login_invite;
                case Protocols.CMSG_PDK_TRUSTEESHIP: //pdk_trusteeship
                    var obj_pdk_trusteeship = new c2s_pdk_trusteeship;
                    return obj_pdk_trusteeship;
                case Protocols.CMSG_SSS_CANCEL_SPECIAL: //sss_cancel_special
                    var obj_sss_cancel_special = new c2s_sss_cancel_special;
                    return obj_sss_cancel_special;
                case Protocols.CMSG_SCMJ_EXCHANGE: //scmj_exchange
                    var obj_scmj_exchange = new c2s_scmj_exchange;
                    c2s_scmj_exchange.read(obj_scmj_exchange, bs);
                    return obj_scmj_exchange;
                case Protocols.CMSG_SCMJ_SET_LACK: //scmj_set_lack
                    var obj_scmj_set_lack = new c2s_scmj_set_lack;
                    c2s_scmj_set_lack.read(obj_scmj_set_lack, bs);
                    return obj_scmj_set_lack;
                case Protocols.CMSG_SCMJ_PLAY_CARD: //scmj_play_card
                    var obj_scmj_play_card = new c2s_scmj_play_card;
                    c2s_scmj_play_card.read(obj_scmj_play_card, bs);
                    return obj_scmj_play_card;
                case Protocols.CMSG_SCMJ_HU: //scmj_hu
                    var obj_scmj_hu = new c2s_scmj_hu;
                    return obj_scmj_hu;
                case Protocols.CMSG_SCMJ_GANG: //scmj_gang
                    var obj_scmj_gang = new c2s_scmj_gang;
                    return obj_scmj_gang;
                case Protocols.CMSG_SCMJ_PENG: //scmj_peng
                    var obj_scmj_peng = new c2s_scmj_peng;
                    return obj_scmj_peng;
                case Protocols.CMSG_SCMJ_PASS: //scmj_pass
                    var obj_scmj_pass = new c2s_scmj_pass;
                    return obj_scmj_pass;
                case Protocols.CMSG_GET_DAILI_YONGHU: //get_daili_yonghu
                    var obj_get_daili_yonghu = new c2s_get_daili_yonghu;
                    c2s_get_daili_yonghu.read(obj_get_daili_yonghu, bs);
                    return obj_get_daili_yonghu;
                case Protocols.CMSG_LOGIN_PARAMETER: //login_parameter
                    var obj_login_parameter = new c2s_login_parameter;
                    c2s_login_parameter.read(obj_login_parameter, bs);
                    return obj_login_parameter;
                case Protocols.CMSG_GET_VIP_LIST: //get_vip_list
                    var obj_get_vip_list = new c2s_get_vip_list;
                    return obj_get_vip_list;
                case Protocols.CMSG_GET_VIP_AWARD: //get_vip_award
                    var obj_get_vip_award = new c2s_get_vip_award;
                    c2s_get_vip_award.read(obj_get_vip_award, bs);
                    return obj_get_vip_award;
                case Protocols.CMSG_ELUOSILUNPAN_BET: //eluosilunpan_bet
                    var obj_eluosilunpan_bet = new c2s_eluosilunpan_bet;
                    c2s_eluosilunpan_bet.read(obj_eluosilunpan_bet, bs);
                    return obj_eluosilunpan_bet;
                case Protocols.CMSG_ELUOSILUNPAN_SEATED: //eluosilunpan_seated
                    var obj_eluosilunpan_seated = new c2s_eluosilunpan_seated;
                    c2s_eluosilunpan_seated.read(obj_eluosilunpan_seated, bs);
                    return obj_eluosilunpan_seated;
                case Protocols.CMSG_ELUOSILUNPAN_GET_MAPINFO: //eluosilunpan_get_mapinfo
                    var obj_eluosilunpan_get_mapinfo = new c2s_eluosilunpan_get_mapinfo;
                    return obj_eluosilunpan_get_mapinfo;
                case Protocols.SMSG_ELUOSILUNPAN_RETURN_MAPINFO: //eluosilunpan_return_mapinfo
                    var obj_eluosilunpan_return_mapinfo = new s2c_eluosilunpan_return_mapinfo;
                    s2c_eluosilunpan_return_mapinfo.read(obj_eluosilunpan_return_mapinfo, bs);
                    return obj_eluosilunpan_return_mapinfo;
                case Protocols.CMSG_SIGNIN: //signin
                    var obj_signin = new c2s_signin;
                    return obj_signin;
                case Protocols.CMSG_NEW_DAILYSHARE: //new_dailyshare
                    var obj_new_dailyshare = new c2s_new_dailyshare;
                    return obj_new_dailyshare;
                case Protocols.CMSG_SAVE_YUEBAO: //save_yuebao
                    var obj_save_yuebao = new c2s_save_yuebao;
                    c2s_save_yuebao.read(obj_save_yuebao, bs);
                    return obj_save_yuebao;
                case Protocols.CMSG_TAKE_YUEBAO: //take_yuebao
                    var obj_take_yuebao = new c2s_take_yuebao;
                    c2s_take_yuebao.read(obj_take_yuebao, bs);
                    return obj_take_yuebao;
                case Protocols.CMSG_PLAYER_QIFU_NEW: //player_qifu_new
                    var obj_player_qifu_new = new c2s_player_qifu_new;
                    c2s_player_qifu_new.read(obj_player_qifu_new, bs);
                    return obj_player_qifu_new;
                case Protocols.CMSG_RECEIVE_VIP_AWARD: //receive_vip_award
                    var obj_receive_vip_award = new c2s_receive_vip_award;
                    c2s_receive_vip_award.read(obj_receive_vip_award, bs);
                    return obj_receive_vip_award;
                case Protocols.CMSG_SCORE_LUCKY_DRAW: //score_lucky_draw
                    var obj_score_lucky_draw = new c2s_score_lucky_draw;
                    c2s_score_lucky_draw.read(obj_score_lucky_draw, bs);
                    return obj_score_lucky_draw;
                case Protocols.CMSG_GET_BIND_REWARD: //get_bind_reward
                    var obj_get_bind_reward = new c2s_get_bind_reward;
                    return obj_get_bind_reward;
                case Protocols.CMSG_GET_COMMISSION: //get_commission
                    var obj_get_commission = new c2s_get_commission;
                    return obj_get_commission;
                case Protocols.CMSG_FREE_SYTLE_SYNC: //free_sytle_sync
                    var obj_free_sytle_sync = new c2s_free_sytle_sync;
                    c2s_free_sytle_sync.read(obj_free_sytle_sync, bs);
                    return obj_free_sytle_sync;
                case Protocols.CMSG_CHECK_LOGIN_VF: //check_login_vf
                    var obj_check_login_vf = new c2s_check_login_vf;
                    c2s_check_login_vf.read(obj_check_login_vf, bs);
                    return obj_check_login_vf;
                case Protocols.CMSG_SET_MONEY_PWD: //set_money_pwd
                    var obj_set_money_pwd = new c2s_set_money_pwd;
                    c2s_set_money_pwd.read(obj_set_money_pwd, bs);
                    return obj_set_money_pwd;
                case Protocols.CMSG_GET_FIRST_PAY: //get_first_pay
                    var obj_get_first_pay = new c2s_get_first_pay;
                    return obj_get_first_pay;
                case Protocols.CMSG_SET_ROLE_INFO: //set_role_info
                    var obj_set_role_info = new c2s_set_role_info;
                    c2s_set_role_info.read(obj_set_role_info, bs);
                    return obj_set_role_info;
                default:
                    break;
            }
            return null;
        };
        Protocols.prototype.call_rand_pkt = function () {
            this._stream.reset();
            var optcode = MathU.parseInt(Math.random() * 65535);
            this._stream.writeUint16(optcode);
            var count = Math.random() * 100;
            for (var i = 0; i < count; i++) {
                this._stream.writeUint16(Math.random() * 65535);
            }
            this.sendMsg(optcode, this._stream);
        };
        Protocols.prototype.call_null_action = function () {
            this._stream.reset();
            this._stream.writeUint16(0);
            this.sendMsg(0, this._stream);
            //Log.outDebug("CS====> cmd:0 null_action");
        };
        Protocols.prototype.call_ping_pong = function () {
            this._stream.reset();
            this._stream.writeUint16(1);
            this.sendMsg(1, this._stream);
            //Log.outDebug("CS====> cmd:1 ping_pong");
        };
        Protocols.prototype.call_get_session = function (sessionkey, sign, version) {
            this._stream.reset();
            this._stream.writeUint16(2);
            //
            this._stream.writeString(sessionkey);
            //签名
            this._stream.writeString(sign);
            //版本
            this._stream.writeString(version);
            this.sendMsg(2, this._stream);
            //Log.outDebug("CS====> cmd:2 get_session");
        };
        Protocols.prototype.call_forced_into = function () {
            this._stream.reset();
            this._stream.writeUint16(3);
            this.sendMsg(3, this._stream);
            //Log.outDebug("CS====> cmd:3 forced_into");
        };
        Protocols.prototype.call_gm_command = function (gm_commands) {
            this._stream.reset();
            this._stream.writeUint16(4);
            //字符串string
            this._stream.writeString(gm_commands);
            this.sendMsg(4, this._stream);
            //Log.outDebug("CS====> cmd:4 gm_command");
        };
        Protocols.prototype.call_sync_mstime = function (mstime_now, time_now, open_time) {
            this._stream.reset();
            this._stream.writeUint16(6);
            //服务器运行的毫秒数
            this._stream.writeUint32(mstime_now);
            //自然时间
            this._stream.writeUint32(time_now);
            //自然时间的服务器启动时间
            this._stream.writeUint32(open_time);
            this.sendMsg(6, this._stream);
            //Log.outDebug("CS====> cmd:6 sync_mstime");
        };
        Protocols.prototype.call_ud_control = function () {
            this._stream.reset();
            this._stream.writeUint16(8);
            this.sendMsg(8, this._stream);
            //Log.outDebug("CS====> cmd:8 ud_control");
        };
        Protocols.prototype.call_get_login_vf = function (server_name, mobile) {
            this._stream.reset();
            this._stream.writeUint16(11);
            //运营商
            this._stream.writeString(server_name);
            //手机号
            this._stream.writeString(mobile);
            this.sendMsg(11, this._stream);
            //Log.outDebug("CS====> cmd:11 get_login_vf");
        };
        Protocols.prototype.call_login = function (typ, server_name, account, pwd) {
            this._stream.reset();
            this._stream.writeUint16(12);
            //登录类型
            this._stream.writeUint8(typ);
            //服务名
            this._stream.writeString(server_name);
            //账号
            this._stream.writeString(account);
            //密码
            this._stream.writeString(pwd);
            this.sendMsg(12, this._stream);
            //Log.outDebug("CS====> cmd:12 login");
        };
        Protocols.prototype.call_logout = function () {
            this._stream.reset();
            this._stream.writeUint16(13);
            this.sendMsg(13, this._stream);
            //Log.outDebug("CS====> cmd:13 logout");
        };
        Protocols.prototype.call_chat_send = function (type, content) {
            this._stream.reset();
            this._stream.writeUint16(14);
            //类型
            this._stream.writeUint8(type);
            //内容
            this._stream.writeString(content);
            this.sendMsg(14, this._stream);
            //Log.outDebug("CS====> cmd:14 chat_send");
        };
        Protocols.prototype.call_create_room = function (id, room_config_id, game_number, pay_typ, extra) {
            this._stream.reset();
            this._stream.writeUint16(16);
            //游戏id
            this._stream.writeString(id);
            //房间配置id
            this._stream.writeUint32(room_config_id);
            //局数
            this._stream.writeUint32(game_number);
            //支付类型1:房主2:AA
            this._stream.writeUint32(pay_typ);
            //额外的参数
            this._stream.writeString(extra);
            this.sendMsg(16, this._stream);
            //Log.outDebug("CS====> cmd:16 create_room");
        };
        Protocols.prototype.call_join_room = function (id, card_id) {
            this._stream.reset();
            this._stream.writeUint16(17);
            //游戏id
            this._stream.writeString(id);
            //房卡id
            this._stream.writeString(card_id);
            this.sendMsg(17, this._stream);
            //Log.outDebug("CS====> cmd:17 join_room");
        };
        Protocols.prototype.call_match_game = function (id, room_config_id) {
            this._stream.reset();
            this._stream.writeUint16(18);
            //游戏id
            this._stream.writeString(id);
            //房间配置id
            this._stream.writeUint32(room_config_id);
            this.sendMsg(18, this._stream);
            //Log.outDebug("CS====> cmd:18 match_game");
        };
        Protocols.prototype.call_cancel_match = function () {
            this._stream.reset();
            this._stream.writeUint16(19);
            this.sendMsg(19, this._stream);
            //Log.outDebug("CS====> cmd:19 cancel_match");
        };
        Protocols.prototype.call_leave_game = function () {
            this._stream.reset();
            this._stream.writeUint16(20);
            this.sendMsg(20, this._stream);
            //Log.outDebug("CS====> cmd:20 leave_game");
        };
        Protocols.prototype.call_switch_seat = function (to_index) {
            this._stream.reset();
            this._stream.writeUint16(22);
            //去哪个座位
            this._stream.writeUint8(to_index);
            this.sendMsg(22, this._stream);
            //Log.outDebug("CS====> cmd:22 switch_seat");
        };
        Protocols.prototype.call_sync_player_info = function () {
            this._stream.reset();
            this._stream.writeUint16(23);
            this.sendMsg(23, this._stream);
            //Log.outDebug("CS====> cmd:23 sync_player_info");
        };
        Protocols.prototype.call_sync_money = function () {
            this._stream.reset();
            this._stream.writeUint16(24);
            this.sendMsg(24, this._stream);
            //Log.outDebug("CS====> cmd:24 sync_money");
        };
        Protocols.prototype.call_bind = function (account, type, js_code, username, pwd1, pwd2, mobile, bindcode, device, invitor) {
            this._stream.reset();
            this._stream.writeUint16(25);
            //玩家账号
            this._stream.writeString(account);
            //绑定类型(
            this._stream.writeUint16(type);
            //绑定微信时需要该参数
            this._stream.writeString(js_code);
            //绑定账号时需要该参数
            this._stream.writeString(username);
            //绑定账号时需要该参数
            this._stream.writeString(pwd1);
            //绑定账号时需要该参数
            this._stream.writeString(pwd2);
            //绑定手机时需要该参数
            this._stream.writeString(mobile);
            //绑定手机时需要该参数
            this._stream.writeString(bindcode);
            //非必填 0网站1安卓2苹果
            this._stream.writeUint16(device);
            //非
            this._stream.writeString(invitor);
            this.sendMsg(25, this._stream);
            //Log.outDebug("CS====> cmd:25 bind");
        };
        Protocols.prototype.call_get_mails = function () {
            this._stream.reset();
            this._stream.writeUint16(26);
            this.sendMsg(26, this._stream);
            //Log.outDebug("CS====> cmd:26 get_mails");
        };
        Protocols.prototype.call_read_mail = function (id) {
            this._stream.reset();
            this._stream.writeUint16(28);
            //
            this._stream.writeInt32(id);
            this.sendMsg(28, this._stream);
            //Log.outDebug("CS====> cmd:28 read_mail");
        };
        Protocols.prototype.call_del_mail = function (id) {
            this._stream.reset();
            this._stream.writeUint16(29);
            //
            this._stream.writeInt32(id);
            this.sendMsg(29, this._stream);
            //Log.outDebug("CS====> cmd:29 del_mail");
        };
        Protocols.prototype.call_sync_web_time = function () {
            this._stream.reset();
            this._stream.writeUint16(30);
            this.sendMsg(30, this._stream);
            //Log.outDebug("CS====> cmd:30 sync_web_time");
        };
        Protocols.prototype.call_get_bindvf = function (mobile) {
            this._stream.reset();
            this._stream.writeUint16(31);
            //
            this._stream.writeString(mobile);
            this.sendMsg(31, this._stream);
            //Log.outDebug("CS====> cmd:31 get_bindvf");
        };
        Protocols.prototype.call_start_roomcard_game = function (mapid, room_config_id, guid, card_id) {
            this._stream.reset();
            this._stream.writeUint16(32);
            //游戏id
            this._stream.writeString(mapid);
            //房间配置id
            this._stream.writeUint32(room_config_id);
            //主玩家unit
            this._stream.writeString(guid);
            //房卡id
            this._stream.writeString(card_id);
            this.sendMsg(32, this._stream);
            //Log.outDebug("CS====> cmd:32 start_roomcard_game");
        };
        Protocols.prototype.call_get_service = function () {
            this._stream.reset();
            this._stream.writeUint16(33);
            this.sendMsg(33, this._stream);
            //Log.outDebug("CS====> cmd:33 get_service");
        };
        Protocols.prototype.call_get_reset_code = function () {
            this._stream.reset();
            this._stream.writeUint16(34);
            this.sendMsg(34, this._stream);
            //Log.outDebug("CS====> cmd:34 get_reset_code");
        };
        Protocols.prototype.call_get_bet_list = function (page_count, per_count, time, game_id, room_config_id, index) {
            this._stream.reset();
            this._stream.writeUint16(35);
            //
            this._stream.writeInt32(page_count);
            //
            this._stream.writeInt32(per_count);
            //
            this._stream.writeInt32(time);
            //游戏id
            this._stream.writeString(game_id);
            //房间配?胕d
            this._stream.writeUint32(room_config_id);
            //
            this._stream.writeInt32(index);
            this.sendMsg(35, this._stream);
            //Log.outDebug("CS====> cmd:35 get_bet_list");
        };
        Protocols.prototype.call_reset_pwd = function (vfcode, pwd1, pwd2) {
            this._stream.reset();
            this._stream.writeUint16(36);
            //
            this._stream.writeString(vfcode);
            //
            this._stream.writeString(pwd1);
            //
            this._stream.writeString(pwd2);
            this.sendMsg(36, this._stream);
            //Log.outDebug("CS====> cmd:36 reset_pwd");
        };
        Protocols.prototype.call_set_info = function (headimg, sex, device_token, device_type, isuninstall, nickname) {
            this._stream.reset();
            this._stream.writeUint16(37);
            //
            this._stream.writeString(headimg);
            //
            this._stream.writeString(sex);
            //
            this._stream.writeString(device_token);
            //
            this._stream.writeString(device_type);
            //
            this._stream.writeString(isuninstall);
            //
            this._stream.writeString(nickname);
            this.sendMsg(37, this._stream);
            //Log.outDebug("CS====> cmd:37 set_info");
        };
        Protocols.prototype.call_get_paychannel = function (paytype) {
            this._stream.reset();
            this._stream.writeUint16(38);
            //
            this._stream.writeString(paytype);
            this.sendMsg(38, this._stream);
            //Log.outDebug("CS====> cmd:38 get_paychannel");
        };
        Protocols.prototype.call_goto_pay = function (money, pid, paytype) {
            this._stream.reset();
            this._stream.writeUint16(39);
            //
            this._stream.writeString(money);
            //
            this._stream.writeUint16(pid);
            //
            this._stream.writeString(paytype);
            this.sendMsg(39, this._stream);
            //Log.outDebug("CS====> cmd:39 goto_pay");
        };
        Protocols.prototype.call_get_drawchannel = function () {
            this._stream.reset();
            this._stream.writeUint16(40);
            this.sendMsg(40, this._stream);
            //Log.outDebug("CS====> cmd:40 get_drawchannel");
        };
        Protocols.prototype.call_goto_draw = function (money, bindtype, drawpwd) {
            this._stream.reset();
            this._stream.writeUint16(41);
            //
            this._stream.writeString(money);
            //
            this._stream.writeString(bindtype);
            //
            this._stream.writeString(drawpwd);
            this.sendMsg(41, this._stream);
            //Log.outDebug("CS====> cmd:41 goto_draw");
        };
        Protocols.prototype.call_bindalipay = function (alipayname, drawpwd, realname) {
            this._stream.reset();
            this._stream.writeUint16(42);
            //
            this._stream.writeString(alipayname);
            //
            this._stream.writeString(drawpwd);
            //
            this._stream.writeString(realname);
            this.sendMsg(42, this._stream);
            //Log.outDebug("CS====> cmd:42 bindalipay");
        };
        Protocols.prototype.call_bindbank = function (banknum, drawpwd, banktype, bankaddr, realname) {
            this._stream.reset();
            this._stream.writeUint16(43);
            //
            this._stream.writeString(banknum);
            //
            this._stream.writeString(drawpwd);
            //
            this._stream.writeString(banktype);
            //
            this._stream.writeString(bankaddr);
            //
            this._stream.writeString(realname);
            this.sendMsg(43, this._stream);
            //Log.outDebug("CS====> cmd:43 bindbank");
        };
        Protocols.prototype.call_get_paydrawlist = function (page_count, per_count, dc) {
            this._stream.reset();
            this._stream.writeUint16(44);
            //
            this._stream.writeInt32(page_count);
            //
            this._stream.writeInt32(per_count);
            //
            this._stream.writeInt32(dc);
            this.sendMsg(44, this._stream);
            //Log.outDebug("CS====> cmd:44 get_paydrawlist");
        };
        Protocols.prototype.call_changedrawpwd = function (oldpwd, pwd1, pwd2) {
            this._stream.reset();
            this._stream.writeUint16(45);
            //
            this._stream.writeString(oldpwd);
            //
            this._stream.writeString(pwd1);
            //
            this._stream.writeString(pwd2);
            this.sendMsg(45, this._stream);
            //Log.outDebug("CS====> cmd:45 changedrawpwd");
        };
        Protocols.prototype.call_changepwd = function (oldpwd, pwd1, pwd2) {
            this._stream.reset();
            this._stream.writeUint16(46);
            //
            this._stream.writeString(oldpwd);
            //
            this._stream.writeString(pwd1);
            //
            this._stream.writeString(pwd2);
            this.sendMsg(46, this._stream);
            //Log.outDebug("CS====> cmd:46 changepwd");
        };
        Protocols.prototype.call_get_playerinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(47);
            this.sendMsg(47, this._stream);
            //Log.outDebug("CS====> cmd:47 get_playerinfo");
        };
        Protocols.prototype.call_get_siginin = function () {
            this._stream.reset();
            this._stream.writeUint16(48);
            this.sendMsg(48, this._stream);
            //Log.outDebug("CS====> cmd:48 get_siginin");
        };
        Protocols.prototype.call_siginin = function () {
            this._stream.reset();
            this._stream.writeUint16(49);
            this.sendMsg(49, this._stream);
            //Log.outDebug("CS====> cmd:49 siginin");
        };
        Protocols.prototype.call_get_signincfg = function () {
            this._stream.reset();
            this._stream.writeUint16(50);
            this.sendMsg(50, this._stream);
            //Log.outDebug("CS====> cmd:50 get_signincfg");
        };
        Protocols.prototype.call_get_ranking_list = function (type) {
            this._stream.reset();
            this._stream.writeUint16(51);
            //排行榜类型
            this._stream.writeInt32(type);
            this.sendMsg(51, this._stream);
            //Log.outDebug("CS====> cmd:51 get_ranking_list");
        };
        Protocols.prototype.call_saveboxin = function (money) {
            this._stream.reset();
            this._stream.writeUint16(52);
            //
            this._stream.writeFloat(money);
            this.sendMsg(52, this._stream);
            //Log.outDebug("CS====> cmd:52 saveboxin");
        };
        Protocols.prototype.call_saveboxout = function (money, drawpwd) {
            this._stream.reset();
            this._stream.writeUint16(53);
            //
            this._stream.writeFloat(money);
            //
            this._stream.writeString(drawpwd);
            this.sendMsg(53, this._stream);
            //Log.outDebug("CS====> cmd:53 saveboxout");
        };
        Protocols.prototype.call_get_savebox_list = function () {
            this._stream.reset();
            this._stream.writeUint16(54);
            this.sendMsg(54, this._stream);
            //Log.outDebug("CS====> cmd:54 get_savebox_list");
        };
        Protocols.prototype.call_get_active_list = function () {
            this._stream.reset();
            this._stream.writeUint16(55);
            this.sendMsg(55, this._stream);
            //Log.outDebug("CS====> cmd:55 get_active_list");
        };
        Protocols.prototype.call_get_agencyreport = function () {
            this._stream.reset();
            this._stream.writeUint16(56);
            this.sendMsg(56, this._stream);
            //Log.outDebug("CS====> cmd:56 get_agencyreport");
        };
        Protocols.prototype.call_get_rbmoney = function () {
            this._stream.reset();
            this._stream.writeUint16(57);
            this.sendMsg(57, this._stream);
            //Log.outDebug("CS====> cmd:57 get_rbmoney");
        };
        Protocols.prototype.call_get_agencylvlist = function () {
            this._stream.reset();
            this._stream.writeUint16(58);
            this.sendMsg(58, this._stream);
            //Log.outDebug("CS====> cmd:58 get_agencylvlist");
        };
        Protocols.prototype.call_get_turntablecfg = function () {
            this._stream.reset();
            this._stream.writeUint16(59);
            this.sendMsg(59, this._stream);
            //Log.outDebug("CS====> cmd:59 get_turntablecfg");
        };
        Protocols.prototype.call_get_turntableinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(60);
            this.sendMsg(60, this._stream);
            //Log.outDebug("CS====> cmd:60 get_turntableinfo");
        };
        Protocols.prototype.call_turntable = function (type_id) {
            this._stream.reset();
            this._stream.writeUint16(61);
            //
            this._stream.writeUint8(type_id);
            this.sendMsg(61, this._stream);
            //Log.outDebug("CS====> cmd:61 turntable");
        };
        Protocols.prototype.call_get_turntablelist = function () {
            this._stream.reset();
            this._stream.writeUint16(62);
            this.sendMsg(62, this._stream);
            //Log.outDebug("CS====> cmd:62 get_turntablelist");
        };
        Protocols.prototype.call_sync_token = function (token) {
            this._stream.reset();
            this._stream.writeUint16(63);
            //
            this._stream.writeString(token);
            this.sendMsg(63, this._stream);
            //Log.outDebug("CS====> cmd:63 sync_token");
        };
        Protocols.prototype.call_get_myshare = function () {
            this._stream.reset();
            this._stream.writeUint16(64);
            this.sendMsg(64, this._stream);
            //Log.outDebug("CS====> cmd:64 get_myshare");
        };
        Protocols.prototype.call_get_agrlastweek = function () {
            this._stream.reset();
            this._stream.writeUint16(65);
            this.sendMsg(65, this._stream);
            //Log.outDebug("CS====> cmd:65 get_agrlastweek");
        };
        Protocols.prototype.call_get_rbmoneylog = function () {
            this._stream.reset();
            this._stream.writeUint16(66);
            this.sendMsg(66, this._stream);
            //Log.outDebug("CS====> cmd:66 get_rbmoneylog");
        };
        Protocols.prototype.call_get_dailyshare = function () {
            this._stream.reset();
            this._stream.writeUint16(67);
            this.sendMsg(67, this._stream);
            //Log.outDebug("CS====> cmd:67 get_dailyshare");
        };
        Protocols.prototype.call_client_error = function (err) {
            this._stream.reset();
            this._stream.writeUint16(68);
            //
            this._stream.writeString(err);
            this.sendMsg(68, this._stream);
            //Log.outDebug("CS====> cmd:68 client_error");
        };
        Protocols.prototype.call_get_moneylog = function (page_count, per_count, time, index) {
            this._stream.reset();
            this._stream.writeUint16(69);
            //
            this._stream.writeInt32(page_count);
            //
            this._stream.writeInt32(per_count);
            //
            this._stream.writeInt32(time);
            //
            this._stream.writeInt32(index);
            this.sendMsg(69, this._stream);
            //Log.outDebug("CS====> cmd:69 get_moneylog");
        };
        Protocols.prototype.call_get_battle_log = function (battle_id, game_id, time) {
            this._stream.reset();
            this._stream.writeUint16(70);
            //
            this._stream.writeString(battle_id);
            //游戏id
            this._stream.writeString(game_id);
            //
            this._stream.writeInt32(time);
            this.sendMsg(70, this._stream);
            //Log.outDebug("CS====> cmd:70 get_battle_log");
        };
        Protocols.prototype.call_get_inventory = function (game_id) {
            this._stream.reset();
            this._stream.writeUint16(71);
            //游戏id
            this._stream.writeString(game_id);
            this.sendMsg(71, this._stream);
            //Log.outDebug("CS====> cmd:71 get_inventory");
        };
        Protocols.prototype.call_get_ramdon_name = function (num, time) {
            this._stream.reset();
            this._stream.writeUint16(72);
            //数量
            this._stream.writeInt32(num);
            //时间
            this._stream.writeInt32(time);
            this.sendMsg(72, this._stream);
            //Log.outDebug("CS====> cmd:72 get_ramdon_name");
        };
        Protocols.prototype.call_get_roomcard_share = function (game_id) {
            this._stream.reset();
            this._stream.writeUint16(74);
            //游戏id
            this._stream.writeString(game_id);
            this.sendMsg(74, this._stream);
            //Log.outDebug("CS====> cmd:74 get_roomcard_share");
        };
        Protocols.prototype.call_get_promo_list = function () {
            this._stream.reset();
            this._stream.writeUint16(75);
            this.sendMsg(75, this._stream);
            //Log.outDebug("CS====> cmd:75 get_promo_list");
        };
        Protocols.prototype.call_zhajinhua_call = function () {
            this._stream.reset();
            this._stream.writeUint16(76);
            this.sendMsg(76, this._stream);
            //Log.outDebug("CS====> cmd:76 zhajinhua_call");
        };
        Protocols.prototype.call_zhajinhua_auto_call = function () {
            this._stream.reset();
            this._stream.writeUint16(77);
            this.sendMsg(77, this._stream);
            //Log.outDebug("CS====> cmd:77 zhajinhua_auto_call");
        };
        Protocols.prototype.call_zhajinhua_filling = function (num) {
            this._stream.reset();
            this._stream.writeUint16(78);
            //下注数额
            this._stream.writeUint8(num);
            this.sendMsg(78, this._stream);
            //Log.outDebug("CS====> cmd:78 zhajinhua_filling");
        };
        Protocols.prototype.call_zhajinhua_see_card = function () {
            this._stream.reset();
            this._stream.writeUint16(79);
            this.sendMsg(79, this._stream);
            //Log.outDebug("CS====> cmd:79 zhajinhua_see_card");
        };
        Protocols.prototype.call_zhajinhua_give_up = function () {
            this._stream.reset();
            this._stream.writeUint16(80);
            this.sendMsg(80, this._stream);
            //Log.outDebug("CS====> cmd:80 zhajinhua_give_up");
        };
        Protocols.prototype.call_zhajinhua_compare = function (pos) {
            this._stream.reset();
            this._stream.writeUint16(81);
            //目标玩家位置
            this._stream.writeUint8(pos);
            this.sendMsg(81, this._stream);
            //Log.outDebug("CS====> cmd:81 zhajinhua_compare");
        };
        Protocols.prototype.call_niuniu_ready = function () {
            this._stream.reset();
            this._stream.writeUint16(82);
            this.sendMsg(82, this._stream);
            //Log.outDebug("CS====> cmd:82 niuniu_ready");
        };
        Protocols.prototype.call_niuniu_banker = function (num) {
            this._stream.reset();
            this._stream.writeUint16(83);
            //抢庄倍率
            this._stream.writeUint8(num);
            this.sendMsg(83, this._stream);
            //Log.outDebug("CS====> cmd:83 niuniu_banker");
        };
        Protocols.prototype.call_niuniu_bet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(84);
            //下注倍率
            this._stream.writeUint8(num);
            this.sendMsg(84, this._stream);
            //Log.outDebug("CS====> cmd:84 niuniu_bet");
        };
        Protocols.prototype.call_niuniu_pinpai = function () {
            this._stream.reset();
            this._stream.writeUint16(85);
            this.sendMsg(85, this._stream);
            //Log.outDebug("CS====> cmd:85 niuniu_pinpai");
        };
        Protocols.prototype.call_ddz_ready = function () {
            this._stream.reset();
            this._stream.writeUint16(86);
            this.sendMsg(86, this._stream);
            //Log.outDebug("CS====> cmd:86 ddz_ready");
        };
        Protocols.prototype.call_ddz_mingpai = function () {
            this._stream.reset();
            this._stream.writeUint16(87);
            this.sendMsg(87, this._stream);
            //Log.outDebug("CS====> cmd:87 ddz_mingpai");
        };
        Protocols.prototype.call_ddz_jiaodizhu = function () {
            this._stream.reset();
            this._stream.writeUint16(88);
            this.sendMsg(88, this._stream);
            //Log.outDebug("CS====> cmd:88 ddz_jiaodizhu");
        };
        Protocols.prototype.call_ddz_jiaodizhu_pass = function () {
            this._stream.reset();
            this._stream.writeUint16(89);
            this.sendMsg(89, this._stream);
            //Log.outDebug("CS====> cmd:89 ddz_jiaodizhu_pass");
        };
        Protocols.prototype.call_ddz_jiabei = function (typ) {
            this._stream.reset();
            this._stream.writeUint16(90);
            //加倍类型
            this._stream.writeUint8(typ);
            this.sendMsg(90, this._stream);
            //Log.outDebug("CS====> cmd:90 ddz_jiabei");
        };
        Protocols.prototype.call_ddz_play_card = function (typ, len, val, cards) {
            this._stream.reset();
            this._stream.writeUint16(91);
            //牌类型
            this._stream.writeUint8(typ);
            //牌长度
            this._stream.writeUint8(len);
            //最大牌
            this._stream.writeUint8(val);
            //出的牌
            this._stream.writeString(cards);
            this.sendMsg(91, this._stream);
            //Log.outDebug("CS====> cmd:91 ddz_play_card");
        };
        Protocols.prototype.call_ddz_play_card_pass = function () {
            this._stream.reset();
            this._stream.writeUint16(92);
            this.sendMsg(92, this._stream);
            //Log.outDebug("CS====> cmd:92 ddz_play_card_pass");
        };
        Protocols.prototype.call_ddz_trusteeship = function () {
            this._stream.reset();
            this._stream.writeUint16(93);
            this.sendMsg(93, this._stream);
            //Log.outDebug("CS====> cmd:93 ddz_trusteeship");
        };
        Protocols.prototype.call_zjh_continue = function () {
            this._stream.reset();
            this._stream.writeUint16(94);
            this.sendMsg(94, this._stream);
            //Log.outDebug("CS====> cmd:94 zjh_continue");
        };
        Protocols.prototype.call_niuniu_continue = function () {
            this._stream.reset();
            this._stream.writeUint16(95);
            this.sendMsg(95, this._stream);
            //Log.outDebug("CS====> cmd:95 niuniu_continue");
        };
        Protocols.prototype.call_zjh_cancel_matching = function () {
            this._stream.reset();
            this._stream.writeUint16(96);
            this.sendMsg(96, this._stream);
            //Log.outDebug("CS====> cmd:96 zjh_cancel_matching");
        };
        Protocols.prototype.call_niuniu_cancel_matching = function () {
            this._stream.reset();
            this._stream.writeUint16(97);
            this.sendMsg(97, this._stream);
            //Log.outDebug("CS====> cmd:97 niuniu_cancel_matching");
        };
        Protocols.prototype.call_zjh_leave_map = function () {
            this._stream.reset();
            this._stream.writeUint16(98);
            this.sendMsg(98, this._stream);
            //Log.outDebug("CS====> cmd:98 zjh_leave_map");
        };
        Protocols.prototype.call_blackjack_bet = function (num, pos) {
            this._stream.reset();
            this._stream.writeUint16(99);
            //下注数额
            this._stream.writeString(num);
            //下注位置
            this._stream.writeUint8(pos);
            this.sendMsg(99, this._stream);
            //Log.outDebug("CS====> cmd:99 blackjack_bet");
        };
        Protocols.prototype.call_blackjack_buy_insurance = function (opt_type, pos) {
            this._stream.reset();
            this._stream.writeUint16(100);
            //操作1买2不买
            this._stream.writeUint8(opt_type);
            //买保险位置
            this._stream.writeUint8(pos);
            this.sendMsg(100, this._stream);
            //Log.outDebug("CS====> cmd:100 blackjack_buy_insurance");
        };
        Protocols.prototype.call_blackjack_extend_bet = function () {
            this._stream.reset();
            this._stream.writeUint16(101);
            this.sendMsg(101, this._stream);
            //Log.outDebug("CS====> cmd:101 blackjack_extend_bet");
        };
        Protocols.prototype.call_blackjack_bet_double = function () {
            this._stream.reset();
            this._stream.writeUint16(102);
            this.sendMsg(102, this._stream);
            //Log.outDebug("CS====> cmd:102 blackjack_bet_double");
        };
        Protocols.prototype.call_blackjack_part_card = function () {
            this._stream.reset();
            this._stream.writeUint16(103);
            this.sendMsg(103, this._stream);
            //Log.outDebug("CS====> cmd:103 blackjack_part_card");
        };
        Protocols.prototype.call_blackjack_ask_card = function () {
            this._stream.reset();
            this._stream.writeUint16(104);
            this.sendMsg(104, this._stream);
            //Log.outDebug("CS====> cmd:104 blackjack_ask_card");
        };
        Protocols.prototype.call_blackjack_stop_card = function () {
            this._stream.reset();
            this._stream.writeUint16(105);
            this.sendMsg(105, this._stream);
            //Log.outDebug("CS====> cmd:105 blackjack_stop_card");
        };
        Protocols.prototype.call_blackjack_bet_complete = function () {
            this._stream.reset();
            this._stream.writeUint16(106);
            this.sendMsg(106, this._stream);
            //Log.outDebug("CS====> cmd:106 blackjack_bet_complete");
        };
        Protocols.prototype.call_tbniuniu_bet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(107);
            //下注倍率
            this._stream.writeUint8(num);
            this.sendMsg(107, this._stream);
            //Log.outDebug("CS====> cmd:107 tbniuniu_bet");
        };
        Protocols.prototype.call_tbniuniu_showcard = function () {
            this._stream.reset();
            this._stream.writeUint16(108);
            this.sendMsg(108, this._stream);
            //Log.outDebug("CS====> cmd:108 tbniuniu_showcard");
        };
        Protocols.prototype.call_tbniuniu_continue = function () {
            this._stream.reset();
            this._stream.writeUint16(109);
            this.sendMsg(109, this._stream);
            //Log.outDebug("CS====> cmd:109 tbniuniu_continue");
        };
        Protocols.prototype.call_tbniuniu_trusteeship = function () {
            this._stream.reset();
            this._stream.writeUint16(110);
            this.sendMsg(110, this._stream);
            //Log.outDebug("CS====> cmd:110 tbniuniu_trusteeship");
        };
        Protocols.prototype.call_brniuniu_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(111);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(111, this._stream);
            //Log.outDebug("CS====> cmd:111 brniuniu_bet");
        };
        Protocols.prototype.call_fish_get_dole = function () {
            this._stream.reset();
            this._stream.writeUint16(112);
            this.sendMsg(112, this._stream);
            //Log.outDebug("CS====> cmd:112 fish_get_dole");
        };
        Protocols.prototype.call_start_fire = function (toward, target_oid, is_boom) {
            this._stream.reset();
            this._stream.writeUint16(113);
            //相对自身的朝向
            this._stream.writeUint8(toward);
            //瞄准目标OID
            this._stream.writeUint32(target_oid);
            //是否炸金币
            this._stream.writeUint8(is_boom);
            this.sendMsg(113, this._stream);
            //Log.outDebug("CS====> cmd:113 start_fire");
        };
        Protocols.prototype.call_fire_at = function (oid) {
            this._stream.reset();
            this._stream.writeUint16(115);
            //鱼ID
            this._stream.writeUint32(oid);
            this.sendMsg(115, this._stream);
            //Log.outDebug("CS====> cmd:115 fire_at");
        };
        Protocols.prototype.call_change_fire_lv = function (lv) {
            this._stream.reset();
            this._stream.writeUint16(116);
            //目标炮的等级
            this._stream.writeUint32(lv);
            this.sendMsg(116, this._stream);
            //Log.outDebug("CS====> cmd:116 change_fire_lv");
        };
        Protocols.prototype.call_aim_at = function (oid) {
            this._stream.reset();
            this._stream.writeUint16(117);
            //鱼ID
            this._stream.writeUint32(oid);
            this.sendMsg(117, this._stream);
            //Log.outDebug("CS====> cmd:117 aim_at");
        };
        Protocols.prototype.call_change_bullet_state = function (state) {
            this._stream.reset();
            this._stream.writeUint16(118);
            //状态
            this._stream.writeUint32(state);
            this.sendMsg(118, this._stream);
            //Log.outDebug("CS====> cmd:118 change_bullet_state");
        };
        Protocols.prototype.call_fish_result = function (before, after) {
            this._stream.reset();
            this._stream.writeUint16(119);
            //状态
            this._stream.writeUint32(before);
            //状态
            this._stream.writeUint32(after);
            this.sendMsg(119, this._stream);
            //Log.outDebug("CS====> cmd:119 fish_result");
        };
        Protocols.prototype.call_brniuniu_xiazhuang = function () {
            this._stream.reset();
            this._stream.writeUint16(120);
            this.sendMsg(120, this._stream);
            //Log.outDebug("CS====> cmd:120 brniuniu_xiazhuang");
        };
        Protocols.prototype.call_brniuniu_shangzhuang = function () {
            this._stream.reset();
            this._stream.writeUint16(121);
            this.sendMsg(121, this._stream);
            //Log.outDebug("CS====> cmd:121 brniuniu_shangzhuang");
        };
        Protocols.prototype.call_brniuniu_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(122);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(122, this._stream);
            //Log.outDebug("CS====> cmd:122 brniuniu_seated");
        };
        Protocols.prototype.call_brnn_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(123);
            this.sendMsg(123, this._stream);
            //Log.outDebug("CS====> cmd:123 brnn_get_mapinfo");
        };
        Protocols.prototype.call_sg_banker = function (opt_type) {
            this._stream.reset();
            this._stream.writeUint16(126);
            //操作1买2不买
            this._stream.writeUint8(opt_type);
            this.sendMsg(126, this._stream);
            //Log.outDebug("CS====> cmd:126 sg_banker");
        };
        Protocols.prototype.call_sg_bet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(127);
            //下注倍数
            this._stream.writeUint8(num);
            this.sendMsg(127, this._stream);
            //Log.outDebug("CS====> cmd:127 sg_bet");
        };
        Protocols.prototype.call_sg_show_cards = function () {
            this._stream.reset();
            this._stream.writeUint16(128);
            this.sendMsg(128, this._stream);
            //Log.outDebug("CS====> cmd:128 sg_show_cards");
        };
        Protocols.prototype.call_longhu_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(129);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(129, this._stream);
            //Log.outDebug("CS====> cmd:129 longhu_bet");
        };
        Protocols.prototype.call_longhu_xiazhuang = function () {
            this._stream.reset();
            this._stream.writeUint16(130);
            this.sendMsg(130, this._stream);
            //Log.outDebug("CS====> cmd:130 longhu_xiazhuang");
        };
        Protocols.prototype.call_longhu_shangzhuang = function () {
            this._stream.reset();
            this._stream.writeUint16(131);
            this.sendMsg(131, this._stream);
            //Log.outDebug("CS====> cmd:131 longhu_shangzhuang");
        };
        Protocols.prototype.call_longhu_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(132);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(132, this._stream);
            //Log.outDebug("CS====> cmd:132 longhu_seated");
        };
        Protocols.prototype.call_longhu_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(133);
            this.sendMsg(133, this._stream);
            //Log.outDebug("CS====> cmd:133 longhu_get_mapinfo");
        };
        Protocols.prototype.call_ebgang_banker = function (num) {
            this._stream.reset();
            this._stream.writeUint16(135);
            //抢庄倍率
            this._stream.writeUint8(num);
            this.sendMsg(135, this._stream);
            //Log.outDebug("CS====> cmd:135 ebgang_banker");
        };
        Protocols.prototype.call_ebgang_bet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(136);
            //下注倍数
            this._stream.writeUint8(num);
            this.sendMsg(136, this._stream);
            //Log.outDebug("CS====> cmd:136 ebgang_bet");
        };
        Protocols.prototype.call_hhdazhan_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(137);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(137, this._stream);
            //Log.outDebug("CS====> cmd:137 hhdazhan_bet");
        };
        Protocols.prototype.call_hhdazhan_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(138);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(138, this._stream);
            //Log.outDebug("CS====> cmd:138 hhdazhan_seated");
        };
        Protocols.prototype.call_qzpaijiu_banker = function (num) {
            this._stream.reset();
            this._stream.writeUint16(139);
            //抢庄倍率
            this._stream.writeUint8(num);
            this.sendMsg(139, this._stream);
            //Log.outDebug("CS====> cmd:139 qzpaijiu_banker");
        };
        Protocols.prototype.call_qzpaijiu_bet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(140);
            //下注倍数
            this._stream.writeUint8(num);
            this.sendMsg(140, this._stream);
            //Log.outDebug("CS====> cmd:140 qzpaijiu_bet");
        };
        Protocols.prototype.call_shuiguoji_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(141);
            //下注倍数
            this._stream.writeUint8(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(141, this._stream);
            //Log.outDebug("CS====> cmd:141 shuiguoji_bet");
        };
        Protocols.prototype.call_shuiguoji_lottery = function (type, param) {
            this._stream.reset();
            this._stream.writeUint16(142);
            //开奖类型0正常开奖1猜大小
            this._stream.writeUint8(type);
            //参数为下注类型和下注倍数用逗号隔开
            this._stream.writeString(param);
            this.sendMsg(142, this._stream);
            //Log.outDebug("CS====> cmd:142 shuiguoji_lottery");
        };
        Protocols.prototype.call_shuiguoji_result = function () {
            this._stream.reset();
            this._stream.writeUint16(143);
            this.sendMsg(143, this._stream);
            //Log.outDebug("CS====> cmd:143 shuiguoji_result");
        };
        Protocols.prototype.call_robot_start_fire = function (robot_oid, toward, target_oid) {
            this._stream.reset();
            this._stream.writeUint16(144);
            //机器人oid
            this._stream.writeUint32(robot_oid);
            //相对自身的朝向
            this._stream.writeUint8(toward);
            //瞄准目标OID
            this._stream.writeUint32(target_oid);
            this.sendMsg(144, this._stream);
            //Log.outDebug("CS====> cmd:144 robot_start_fire");
        };
        Protocols.prototype.call_robot_fire_at = function (robot_oid, oid) {
            this._stream.reset();
            this._stream.writeUint16(145);
            //机器人oid
            this._stream.writeUint32(robot_oid);
            //鱼ID
            this._stream.writeUint32(oid);
            this.sendMsg(145, this._stream);
            //Log.outDebug("CS====> cmd:145 robot_fire_at");
        };
        Protocols.prototype.call_baijiale_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(146);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(146, this._stream);
            //Log.outDebug("CS====> cmd:146 baijiale_bet");
        };
        Protocols.prototype.call_baijiale_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(147);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(147, this._stream);
            //Log.outDebug("CS====> cmd:147 baijiale_seated");
        };
        Protocols.prototype.call_baijiale_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(148);
            this.sendMsg(148, this._stream);
            //Log.outDebug("CS====> cmd:148 baijiale_get_mapinfo");
        };
        Protocols.prototype.call_hhdz_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(150);
            this.sendMsg(150, this._stream);
            //Log.outDebug("CS====> cmd:150 hhdz_get_mapinfo");
        };
        Protocols.prototype.call_longhu_update_road = function () {
            this._stream.reset();
            this._stream.writeUint16(152);
            this.sendMsg(152, this._stream);
            //Log.outDebug("CS====> cmd:152 longhu_update_road");
        };
        Protocols.prototype.call_baijiale_update_road = function () {
            this._stream.reset();
            this._stream.writeUint16(153);
            this.sendMsg(153, this._stream);
            //Log.outDebug("CS====> cmd:153 baijiale_update_road");
        };
        Protocols.prototype.call_shisanshui_playing = function (cards, opt_type) {
            this._stream.reset();
            this._stream.writeUint16(154);
            //拼好的所有牌
            this._stream.writeString(cards);
            //是否特殊牌0不是1是
            this._stream.writeUint8(opt_type);
            this.sendMsg(154, this._stream);
            //Log.outDebug("CS====> cmd:154 shisanshui_playing");
        };
        Protocols.prototype.call_benchibaoma_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(155);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(155, this._stream);
            //Log.outDebug("CS====> cmd:155 benchibaoma_bet");
        };
        Protocols.prototype.call_benchibaoma_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(156);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(156, this._stream);
            //Log.outDebug("CS====> cmd:156 benchibaoma_seated");
        };
        Protocols.prototype.call_benchibaoma_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(157);
            this.sendMsg(157, this._stream);
            //Log.outDebug("CS====> cmd:157 benchibaoma_get_mapinfo");
        };
        Protocols.prototype.call_bairendezhou_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(159);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(159, this._stream);
            //Log.outDebug("CS====> cmd:159 bairendezhou_bet");
        };
        Protocols.prototype.call_bairendezhou_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(160);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(160, this._stream);
            //Log.outDebug("CS====> cmd:160 bairendezhou_seated");
        };
        Protocols.prototype.call_bairendezhou_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(161);
            this.sendMsg(161, this._stream);
            //Log.outDebug("CS====> cmd:161 bairendezhou_get_mapinfo");
        };
        Protocols.prototype.call_toubao_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(163);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(163, this._stream);
            //Log.outDebug("CS====> cmd:163 toubao_bet");
        };
        Protocols.prototype.call_toubao_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(164);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(164, this._stream);
            //Log.outDebug("CS====> cmd:164 toubao_seated");
        };
        Protocols.prototype.call_hhdz_update_road = function () {
            this._stream.reset();
            this._stream.writeUint16(165);
            this.sendMsg(165, this._stream);
            //Log.outDebug("CS====> cmd:165 hhdz_update_road");
        };
        Protocols.prototype.call_bairendezhou_update_road = function () {
            this._stream.reset();
            this._stream.writeUint16(166);
            this.sendMsg(166, this._stream);
            //Log.outDebug("CS====> cmd:166 bairendezhou_update_road");
        };
        Protocols.prototype.call_end_roomcard_game = function (mapid, room_config_id, index, card_id) {
            this._stream.reset();
            this._stream.writeUint16(167);
            //游戏id
            this._stream.writeString(mapid);
            //房间配置id
            this._stream.writeUint32(room_config_id);
            //入座位置
            this._stream.writeUint8(index);
            //房卡id
            this._stream.writeString(card_id);
            this.sendMsg(167, this._stream);
            //Log.outDebug("CS====> cmd:167 end_roomcard_game");
        };
        Protocols.prototype.call_dezhou_bet = function () {
            this._stream.reset();
            this._stream.writeUint16(168);
            this.sendMsg(168, this._stream);
            //Log.outDebug("CS====> cmd:168 dezhou_bet");
        };
        Protocols.prototype.call_dezhou_addbet = function (num) {
            this._stream.reset();
            this._stream.writeUint16(169);
            //下注金额
            this._stream.writeUint32(num);
            this.sendMsg(169, this._stream);
            //Log.outDebug("CS====> cmd:169 dezhou_addbet");
        };
        Protocols.prototype.call_dezhou_pass = function () {
            this._stream.reset();
            this._stream.writeUint16(170);
            this.sendMsg(170, this._stream);
            //Log.outDebug("CS====> cmd:170 dezhou_pass");
        };
        Protocols.prototype.call_dezhou_discard = function () {
            this._stream.reset();
            this._stream.writeUint16(171);
            this.sendMsg(171, this._stream);
            //Log.outDebug("CS====> cmd:171 dezhou_discard");
        };
        Protocols.prototype.call_dezhou_take_money_to_room = function (num) {
            this._stream.reset();
            this._stream.writeUint16(172);
            //携带金额
            this._stream.writeUint32(num);
            this.sendMsg(172, this._stream);
            //Log.outDebug("CS====> cmd:172 dezhou_take_money_to_room");
        };
        Protocols.prototype.call_vote_end_roomcard = function (mapid, room_config_id, index, card_id, isagree) {
            this._stream.reset();
            this._stream.writeUint16(173);
            //游戏id
            this._stream.writeString(mapid);
            //房间配置id
            this._stream.writeUint32(room_config_id);
            //入座位置
            this._stream.writeUint8(index);
            //房卡id
            this._stream.writeString(card_id);
            //是否同意
            this._stream.writeUint8(isagree);
            this.sendMsg(173, this._stream);
            //Log.outDebug("CS====> cmd:173 vote_end_roomcard");
        };
        Protocols.prototype.call_zoo_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(174);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(174, this._stream);
            //Log.outDebug("CS====> cmd:174 zoo_bet");
        };
        Protocols.prototype.call_zoo_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(175);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(175, this._stream);
            //Log.outDebug("CS====> cmd:175 zoo_seated");
        };
        Protocols.prototype.call_zoo_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(176);
            this.sendMsg(176, this._stream);
            //Log.outDebug("CS====> cmd:176 zoo_get_mapinfo");
        };
        Protocols.prototype.call_dezhou_continue = function () {
            this._stream.reset();
            this._stream.writeUint16(178);
            this.sendMsg(178, this._stream);
            //Log.outDebug("CS====> cmd:178 dezhou_continue");
        };
        Protocols.prototype.call_get_app_addr = function (app_type, device_type, data) {
            this._stream.reset();
            this._stream.writeUint16(179);
            //入口类型
            this._stream.writeUint8(app_type);
            //设备类型
            this._stream.writeUint8(device_type);
            //其他数据
            this._stream.writeString(data);
            this.sendMsg(179, this._stream);
            //Log.outDebug("CS====> cmd:179 get_app_addr");
        };
        Protocols.prototype.call_pdk_play_card = function (typ, len, val, cards) {
            this._stream.reset();
            this._stream.writeUint16(180);
            //牌类型
            this._stream.writeUint8(typ);
            //牌长度
            this._stream.writeUint8(len);
            //最大牌
            this._stream.writeUint8(val);
            //出的牌
            this._stream.writeString(cards);
            this.sendMsg(180, this._stream);
            //Log.outDebug("CS====> cmd:180 pdk_play_card");
        };
        Protocols.prototype.call_pdk_pass_card = function () {
            this._stream.reset();
            this._stream.writeUint16(181);
            this.sendMsg(181, this._stream);
            //Log.outDebug("CS====> cmd:181 pdk_pass_card");
        };
        Protocols.prototype.call_pdk_qiang_guan = function (typ) {
            this._stream.reset();
            this._stream.writeUint16(182);
            //操作类型0不抢1抢
            this._stream.writeUint8(typ);
            this.sendMsg(182, this._stream);
            //Log.outDebug("CS====> cmd:182 pdk_qiang_guan");
        };
        Protocols.prototype.call_get_qifu_list = function () {
            this._stream.reset();
            this._stream.writeUint16(183);
            this.sendMsg(183, this._stream);
            //Log.outDebug("CS====> cmd:183 get_qifu_list");
        };
        Protocols.prototype.call_player_qifu = function (typ, id, name) {
            this._stream.reset();
            this._stream.writeUint16(184);
            //祈福类型
            this._stream.writeUint8(typ);
            //祈福枚举
            this._stream.writeUint8(id);
            //祈福对象名称
            this._stream.writeString(name);
            this.sendMsg(184, this._stream);
            //Log.outDebug("CS====> cmd:184 player_qifu");
        };
        Protocols.prototype.call_recharge_confirm = function (account, money, type, from_msg) {
            this._stream.reset();
            this._stream.writeUint16(185);
            //账号
            this._stream.writeString(account);
            //转账的钱
            this._stream.writeInt32(money);
            //转账类型
            this._stream.writeInt32(type);
            //转账信息
            this._stream.writeString(from_msg);
            this.sendMsg(185, this._stream);
            //Log.outDebug("CS====> cmd:185 recharge_confirm");
        };
        Protocols.prototype.call_login_invite = function (typ, server_name, account, pwd, invitor) {
            this._stream.reset();
            this._stream.writeUint16(186);
            //登录类型
            this._stream.writeUint8(typ);
            //服务名
            this._stream.writeString(server_name);
            //账号
            this._stream.writeString(account);
            //密码
            this._stream.writeString(pwd);
            //非
            this._stream.writeString(invitor);
            this.sendMsg(186, this._stream);
            //Log.outDebug("CS====> cmd:186 login_invite");
        };
        Protocols.prototype.call_pdk_trusteeship = function () {
            this._stream.reset();
            this._stream.writeUint16(187);
            this.sendMsg(187, this._stream);
            //Log.outDebug("CS====> cmd:187 pdk_trusteeship");
        };
        Protocols.prototype.call_sss_cancel_special = function () {
            this._stream.reset();
            this._stream.writeUint16(188);
            this.sendMsg(188, this._stream);
            //Log.outDebug("CS====> cmd:188 sss_cancel_special");
        };
        Protocols.prototype.call_scmj_exchange = function (cards) {
            this._stream.reset();
            this._stream.writeUint16(189);
            //选的牌
            this._stream.writeString(cards);
            this.sendMsg(189, this._stream);
            //Log.outDebug("CS====> cmd:189 scmj_exchange");
        };
        Protocols.prototype.call_scmj_set_lack = function (color) {
            this._stream.reset();
            this._stream.writeUint16(190);
            //选的花色
            this._stream.writeUint8(color);
            this.sendMsg(190, this._stream);
            //Log.outDebug("CS====> cmd:190 scmj_set_lack");
        };
        Protocols.prototype.call_scmj_play_card = function (cards) {
            this._stream.reset();
            this._stream.writeUint16(191);
            //出的牌
            this._stream.writeUint8(cards);
            this.sendMsg(191, this._stream);
            //Log.outDebug("CS====> cmd:191 scmj_play_card");
        };
        Protocols.prototype.call_scmj_hu = function () {
            this._stream.reset();
            this._stream.writeUint16(192);
            this.sendMsg(192, this._stream);
            //Log.outDebug("CS====> cmd:192 scmj_hu");
        };
        Protocols.prototype.call_scmj_gang = function () {
            this._stream.reset();
            this._stream.writeUint16(193);
            this.sendMsg(193, this._stream);
            //Log.outDebug("CS====> cmd:193 scmj_gang");
        };
        Protocols.prototype.call_scmj_peng = function () {
            this._stream.reset();
            this._stream.writeUint16(194);
            this.sendMsg(194, this._stream);
            //Log.outDebug("CS====> cmd:194 scmj_peng");
        };
        Protocols.prototype.call_scmj_pass = function () {
            this._stream.reset();
            this._stream.writeUint16(195);
            this.sendMsg(195, this._stream);
            //Log.outDebug("CS====> cmd:195 scmj_pass");
        };
        Protocols.prototype.call_get_daili_yonghu = function (date_type) {
            this._stream.reset();
            this._stream.writeUint16(196);
            //
            this._stream.writeInt32(date_type);
            this.sendMsg(196, this._stream);
            //Log.outDebug("CS====> cmd:196 get_daili_yonghu");
        };
        Protocols.prototype.call_login_parameter = function (typ, server_name, account, pwd, invitor, system, model, deviceid) {
            this._stream.reset();
            this._stream.writeUint16(197);
            //登录类型
            this._stream.writeUint8(typ);
            //服务名
            this._stream.writeString(server_name);
            //账号
            this._stream.writeString(account);
            //密码
            this._stream.writeString(pwd);
            //邀请码
            this._stream.writeString(invitor);
            //系统版本号
            this._stream.writeString(system);
            //手机型号
            this._stream.writeString(model);
            //唯一标识
            this._stream.writeString(deviceid);
            this.sendMsg(197, this._stream);
            //Log.outDebug("CS====> cmd:197 login_parameter");
        };
        Protocols.prototype.call_get_vip_list = function () {
            this._stream.reset();
            this._stream.writeUint16(198);
            this.sendMsg(198, this._stream);
            //Log.outDebug("CS====> cmd:198 get_vip_list");
        };
        Protocols.prototype.call_get_vip_award = function (lv) {
            this._stream.reset();
            this._stream.writeUint16(199);
            //
            this._stream.writeInt32(lv);
            this.sendMsg(199, this._stream);
            //Log.outDebug("CS====> cmd:199 get_vip_award");
        };
        Protocols.prototype.call_eluosilunpan_bet = function (num, index) {
            this._stream.reset();
            this._stream.writeUint16(200);
            //下注金额
            this._stream.writeUint32(num);
            //下注位置
            this._stream.writeUint8(index);
            this.sendMsg(200, this._stream);
            //Log.outDebug("CS====> cmd:200 eluosilunpan_bet");
        };
        Protocols.prototype.call_eluosilunpan_seated = function (index) {
            this._stream.reset();
            this._stream.writeUint16(201);
            //入座位置
            this._stream.writeUint8(index);
            this.sendMsg(201, this._stream);
            //Log.outDebug("CS====> cmd:201 eluosilunpan_seated");
        };
        Protocols.prototype.call_eluosilunpan_get_mapinfo = function () {
            this._stream.reset();
            this._stream.writeUint16(202);
            this.sendMsg(202, this._stream);
            //Log.outDebug("CS====> cmd:202 eluosilunpan_get_mapinfo");
        };
        Protocols.prototype.call_signin = function () {
            this._stream.reset();
            this._stream.writeUint16(204);
            this.sendMsg(204, this._stream);
            //Log.outDebug("CS====> cmd:204 signin");
        };
        Protocols.prototype.call_new_dailyshare = function () {
            this._stream.reset();
            this._stream.writeUint16(205);
            this.sendMsg(205, this._stream);
            //Log.outDebug("CS====> cmd:205 new_dailyshare");
        };
        Protocols.prototype.call_save_yuebao = function (money) {
            this._stream.reset();
            this._stream.writeUint16(206);
            //
            this._stream.writeFloat(money);
            this.sendMsg(206, this._stream);
            //Log.outDebug("CS====> cmd:206 save_yuebao");
        };
        Protocols.prototype.call_take_yuebao = function (money, drawpwd) {
            this._stream.reset();
            this._stream.writeUint16(207);
            //
            this._stream.writeFloat(money);
            //
            this._stream.writeString(drawpwd);
            this.sendMsg(207, this._stream);
            //Log.outDebug("CS====> cmd:207 take_yuebao");
        };
        Protocols.prototype.call_player_qifu_new = function (typ, id, name) {
            this._stream.reset();
            this._stream.writeUint16(208);
            //祈福类型
            this._stream.writeUint8(typ);
            //祈福枚举
            this._stream.writeUint8(id);
            //祈福对象名称
            this._stream.writeString(name);
            this.sendMsg(208, this._stream);
            //Log.outDebug("CS====> cmd:208 player_qifu_new");
        };
        Protocols.prototype.call_receive_vip_award = function (lv) {
            this._stream.reset();
            this._stream.writeUint16(209);
            //
            this._stream.writeInt32(lv);
            this.sendMsg(209, this._stream);
            //Log.outDebug("CS====> cmd:209 receive_vip_award");
        };
        Protocols.prototype.call_score_lucky_draw = function (type_id) {
            this._stream.reset();
            this._stream.writeUint16(210);
            //
            this._stream.writeUint8(type_id);
            this.sendMsg(210, this._stream);
            //Log.outDebug("CS====> cmd:210 score_lucky_draw");
        };
        Protocols.prototype.call_get_bind_reward = function () {
            this._stream.reset();
            this._stream.writeUint16(211);
            this.sendMsg(211, this._stream);
            //Log.outDebug("CS====> cmd:211 get_bind_reward");
        };
        Protocols.prototype.call_get_commission = function () {
            this._stream.reset();
            this._stream.writeUint16(212);
            this.sendMsg(212, this._stream);
            //Log.outDebug("CS====> cmd:212 get_commission");
        };
        Protocols.prototype.call_free_sytle_sync = function (data) {
            this._stream.reset();
            this._stream.writeUint16(213);
            //
            this._stream.writeString(data);
            this.sendMsg(213, this._stream);
            //Log.outDebug("CS====> cmd:213 free_sytle_sync");
        };
        Protocols.prototype.call_check_login_vf = function (mobile, code, server_name) {
            this._stream.reset();
            this._stream.writeUint16(214);
            //手机号
            this._stream.writeString(mobile);
            //验证码
            this._stream.writeString(code);
            //运营商
            this._stream.writeString(server_name);
            this.sendMsg(214, this._stream);
            //Log.outDebug("CS====> cmd:214 check_login_vf");
        };
        Protocols.prototype.call_set_money_pwd = function (pwd) {
            this._stream.reset();
            this._stream.writeUint16(215);
            //取款密码
            this._stream.writeString(pwd);
            this.sendMsg(215, this._stream);
            //Log.outDebug("CS====> cmd:215 set_money_pwd");
        };
        Protocols.prototype.call_get_first_pay = function () {
            this._stream.reset();
            this._stream.writeUint16(216);
            this.sendMsg(216, this._stream);
            //Log.outDebug("CS====> cmd:216 get_first_pay");
        };
        Protocols.prototype.call_set_role_info = function (type, info) {
            this._stream.reset();
            this._stream.writeUint16(217);
            //
            this._stream.writeInt32(type);
            //
            this._stream.writeString(info);
            this.sendMsg(217, this._stream);
            //Log.outDebug("CS====> cmd:217 set_role_info");
        };
        /*无效动作*/
        Protocols.MSG_NULL_ACTION = 0; //null_action
        /*测试连接状态*/
        Protocols.MSG_PING_PONG = 1; //ping_pong
        /*获得Session对象*/
        Protocols.CMSG_GET_SESSION = 2; //get_session
        /*踢掉在线的准备强制登陆*/
        Protocols.CMSG_FORCED_INTO = 3; //forced_into
        /*GM命令*/
        Protocols.CMSG_GM_COMMAND = 4; //gm_command
        /*操作失败*/
        Protocols.SMSG_OPERATION_FAILED = 5; //operation_failed
        /*同步时间*/
        Protocols.MSG_SYNC_MSTIME = 6; //sync_mstime
        /*对象更新*/
        Protocols.SMSG_UD_OBJECT = 7; //ud_object
        /*对象更新控制协议*/
        Protocols.CMSG_UD_CONTROL = 8; //ud_control
        /*对象更新控制协议结果*/
        Protocols.SMSG_UD_CONTROL_RESULT = 9; //ud_control_result
        /*地图网格对象更新*/
        Protocols.SMSG_GRID_UPDATE_DATA = 10; //grid_update_data
        /*请求手机验证码*/
        Protocols.CMSG_GET_LOGIN_VF = 11; //get_login_vf
        /*登录*/
        Protocols.CMSG_LOGIN = 12; //login
        /*退出登录*/
        Protocols.CMSG_LOGOUT = 13; //logout
        /*发言*/
        Protocols.CMSG_CHAT_SEND = 14; //chat_send
        /*发言*/
        Protocols.SMSG_CHAT_INFO = 15; //chat_info
        /*创建房间*/
        Protocols.CMSG_CREATE_ROOM = 16; //create_room
        /*加入房间*/
        Protocols.CMSG_JOIN_ROOM = 17; //join_room
        /*发起匹配*/
        Protocols.CMSG_MATCH_GAME = 18; //match_game
        /*取消匹配*/
        Protocols.CMSG_CANCEL_MATCH = 19; //cancel_match
        /*离开游戏*/
        Protocols.CMSG_LEAVE_GAME = 20; //leave_game
        /*加入游戏结果*/
        Protocols.SMSG_JOIN_GAME_RESULT = 21; //join_game_result
        /*换座*/
        Protocols.CMSG_SWITCH_SEAT = 22; //switch_seat
        /*同步玩家信息不去开元同步钱*/
        Protocols.CMSG_SYNC_PLAYER_INFO = 23; //sync_player_info
        /*请求同步金钱必须去开元同步钱*/
        Protocols.CMSG_SYNC_MONEY = 24; //sync_money
        /*账号绑定*/
        Protocols.CMSG_BIND = 25; //bind
        /*邮件查寻接口*/
        Protocols.CMSG_GET_MAILS = 26; //get_mails
        /*获取公告*/
        Protocols.SMSG_SEND_NOTICES = 27; //send_notices
        /*读邮件*/
        Protocols.CMSG_READ_MAIL = 28; //read_mail
        /*删除邮件*/
        Protocols.CMSG_DEL_MAIL = 29; //del_mail
        /*web同步时间*/
        Protocols.CMSG_SYNC_WEB_TIME = 30; //sync_web_time
        /*获取验证码*/
        Protocols.CMSG_GET_BINDVF = 31; //get_bindvf
        /*开始当前房间游戏*/
        Protocols.CMSG_START_ROOMCARD_GAME = 32; //start_roomcard_game
        /*获取客服地址*/
        Protocols.CMSG_GET_SERVICE = 33; //get_service
        /*重置密码验证码*/
        Protocols.CMSG_GET_RESET_CODE = 34; //get_reset_code
        /*获取流水记录*/
        Protocols.CMSG_GET_BET_LIST = 35; //get_bet_list
        /*重置密码*/
        Protocols.CMSG_RESET_PWD = 36; //reset_pwd
        /*设置玩家信息*/
        Protocols.CMSG_SET_INFO = 37; //set_info
        /*获取充值列表*/
        Protocols.CMSG_GET_PAYCHANNEL = 38; //get_paychannel
        /*发起支付*/
        Protocols.CMSG_GOTO_PAY = 39; //goto_pay
        /*获取取款列表*/
        Protocols.CMSG_GET_DRAWCHANNEL = 40; //get_drawchannel
        /*发起取款*/
        Protocols.CMSG_GOTO_DRAW = 41; //goto_draw
        /*绑定支付宝*/
        Protocols.CMSG_BINDALIPAY = 42; //bindalipay
        /*绑定银行卡*/
        Protocols.CMSG_BINDBANK = 43; //bindbank
        /*获取支付列表*/
        Protocols.CMSG_GET_PAYDRAWLIST = 44; //get_paydrawlist
        /*修改取款密码*/
        Protocols.CMSG_CHANGEDRAWPWD = 45; //changedrawpwd
        /*修改登陆密码*/
        Protocols.CMSG_CHANGEPWD = 46; //changepwd
        /*获取玩家信息*/
        Protocols.CMSG_GET_PLAYERINFO = 47; //get_playerinfo
        /*获取玩家最近签到信息*/
        Protocols.CMSG_GET_SIGININ = 48; //get_siginin
        /*玩家签到*/
        Protocols.CMSG_SIGININ = 49; //siginin
        /*获取签到配置信息*/
        Protocols.CMSG_GET_SIGNINCFG = 50; //get_signincfg
        /*获取排行榜*/
        Protocols.CMSG_GET_RANKING_LIST = 51; //get_ranking_list
        /*存入保险箱*/
        Protocols.CMSG_SAVEBOXIN = 52; //saveboxin
        /*保险箱取出*/
        Protocols.CMSG_SAVEBOXOUT = 53; //saveboxout
        /*保险箱存取记录查询*/
        Protocols.CMSG_GET_SAVEBOX_LIST = 54; //get_savebox_list
        /*活动列表*/
        Protocols.CMSG_GET_ACTIVE_LIST = 55; //get_active_list
        /*分享赚钱*/
        Protocols.CMSG_GET_AGENCYREPORT = 56; //get_agencyreport
        /*佣金领取*/
        Protocols.CMSG_GET_RBMONEY = 57; //get_rbmoney
        /*推广明细*/
        Protocols.CMSG_GET_AGENCYLVLIST = 58; //get_agencylvlist
        /*获取转盘配置*/
        Protocols.CMSG_GET_TURNTABLECFG = 59; //get_turntablecfg
        /*获取玩家当前积分余额信息*/
        Protocols.CMSG_GET_TURNTABLEINFO = 60; //get_turntableinfo
        /*积分抽奖*/
        Protocols.CMSG_TURNTABLE = 61; //turntable
        /*积分抽奖获奖记录*/
        Protocols.CMSG_GET_TURNTABLELIST = 62; //get_turntablelist
        /*同步token*/
        Protocols.CMSG_SYNC_TOKEN = 63; //sync_token
        /*我的分享*/
        Protocols.CMSG_GET_MYSHARE = 64; //get_myshare
        /*分享奖励明细*/
        Protocols.CMSG_GET_AGRLASTWEEK = 65; //get_agrlastweek
        /*分享奖励记录*/
        Protocols.CMSG_GET_RBMONEYLOG = 66; //get_rbmoneylog
        /*每日分享*/
        Protocols.CMSG_GET_DAILYSHARE = 67; //get_dailyshare
        /*客户端错误打印*/
        Protocols.CMSG_CLIENT_ERROR = 68; //client_error
        /*金钱日志*/
        Protocols.CMSG_GET_MONEYLOG = 69; //get_moneylog
        /*获取战斗日志*/
        Protocols.CMSG_GET_BATTLE_LOG = 70; //get_battle_log
        /*获取水线*/
        Protocols.CMSG_GET_INVENTORY = 71; //get_inventory
        /*获取随机名字*/
        Protocols.CMSG_GET_RAMDON_NAME = 72; //get_ramdon_name
        /*下发随机名字包*/
        Protocols.SMSG_SEND_RAMDON_NAME = 73; //send_ramdon_name
        /*获取房卡分享信息*/
        Protocols.CMSG_GET_ROOMCARD_SHARE = 74; //get_roomcard_share
        /*优惠活动*/
        Protocols.CMSG_GET_PROMO_LIST = 75; //get_promo_list
        /*跟注-炸金花*/
        Protocols.CMSG_ZHAJINHUA_CALL = 76; //zhajinhua_call
        /*自动跟注-炸金花*/
        Protocols.CMSG_ZHAJINHUA_AUTO_CALL = 77; //zhajinhua_auto_call
        /*加注-炸金花*/
        Protocols.CMSG_ZHAJINHUA_FILLING = 78; //zhajinhua_filling
        /*看牌-炸金花*/
        Protocols.CMSG_ZHAJINHUA_SEE_CARD = 79; //zhajinhua_see_card
        /*放弃-炸金花*/
        Protocols.CMSG_ZHAJINHUA_GIVE_UP = 80; //zhajinhua_give_up
        /*开牌-炸金花*/
        Protocols.CMSG_ZHAJINHUA_COMPARE = 81; //zhajinhua_compare
        /*准备游戏-牛牛*/
        Protocols.CMSG_NIUNIU_READY = 82; //niuniu_ready
        /*游戏操作-牛牛抢庄*/
        Protocols.CMSG_NIUNIU_BANKER = 83; //niuniu_banker
        /*游戏操作-牛牛下注*/
        Protocols.CMSG_NIUNIU_BET = 84; //niuniu_bet
        /*游戏操作-牛牛拼牌*/
        Protocols.CMSG_NIUNIU_PINPAI = 85; //niuniu_pinpai
        /*斗地主-准备*/
        Protocols.CMSG_DDZ_READY = 86; //ddz_ready
        /*斗地主-明牌*/
        Protocols.CMSG_DDZ_MINGPAI = 87; //ddz_mingpai
        /*斗地主-叫地主*/
        Protocols.CMSG_DDZ_JIAODIZHU = 88; //ddz_jiaodizhu
        /*斗地主-不叫地主*/
        Protocols.CMSG_DDZ_JIAODIZHU_PASS = 89; //ddz_jiaodizhu_pass
        /*斗地主-加倍*/
        Protocols.CMSG_DDZ_JIABEI = 90; //ddz_jiabei
        /*斗地主-出牌*/
        Protocols.CMSG_DDZ_PLAY_CARD = 91; //ddz_play_card
        /*斗地主-不出牌*/
        Protocols.CMSG_DDZ_PLAY_CARD_PASS = 92; //ddz_play_card_pass
        /*斗地主-托管*/
        Protocols.CMSG_DDZ_TRUSTEESHIP = 93; //ddz_trusteeship
        /*炸金花-继续游戏*/
        Protocols.CMSG_ZJH_CONTINUE = 94; //zjh_continue
        /*牛牛-继续游戏*/
        Protocols.CMSG_NIUNIU_CONTINUE = 95; //niuniu_continue
        /*炸金花-取消匹配*/
        Protocols.CMSG_ZJH_CANCEL_MATCHING = 96; //zjh_cancel_matching
        /*牛牛-取消匹配*/
        Protocols.CMSG_NIUNIU_CANCEL_MATCHING = 97; //niuniu_cancel_matching
        /*炸金花-离开地图*/
        Protocols.CMSG_ZJH_LEAVE_MAP = 98; //zjh_leave_map
        /*21点-下注*/
        Protocols.CMSG_BLACKJACK_BET = 99; //blackjack_bet
        /*21点-买保险*/
        Protocols.CMSG_BLACKJACK_BUY_INSURANCE = 100; //blackjack_buy_insurance
        /*21点-续押*/
        Protocols.CMSG_BLACKJACK_EXTEND_BET = 101; //blackjack_extend_bet
        /*21点-双倍下注*/
        Protocols.CMSG_BLACKJACK_BET_DOUBLE = 102; //blackjack_bet_double
        /*21点-分牌*/
        Protocols.CMSG_BLACKJACK_PART_CARD = 103; //blackjack_part_card
        /*21点-要牌*/
        Protocols.CMSG_BLACKJACK_ASK_CARD = 104; //blackjack_ask_card
        /*21点-停牌*/
        Protocols.CMSG_BLACKJACK_STOP_CARD = 105; //blackjack_stop_card
        /*21点-下注完成*/
        Protocols.CMSG_BLACKJACK_BET_COMPLETE = 106; //blackjack_bet_complete
        /*通比牛牛-下注*/
        Protocols.CMSG_TBNIUNIU_BET = 107; //tbniuniu_bet
        /*通比牛牛-摊牌*/
        Protocols.CMSG_TBNIUNIU_SHOWCARD = 108; //tbniuniu_showcard
        /*通比牛牛-继续游戏*/
        Protocols.CMSG_TBNIUNIU_CONTINUE = 109; //tbniuniu_continue
        /*通比牛牛-托管*/
        Protocols.CMSG_TBNIUNIU_TRUSTEESHIP = 110; //tbniuniu_trusteeship
        /*游戏操作-百人牛牛下注*/
        Protocols.CMSG_BRNIUNIU_BET = 111; //brniuniu_bet
        /*领取救济金*/
        Protocols.MSG_FISH_GET_DOLE = 112; //fish_get_dole
        /*开火*/
        Protocols.CMSG_START_FIRE = 113; //start_fire
        /*谁在开火用于播其他人动画*/
        Protocols.SMSG_START_FIRE_RESULT = 114; //start_fire_result
        /*打中哪条鱼了由服务端决定有没有中奖*/
        Protocols.CMSG_FIRE_AT = 115; //fire_at
        /*改变炮倍*/
        Protocols.CMSG_CHANGE_FIRE_LV = 116; //change_fire_lv
        /*瞄准*/
        Protocols.CMSG_AIM_AT = 117; //aim_at
        /*切换子弹状态*/
        Protocols.MSG_CHANGE_BULLET_STATE = 118; //change_bullet_state
        /*捕鱼结果*/
        Protocols.MSG_FISH_RESULT = 119; //fish_result
        /*百人牛牛-提前下庄*/
        Protocols.CMSG_BRNIUNIU_XIAZHUANG = 120; //brniuniu_xiazhuang
        /*百人牛牛-申请上庄*/
        Protocols.CMSG_BRNIUNIU_SHANGZHUANG = 121; //brniuniu_shangzhuang
        /*百人牛牛-点击入座*/
        Protocols.CMSG_BRNIUNIU_SEATED = 122; //brniuniu_seated
        /*百人牛牛-获取所有地图信息*/
        Protocols.CMSG_BRNN_GET_MAPINFO = 123; //brnn_get_mapinfo
        /*百人牛牛-返回地图信息*/
        Protocols.SMSG_BRNN_RETURN_MAPINFO = 124; //brnn_return_mapinfo
        /*电鱼结果*/
        Protocols.SMSG_DIANYU_RESULT = 125; //dianyu_result
        /*三公-抢庄*/
        Protocols.CMSG_SG_BANKER = 126; //sg_banker
        /*三公-下注*/
        Protocols.CMSG_SG_BET = 127; //sg_bet
        /*三公-摊牌*/
        Protocols.CMSG_SG_SHOW_CARDS = 128; //sg_show_cards
        /*龙虎斗-下注*/
        Protocols.CMSG_LONGHU_BET = 129; //longhu_bet
        /*龙虎斗-提前下庄*/
        Protocols.CMSG_LONGHU_XIAZHUANG = 130; //longhu_xiazhuang
        /*龙虎斗-申请上庄*/
        Protocols.CMSG_LONGHU_SHANGZHUANG = 131; //longhu_shangzhuang
        /*龙虎斗-点击入座*/
        Protocols.CMSG_LONGHU_SEATED = 132; //longhu_seated
        /*龙虎斗-获取所有地图信息*/
        Protocols.CMSG_LONGHU_GET_MAPINFO = 133; //longhu_get_mapinfo
        /*龙虎斗-返回地图信息*/
        Protocols.SMSG_LONGHU_RETURN_MAPINFO = 134; //longhu_return_mapinfo
        /*二八杠-抢庄*/
        Protocols.CMSG_EBGANG_BANKER = 135; //ebgang_banker
        /*二八杠-下注*/
        Protocols.CMSG_EBGANG_BET = 136; //ebgang_bet
        /*红黑大战-下注*/
        Protocols.CMSG_HHDAZHAN_BET = 137; //hhdazhan_bet
        /*红黑大战-点击入座*/
        Protocols.CMSG_HHDAZHAN_SEATED = 138; //hhdazhan_seated
        /*抢庄牌九-抢庄*/
        Protocols.CMSG_QZPAIJIU_BANKER = 139; //qzpaijiu_banker
        /*抢庄牌九-下注*/
        Protocols.CMSG_QZPAIJIU_BET = 140; //qzpaijiu_bet
        /*水果机-下注*/
        Protocols.CMSG_SHUIGUOJI_BET = 141; //shuiguoji_bet
        /*水果机-开奖*/
        Protocols.CMSG_SHUIGUOJI_LOTTERY = 142; //shuiguoji_lottery
        /*水果机-结算*/
        Protocols.CMSG_SHUIGUOJI_RESULT = 143; //shuiguoji_result
        /*机器人开火*/
        Protocols.CMSG_ROBOT_START_FIRE = 144; //robot_start_fire
        /*打中哪条鱼了由服务端决定有没有中奖*/
        Protocols.CMSG_ROBOT_FIRE_AT = 145; //robot_fire_at
        /*百家乐-下注*/
        Protocols.CMSG_BAIJIALE_BET = 146; //baijiale_bet
        /*百家乐-点击入座*/
        Protocols.CMSG_BAIJIALE_SEATED = 147; //baijiale_seated
        /*百家乐-获取所有地图信息*/
        Protocols.CMSG_BAIJIALE_GET_MAPINFO = 148; //baijiale_get_mapinfo
        /*百家乐-返回地图信息*/
        Protocols.SMSG_BAIJIALE_RETURN_MAPINFO = 149; //baijiale_return_mapinfo
        /*红黑大战-获取所有地图信息*/
        Protocols.CMSG_HHDZ_GET_MAPINFO = 150; //hhdz_get_mapinfo
        /*红黑大战-返回地图信息*/
        Protocols.SMSG_HHDZ_RETURN_MAPINFO = 151; //hhdz_return_mapinfo
        /*龙虎斗-更新大路信息*/
        Protocols.CMSG_LONGHU_UPDATE_ROAD = 152; //longhu_update_road
        /*百家乐-更新大路信息*/
        Protocols.CMSG_BAIJIALE_UPDATE_ROAD = 153; //baijiale_update_road
        /*十三水-出牌*/
        Protocols.CMSG_SHISANSHUI_PLAYING = 154; //shisanshui_playing
        /*游戏操作-奔驰宝马下注*/
        Protocols.CMSG_BENCHIBAOMA_BET = 155; //benchibaoma_bet
        /*奔驰宝马-点击入座*/
        Protocols.CMSG_BENCHIBAOMA_SEATED = 156; //benchibaoma_seated
        /*奔驰宝马-获取所有地图信息*/
        Protocols.CMSG_BENCHIBAOMA_GET_MAPINFO = 157; //benchibaoma_get_mapinfo
        /*奔驰宝马-返回地图信息*/
        Protocols.SMSG_BENCHIBAOMA_RETURN_MAPINFO = 158; //benchibaoma_return_mapinfo
        /*百人德州-下注*/
        Protocols.CMSG_BAIRENDEZHOU_BET = 159; //bairendezhou_bet
        /*百人德州-点击入座*/
        Protocols.CMSG_BAIRENDEZHOU_SEATED = 160; //bairendezhou_seated
        /*百人德州-获取所有地图信息*/
        Protocols.CMSG_BAIRENDEZHOU_GET_MAPINFO = 161; //bairendezhou_get_mapinfo
        /*百人德州-返回地图信息*/
        Protocols.SMSG_BAIRENDEZHOU_RETURN_MAPINFO = 162; //bairendezhou_return_mapinfo
        /*骰宝-下注*/
        Protocols.CMSG_TOUBAO_BET = 163; //toubao_bet
        /*骰宝-点击入座*/
        Protocols.CMSG_TOUBAO_SEATED = 164; //toubao_seated
        /*红黑大战-更新大路信息*/
        Protocols.CMSG_HHDZ_UPDATE_ROAD = 165; //hhdz_update_road
        /*百人德州-更新大路信息*/
        Protocols.CMSG_BAIRENDEZHOU_UPDATE_ROAD = 166; //bairendezhou_update_road
        /*结束当前房间游戏*/
        Protocols.CMSG_END_ROOMCARD_GAME = 167; //end_roomcard_game
        /*德州-跟注*/
        Protocols.CMSG_DEZHOU_BET = 168; //dezhou_bet
        /*德州-加注*/
        Protocols.CMSG_DEZHOU_ADDBET = 169; //dezhou_addbet
        /*德州-过牌*/
        Protocols.CMSG_DEZHOU_PASS = 170; //dezhou_pass
        /*德州-弃牌*/
        Protocols.CMSG_DEZHOU_DISCARD = 171; //dezhou_discard
        /*德州-带钱进房间*/
        Protocols.CMSG_DEZHOU_TAKE_MONEY_TO_ROOM = 172; //dezhou_take_money_to_room
        /*投票是否同意结束房卡游戏*/
        Protocols.CMSG_VOTE_END_ROOMCARD = 173; //vote_end_roomcard
        /*游戏操作-飞禽走兽下注*/
        Protocols.CMSG_ZOO_BET = 174; //zoo_bet
        /*飞禽走兽-点击入座*/
        Protocols.CMSG_ZOO_SEATED = 175; //zoo_seated
        /*飞禽走兽-获取所有地图信息*/
        Protocols.CMSG_ZOO_GET_MAPINFO = 176; //zoo_get_mapinfo
        /*飞禽走兽-返回地图信息*/
        Protocols.SMSG_ZOO_RETURN_MAPINFO = 177; //zoo_return_mapinfo
        /*德州-继续游戏*/
        Protocols.CMSG_DEZHOU_CONTINUE = 178; //dezhou_continue
        /*查询app下载地址*/
        Protocols.CMSG_GET_APP_ADDR = 179; //get_app_addr
        /*跑得快-出牌*/
        Protocols.CMSG_PDK_PLAY_CARD = 180; //pdk_play_card
        /*跑得快-不出牌*/
        Protocols.CMSG_PDK_PASS_CARD = 181; //pdk_pass_card
        /*跑得快-抢关*/
        Protocols.CMSG_PDK_QIANG_GUAN = 182; //pdk_qiang_guan
        /*获取祈福列表*/
        Protocols.CMSG_GET_QIFU_LIST = 183; //get_qifu_list
        /*玩家祈福*/
        Protocols.CMSG_PLAYER_QIFU = 184; //player_qifu
        /*充值确认*/
        Protocols.CMSG_RECHARGE_CONFIRM = 185; //recharge_confirm
        /*登录*/
        Protocols.CMSG_LOGIN_INVITE = 186; //login_invite
        /*跑得快-托管*/
        Protocols.CMSG_PDK_TRUSTEESHIP = 187; //pdk_trusteeship
        /*十三水-取消特殊牌*/
        Protocols.CMSG_SSS_CANCEL_SPECIAL = 188; //sss_cancel_special
        /*四川麻将-换牌*/
        Protocols.CMSG_SCMJ_EXCHANGE = 189; //scmj_exchange
        /*四川麻将-定缺*/
        Protocols.CMSG_SCMJ_SET_LACK = 190; //scmj_set_lack
        /*四川麻将-打牌*/
        Protocols.CMSG_SCMJ_PLAY_CARD = 191; //scmj_play_card
        /*四川麻将-胡*/
        Protocols.CMSG_SCMJ_HU = 192; //scmj_hu
        /*四川麻将-杠*/
        Protocols.CMSG_SCMJ_GANG = 193; //scmj_gang
        /*四川麻将-碰*/
        Protocols.CMSG_SCMJ_PENG = 194; //scmj_peng
        /*四川麻将-过*/
        Protocols.CMSG_SCMJ_PASS = 195; //scmj_pass
        /*代理用户*/
        Protocols.CMSG_GET_DAILI_YONGHU = 196; //get_daili_yonghu
        /*登录*/
        Protocols.CMSG_LOGIN_PARAMETER = 197; //login_parameter
        /*获取vip等级列表*/
        Protocols.CMSG_GET_VIP_LIST = 198; //get_vip_list
        /*vip奖励领取*/
        Protocols.CMSG_GET_VIP_AWARD = 199; //get_vip_award
        /*游戏操作-俄罗斯轮盘-下注*/
        Protocols.CMSG_ELUOSILUNPAN_BET = 200; //eluosilunpan_bet
        /*俄罗斯轮盘-点击入座*/
        Protocols.CMSG_ELUOSILUNPAN_SEATED = 201; //eluosilunpan_seated
        /*俄罗斯轮盘-获取所有地图信息*/
        Protocols.CMSG_ELUOSILUNPAN_GET_MAPINFO = 202; //eluosilunpan_get_mapinfo
        /*俄罗斯轮盘-返回地图信息*/
        Protocols.SMSG_ELUOSILUNPAN_RETURN_MAPINFO = 203; //eluosilunpan_return_mapinfo
        /*玩家签到*/
        Protocols.CMSG_SIGNIN = 204; //signin
        /*每日分享*/
        Protocols.CMSG_NEW_DAILYSHARE = 205; //new_dailyshare
        /*余额宝存入*/
        Protocols.CMSG_SAVE_YUEBAO = 206; //save_yuebao
        /*余额宝取出*/
        Protocols.CMSG_TAKE_YUEBAO = 207; //take_yuebao
        /*玩家祈福*/
        Protocols.CMSG_PLAYER_QIFU_NEW = 208; //player_qifu_new
        /*vip奖励领取*/
        Protocols.CMSG_RECEIVE_VIP_AWARD = 209; //receive_vip_award
        /*积分抽奖*/
        Protocols.CMSG_SCORE_LUCKY_DRAW = 210; //score_lucky_draw
        /*绑定赠送*/
        Protocols.CMSG_GET_BIND_REWARD = 211; //get_bind_reward
        /*佣金领取*/
        Protocols.CMSG_GET_COMMISSION = 212; //get_commission
        /**/
        Protocols.CMSG_FREE_SYTLE_SYNC = 213; //free_sytle_sync
        /*校验登录验证码*/
        Protocols.CMSG_CHECK_LOGIN_VF = 214; //check_login_vf
        /*设置取款密码*/
        Protocols.CMSG_SET_MONEY_PWD = 215; //set_money_pwd
        /*首充领取*/
        Protocols.CMSG_GET_FIRST_PAY = 216; //get_first_pay
        /*设置人物信息*/
        Protocols.CMSG_SET_ROLE_INFO = 217; //set_role_info
        return Protocols;
    }(core.net.Network));
    hanlder.Protocols = Protocols;
    var both_null_action = /** @class */ (function () {
        function both_null_action() {
            this.optcode = 0;
            this.optname = "onNull_action";
        }
        return both_null_action;
    }());
    hanlder.both_null_action = both_null_action;
    var both_ping_pong = /** @class */ (function () {
        function both_ping_pong() {
            this.optcode = 0;
            this.optname = "onPing_pong";
        }
        return both_ping_pong;
    }());
    hanlder.both_ping_pong = both_ping_pong;
    var c2s_get_session = /** @class */ (function () {
        function c2s_get_session() {
            this.optcode = 0;
            this.optname = "onGet_session";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_session.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.sessionkey = bytes.readString();
            //签名
            self.sign = bytes.readString();
            //版本
            self.version = bytes.readString();
        };
        return c2s_get_session;
    }());
    hanlder.c2s_get_session = c2s_get_session;
    var c2s_forced_into = /** @class */ (function () {
        function c2s_forced_into() {
            this.optcode = 0;
            this.optname = "onForced_into";
        }
        return c2s_forced_into;
    }());
    hanlder.c2s_forced_into = c2s_forced_into;
    var c2s_gm_command = /** @class */ (function () {
        function c2s_gm_command() {
            this.optcode = 0;
            this.optname = "onGm_command";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_gm_command.read = function (self, bytes) {
            var parmLen;
            var i;
            //字符串string
            self.gm_commands = bytes.readString();
        };
        return c2s_gm_command;
    }());
    hanlder.c2s_gm_command = c2s_gm_command;
    var s2c_operation_failed = /** @class */ (function () {
        function s2c_operation_failed() {
            this.optcode = 0;
            this.optname = "onOperation_failed";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_operation_failed.read = function (self, bytes) {
            var parmLen;
            var i;
            //操作类型
            self.type = bytes.readUint16();
            //失败原因
            self.reason = bytes.readUint16();
            //预留参数
            self.data = bytes.readString();
        };
        return s2c_operation_failed;
    }());
    hanlder.s2c_operation_failed = s2c_operation_failed;
    var both_sync_mstime = /** @class */ (function () {
        function both_sync_mstime() {
            this.optcode = 0;
            this.optname = "onSync_mstime";
        }
        /**
        从输入二进制流中读取结构体
        */
        both_sync_mstime.read = function (self, bytes) {
            var parmLen;
            var i;
            //服务器运行的毫秒数
            self.mstime_now = bytes.readUint32();
            //自然时间
            self.time_now = bytes.readUint32();
            //自然时间的服务器启动时间
            self.open_time = bytes.readUint32();
        };
        return both_sync_mstime;
    }());
    hanlder.both_sync_mstime = both_sync_mstime;
    var s2c_ud_object = /** @class */ (function () {
        function s2c_ud_object() {
            this.optcode = 0;
            this.optname = "onUd_object";
        }
        return s2c_ud_object;
    }());
    hanlder.s2c_ud_object = s2c_ud_object;
    var c2s_ud_control = /** @class */ (function () {
        function c2s_ud_control() {
            this.optcode = 0;
            this.optname = "onUd_control";
        }
        return c2s_ud_control;
    }());
    hanlder.c2s_ud_control = c2s_ud_control;
    var s2c_ud_control_result = /** @class */ (function () {
        function s2c_ud_control_result() {
            this.optcode = 0;
            this.optname = "onUd_control_result";
        }
        return s2c_ud_control_result;
    }());
    hanlder.s2c_ud_control_result = s2c_ud_control_result;
    var s2c_grid_update_data = /** @class */ (function () {
        function s2c_grid_update_data() {
            this.optcode = 0;
            this.optname = "onGrid_update_data";
        }
        return s2c_grid_update_data;
    }());
    hanlder.s2c_grid_update_data = s2c_grid_update_data;
    var c2s_get_login_vf = /** @class */ (function () {
        function c2s_get_login_vf() {
            this.optcode = 0;
            this.optname = "onGet_login_vf";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_login_vf.read = function (self, bytes) {
            var parmLen;
            var i;
            //运营商
            self.server_name = bytes.readString();
            //手机号
            self.mobile = bytes.readString();
        };
        return c2s_get_login_vf;
    }());
    hanlder.c2s_get_login_vf = c2s_get_login_vf;
    var c2s_login = /** @class */ (function () {
        function c2s_login() {
            this.optcode = 0;
            this.optname = "onLogin";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_login.read = function (self, bytes) {
            var parmLen;
            var i;
            //登录类型
            self.typ = bytes.readUint8();
            //服务名
            self.server_name = bytes.readString();
            //账号
            self.account = bytes.readString();
            //密码
            self.pwd = bytes.readString();
        };
        return c2s_login;
    }());
    hanlder.c2s_login = c2s_login;
    var c2s_logout = /** @class */ (function () {
        function c2s_logout() {
            this.optcode = 0;
            this.optname = "onLogout";
        }
        return c2s_logout;
    }());
    hanlder.c2s_logout = c2s_logout;
    var c2s_chat_send = /** @class */ (function () {
        function c2s_chat_send() {
            this.optcode = 0;
            this.optname = "onChat_send";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_chat_send.read = function (self, bytes) {
            var parmLen;
            var i;
            //类型
            self.type = bytes.readUint8();
            //内容
            self.content = bytes.readString();
        };
        return c2s_chat_send;
    }());
    hanlder.c2s_chat_send = c2s_chat_send;
    var s2c_chat_info = /** @class */ (function () {
        function s2c_chat_info() {
            this.optcode = 0;
            this.optname = "onChat_info";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_chat_info.read = function (self, bytes) {
            var parmLen;
            var i;
            //类型
            self.type = bytes.readUint8();
            //guid
            self.guid = bytes.readString();
            //名字
            self.name = bytes.readString();
            //头像
            self.head = bytes.readString();
            //性别
            self.sex = bytes.readUint8();
            //月卡
            self.yueka = bytes.readUint8();
            //内容
            self.content = bytes.readString();
        };
        return s2c_chat_info;
    }());
    hanlder.s2c_chat_info = s2c_chat_info;
    var c2s_create_room = /** @class */ (function () {
        function c2s_create_room() {
            this.optcode = 0;
            this.optname = "onCreate_room";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_create_room.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.id = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
            //局数
            self.game_number = bytes.readUint32();
            //支付类型1:房主2:AA
            self.pay_typ = bytes.readUint32();
            //额外的参数
            self.extra = bytes.readString();
        };
        return c2s_create_room;
    }());
    hanlder.c2s_create_room = c2s_create_room;
    var c2s_join_room = /** @class */ (function () {
        function c2s_join_room() {
            this.optcode = 0;
            this.optname = "onJoin_room";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_join_room.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.id = bytes.readString();
            //房卡id
            self.card_id = bytes.readString();
        };
        return c2s_join_room;
    }());
    hanlder.c2s_join_room = c2s_join_room;
    var c2s_match_game = /** @class */ (function () {
        function c2s_match_game() {
            this.optcode = 0;
            this.optname = "onMatch_game";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_match_game.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.id = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
        };
        return c2s_match_game;
    }());
    hanlder.c2s_match_game = c2s_match_game;
    var c2s_cancel_match = /** @class */ (function () {
        function c2s_cancel_match() {
            this.optcode = 0;
            this.optname = "onCancel_match";
        }
        return c2s_cancel_match;
    }());
    hanlder.c2s_cancel_match = c2s_cancel_match;
    var c2s_leave_game = /** @class */ (function () {
        function c2s_leave_game() {
            this.optcode = 0;
            this.optname = "onLeave_game";
        }
        return c2s_leave_game;
    }());
    hanlder.c2s_leave_game = c2s_leave_game;
    var s2c_join_game_result = /** @class */ (function () {
        function s2c_join_game_result() {
            this.optcode = 0;
            this.optname = "onJoin_game_result";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_join_game_result.read = function (self, bytes) {
            var parmLen;
            var i;
            //主玩家unit
            self.guid = bytes.readString();
            //游戏id
            self.mapid = bytes.readString();
        };
        return s2c_join_game_result;
    }());
    hanlder.s2c_join_game_result = s2c_join_game_result;
    var c2s_switch_seat = /** @class */ (function () {
        function c2s_switch_seat() {
            this.optcode = 0;
            this.optname = "onSwitch_seat";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_switch_seat.read = function (self, bytes) {
            var parmLen;
            var i;
            //去哪个座位
            self.to_index = bytes.readUint8();
        };
        return c2s_switch_seat;
    }());
    hanlder.c2s_switch_seat = c2s_switch_seat;
    var c2s_sync_player_info = /** @class */ (function () {
        function c2s_sync_player_info() {
            this.optcode = 0;
            this.optname = "onSync_player_info";
        }
        return c2s_sync_player_info;
    }());
    hanlder.c2s_sync_player_info = c2s_sync_player_info;
    var c2s_sync_money = /** @class */ (function () {
        function c2s_sync_money() {
            this.optcode = 0;
            this.optname = "onSync_money";
        }
        return c2s_sync_money;
    }());
    hanlder.c2s_sync_money = c2s_sync_money;
    var c2s_bind = /** @class */ (function () {
        function c2s_bind() {
            this.optcode = 0;
            this.optname = "onBind";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_bind.read = function (self, bytes) {
            var parmLen;
            var i;
            //玩家账号
            self.account = bytes.readString();
            //绑定类型(
            self.type = bytes.readUint16();
            //绑定微信时需要该参数
            self.js_code = bytes.readString();
            //绑定账号时需要该参数
            self.username = bytes.readString();
            //绑定账号时需要该参数
            self.pwd1 = bytes.readString();
            //绑定账号时需要该参数
            self.pwd2 = bytes.readString();
            //绑定手机时需要该参数
            self.mobile = bytes.readString();
            //绑定手机时需要该参数
            self.bindcode = bytes.readString();
            //非必填 0网站1安卓2苹果
            self.device = bytes.readUint16();
            //非
            self.invitor = bytes.readString();
        };
        return c2s_bind;
    }());
    hanlder.c2s_bind = c2s_bind;
    var c2s_get_mails = /** @class */ (function () {
        function c2s_get_mails() {
            this.optcode = 0;
            this.optname = "onGet_mails";
        }
        return c2s_get_mails;
    }());
    hanlder.c2s_get_mails = c2s_get_mails;
    var s2c_send_notices = /** @class */ (function () {
        function s2c_send_notices() {
            this.optcode = 0;
            this.optname = "onSend_notices";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_send_notices.read = function (self, bytes) {
            var parmLen;
            var i;
            //公告内容
            self.content = bytes.readString();
            //类型
            self.type = bytes.readUint8();
        };
        return s2c_send_notices;
    }());
    hanlder.s2c_send_notices = s2c_send_notices;
    var c2s_read_mail = /** @class */ (function () {
        function c2s_read_mail() {
            this.optcode = 0;
            this.optname = "onRead_mail";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_read_mail.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.id = bytes.readInt32();
        };
        return c2s_read_mail;
    }());
    hanlder.c2s_read_mail = c2s_read_mail;
    var c2s_del_mail = /** @class */ (function () {
        function c2s_del_mail() {
            this.optcode = 0;
            this.optname = "onDel_mail";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_del_mail.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.id = bytes.readInt32();
        };
        return c2s_del_mail;
    }());
    hanlder.c2s_del_mail = c2s_del_mail;
    var c2s_sync_web_time = /** @class */ (function () {
        function c2s_sync_web_time() {
            this.optcode = 0;
            this.optname = "onSync_web_time";
        }
        return c2s_sync_web_time;
    }());
    hanlder.c2s_sync_web_time = c2s_sync_web_time;
    var c2s_get_bindvf = /** @class */ (function () {
        function c2s_get_bindvf() {
            this.optcode = 0;
            this.optname = "onGet_bindvf";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_bindvf.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.mobile = bytes.readString();
        };
        return c2s_get_bindvf;
    }());
    hanlder.c2s_get_bindvf = c2s_get_bindvf;
    var c2s_start_roomcard_game = /** @class */ (function () {
        function c2s_start_roomcard_game() {
            this.optcode = 0;
            this.optname = "onStart_roomcard_game";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_start_roomcard_game.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.mapid = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
            //主玩家unit
            self.guid = bytes.readString();
            //房卡id
            self.card_id = bytes.readString();
        };
        return c2s_start_roomcard_game;
    }());
    hanlder.c2s_start_roomcard_game = c2s_start_roomcard_game;
    var c2s_get_service = /** @class */ (function () {
        function c2s_get_service() {
            this.optcode = 0;
            this.optname = "onGet_service";
        }
        return c2s_get_service;
    }());
    hanlder.c2s_get_service = c2s_get_service;
    var c2s_get_reset_code = /** @class */ (function () {
        function c2s_get_reset_code() {
            this.optcode = 0;
            this.optname = "onGet_reset_code";
        }
        return c2s_get_reset_code;
    }());
    hanlder.c2s_get_reset_code = c2s_get_reset_code;
    var c2s_get_bet_list = /** @class */ (function () {
        function c2s_get_bet_list() {
            this.optcode = 0;
            this.optname = "onGet_bet_list";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_bet_list.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.page_count = bytes.readInt32();
            //
            self.per_count = bytes.readInt32();
            //
            self.time = bytes.readInt32();
            //游戏id
            self.game_id = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
            //
            self.index = bytes.readInt32();
        };
        return c2s_get_bet_list;
    }());
    hanlder.c2s_get_bet_list = c2s_get_bet_list;
    var c2s_reset_pwd = /** @class */ (function () {
        function c2s_reset_pwd() {
            this.optcode = 0;
            this.optname = "onReset_pwd";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_reset_pwd.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.vfcode = bytes.readString();
            //
            self.pwd1 = bytes.readString();
            //
            self.pwd2 = bytes.readString();
        };
        return c2s_reset_pwd;
    }());
    hanlder.c2s_reset_pwd = c2s_reset_pwd;
    var c2s_set_info = /** @class */ (function () {
        function c2s_set_info() {
            this.optcode = 0;
            this.optname = "onSet_info";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_set_info.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.headimg = bytes.readString();
            //
            self.sex = bytes.readString();
            //
            self.device_token = bytes.readString();
            //
            self.device_type = bytes.readString();
            //
            self.isuninstall = bytes.readString();
            //
            self.nickname = bytes.readString();
        };
        return c2s_set_info;
    }());
    hanlder.c2s_set_info = c2s_set_info;
    var c2s_get_paychannel = /** @class */ (function () {
        function c2s_get_paychannel() {
            this.optcode = 0;
            this.optname = "onGet_paychannel";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_paychannel.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.paytype = bytes.readString();
        };
        return c2s_get_paychannel;
    }());
    hanlder.c2s_get_paychannel = c2s_get_paychannel;
    var c2s_goto_pay = /** @class */ (function () {
        function c2s_goto_pay() {
            this.optcode = 0;
            this.optname = "onGoto_pay";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_goto_pay.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readString();
            //
            self.pid = bytes.readUint16();
            //
            self.paytype = bytes.readString();
        };
        return c2s_goto_pay;
    }());
    hanlder.c2s_goto_pay = c2s_goto_pay;
    var c2s_get_drawchannel = /** @class */ (function () {
        function c2s_get_drawchannel() {
            this.optcode = 0;
            this.optname = "onGet_drawchannel";
        }
        return c2s_get_drawchannel;
    }());
    hanlder.c2s_get_drawchannel = c2s_get_drawchannel;
    var c2s_goto_draw = /** @class */ (function () {
        function c2s_goto_draw() {
            this.optcode = 0;
            this.optname = "onGoto_draw";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_goto_draw.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readString();
            //
            self.bindtype = bytes.readString();
            //
            self.drawpwd = bytes.readString();
        };
        return c2s_goto_draw;
    }());
    hanlder.c2s_goto_draw = c2s_goto_draw;
    var c2s_bindalipay = /** @class */ (function () {
        function c2s_bindalipay() {
            this.optcode = 0;
            this.optname = "onBindalipay";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_bindalipay.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.alipayname = bytes.readString();
            //
            self.drawpwd = bytes.readString();
            //
            self.realname = bytes.readString();
        };
        return c2s_bindalipay;
    }());
    hanlder.c2s_bindalipay = c2s_bindalipay;
    var c2s_bindbank = /** @class */ (function () {
        function c2s_bindbank() {
            this.optcode = 0;
            this.optname = "onBindbank";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_bindbank.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.banknum = bytes.readString();
            //
            self.drawpwd = bytes.readString();
            //
            self.banktype = bytes.readString();
            //
            self.bankaddr = bytes.readString();
            //
            self.realname = bytes.readString();
        };
        return c2s_bindbank;
    }());
    hanlder.c2s_bindbank = c2s_bindbank;
    var c2s_get_paydrawlist = /** @class */ (function () {
        function c2s_get_paydrawlist() {
            this.optcode = 0;
            this.optname = "onGet_paydrawlist";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_paydrawlist.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.page_count = bytes.readInt32();
            //
            self.per_count = bytes.readInt32();
            //
            self.dc = bytes.readInt32();
        };
        return c2s_get_paydrawlist;
    }());
    hanlder.c2s_get_paydrawlist = c2s_get_paydrawlist;
    var c2s_changedrawpwd = /** @class */ (function () {
        function c2s_changedrawpwd() {
            this.optcode = 0;
            this.optname = "onChangedrawpwd";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_changedrawpwd.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.oldpwd = bytes.readString();
            //
            self.pwd1 = bytes.readString();
            //
            self.pwd2 = bytes.readString();
        };
        return c2s_changedrawpwd;
    }());
    hanlder.c2s_changedrawpwd = c2s_changedrawpwd;
    var c2s_changepwd = /** @class */ (function () {
        function c2s_changepwd() {
            this.optcode = 0;
            this.optname = "onChangepwd";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_changepwd.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.oldpwd = bytes.readString();
            //
            self.pwd1 = bytes.readString();
            //
            self.pwd2 = bytes.readString();
        };
        return c2s_changepwd;
    }());
    hanlder.c2s_changepwd = c2s_changepwd;
    var c2s_get_playerinfo = /** @class */ (function () {
        function c2s_get_playerinfo() {
            this.optcode = 0;
            this.optname = "onGet_playerinfo";
        }
        return c2s_get_playerinfo;
    }());
    hanlder.c2s_get_playerinfo = c2s_get_playerinfo;
    var c2s_get_siginin = /** @class */ (function () {
        function c2s_get_siginin() {
            this.optcode = 0;
            this.optname = "onGet_siginin";
        }
        return c2s_get_siginin;
    }());
    hanlder.c2s_get_siginin = c2s_get_siginin;
    var c2s_siginin = /** @class */ (function () {
        function c2s_siginin() {
            this.optcode = 0;
            this.optname = "onSiginin";
        }
        return c2s_siginin;
    }());
    hanlder.c2s_siginin = c2s_siginin;
    var c2s_get_signincfg = /** @class */ (function () {
        function c2s_get_signincfg() {
            this.optcode = 0;
            this.optname = "onGet_signincfg";
        }
        return c2s_get_signincfg;
    }());
    hanlder.c2s_get_signincfg = c2s_get_signincfg;
    var c2s_get_ranking_list = /** @class */ (function () {
        function c2s_get_ranking_list() {
            this.optcode = 0;
            this.optname = "onGet_ranking_list";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_ranking_list.read = function (self, bytes) {
            var parmLen;
            var i;
            //排行榜类型
            self.type = bytes.readInt32();
        };
        return c2s_get_ranking_list;
    }());
    hanlder.c2s_get_ranking_list = c2s_get_ranking_list;
    var c2s_saveboxin = /** @class */ (function () {
        function c2s_saveboxin() {
            this.optcode = 0;
            this.optname = "onSaveboxin";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_saveboxin.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readFloat();
        };
        return c2s_saveboxin;
    }());
    hanlder.c2s_saveboxin = c2s_saveboxin;
    var c2s_saveboxout = /** @class */ (function () {
        function c2s_saveboxout() {
            this.optcode = 0;
            this.optname = "onSaveboxout";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_saveboxout.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readFloat();
            //
            self.drawpwd = bytes.readString();
        };
        return c2s_saveboxout;
    }());
    hanlder.c2s_saveboxout = c2s_saveboxout;
    var c2s_get_savebox_list = /** @class */ (function () {
        function c2s_get_savebox_list() {
            this.optcode = 0;
            this.optname = "onGet_savebox_list";
        }
        return c2s_get_savebox_list;
    }());
    hanlder.c2s_get_savebox_list = c2s_get_savebox_list;
    var c2s_get_active_list = /** @class */ (function () {
        function c2s_get_active_list() {
            this.optcode = 0;
            this.optname = "onGet_active_list";
        }
        return c2s_get_active_list;
    }());
    hanlder.c2s_get_active_list = c2s_get_active_list;
    var c2s_get_agencyreport = /** @class */ (function () {
        function c2s_get_agencyreport() {
            this.optcode = 0;
            this.optname = "onGet_agencyreport";
        }
        return c2s_get_agencyreport;
    }());
    hanlder.c2s_get_agencyreport = c2s_get_agencyreport;
    var c2s_get_rbmoney = /** @class */ (function () {
        function c2s_get_rbmoney() {
            this.optcode = 0;
            this.optname = "onGet_rbmoney";
        }
        return c2s_get_rbmoney;
    }());
    hanlder.c2s_get_rbmoney = c2s_get_rbmoney;
    var c2s_get_agencylvlist = /** @class */ (function () {
        function c2s_get_agencylvlist() {
            this.optcode = 0;
            this.optname = "onGet_agencylvlist";
        }
        return c2s_get_agencylvlist;
    }());
    hanlder.c2s_get_agencylvlist = c2s_get_agencylvlist;
    var c2s_get_turntablecfg = /** @class */ (function () {
        function c2s_get_turntablecfg() {
            this.optcode = 0;
            this.optname = "onGet_turntablecfg";
        }
        return c2s_get_turntablecfg;
    }());
    hanlder.c2s_get_turntablecfg = c2s_get_turntablecfg;
    var c2s_get_turntableinfo = /** @class */ (function () {
        function c2s_get_turntableinfo() {
            this.optcode = 0;
            this.optname = "onGet_turntableinfo";
        }
        return c2s_get_turntableinfo;
    }());
    hanlder.c2s_get_turntableinfo = c2s_get_turntableinfo;
    var c2s_turntable = /** @class */ (function () {
        function c2s_turntable() {
            this.optcode = 0;
            this.optname = "onTurntable";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_turntable.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.type_id = bytes.readUint8();
        };
        return c2s_turntable;
    }());
    hanlder.c2s_turntable = c2s_turntable;
    var c2s_get_turntablelist = /** @class */ (function () {
        function c2s_get_turntablelist() {
            this.optcode = 0;
            this.optname = "onGet_turntablelist";
        }
        return c2s_get_turntablelist;
    }());
    hanlder.c2s_get_turntablelist = c2s_get_turntablelist;
    var c2s_sync_token = /** @class */ (function () {
        function c2s_sync_token() {
            this.optcode = 0;
            this.optname = "onSync_token";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_sync_token.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.token = bytes.readString();
        };
        return c2s_sync_token;
    }());
    hanlder.c2s_sync_token = c2s_sync_token;
    var c2s_get_myshare = /** @class */ (function () {
        function c2s_get_myshare() {
            this.optcode = 0;
            this.optname = "onGet_myshare";
        }
        return c2s_get_myshare;
    }());
    hanlder.c2s_get_myshare = c2s_get_myshare;
    var c2s_get_agrlastweek = /** @class */ (function () {
        function c2s_get_agrlastweek() {
            this.optcode = 0;
            this.optname = "onGet_agrlastweek";
        }
        return c2s_get_agrlastweek;
    }());
    hanlder.c2s_get_agrlastweek = c2s_get_agrlastweek;
    var c2s_get_rbmoneylog = /** @class */ (function () {
        function c2s_get_rbmoneylog() {
            this.optcode = 0;
            this.optname = "onGet_rbmoneylog";
        }
        return c2s_get_rbmoneylog;
    }());
    hanlder.c2s_get_rbmoneylog = c2s_get_rbmoneylog;
    var c2s_get_dailyshare = /** @class */ (function () {
        function c2s_get_dailyshare() {
            this.optcode = 0;
            this.optname = "onGet_dailyshare";
        }
        return c2s_get_dailyshare;
    }());
    hanlder.c2s_get_dailyshare = c2s_get_dailyshare;
    var c2s_client_error = /** @class */ (function () {
        function c2s_client_error() {
            this.optcode = 0;
            this.optname = "onClient_error";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_client_error.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.err = bytes.readString();
        };
        return c2s_client_error;
    }());
    hanlder.c2s_client_error = c2s_client_error;
    var c2s_get_moneylog = /** @class */ (function () {
        function c2s_get_moneylog() {
            this.optcode = 0;
            this.optname = "onGet_moneylog";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_moneylog.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.page_count = bytes.readInt32();
            //
            self.per_count = bytes.readInt32();
            //
            self.time = bytes.readInt32();
            //
            self.index = bytes.readInt32();
        };
        return c2s_get_moneylog;
    }());
    hanlder.c2s_get_moneylog = c2s_get_moneylog;
    var c2s_get_battle_log = /** @class */ (function () {
        function c2s_get_battle_log() {
            this.optcode = 0;
            this.optname = "onGet_battle_log";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_battle_log.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.battle_id = bytes.readString();
            //游戏id
            self.game_id = bytes.readString();
            //
            self.time = bytes.readInt32();
        };
        return c2s_get_battle_log;
    }());
    hanlder.c2s_get_battle_log = c2s_get_battle_log;
    var c2s_get_inventory = /** @class */ (function () {
        function c2s_get_inventory() {
            this.optcode = 0;
            this.optname = "onGet_inventory";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_inventory.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.game_id = bytes.readString();
        };
        return c2s_get_inventory;
    }());
    hanlder.c2s_get_inventory = c2s_get_inventory;
    var c2s_get_ramdon_name = /** @class */ (function () {
        function c2s_get_ramdon_name() {
            this.optcode = 0;
            this.optname = "onGet_ramdon_name";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_ramdon_name.read = function (self, bytes) {
            var parmLen;
            var i;
            //数量
            self.num = bytes.readInt32();
            //时间
            self.time = bytes.readInt32();
        };
        return c2s_get_ramdon_name;
    }());
    hanlder.c2s_get_ramdon_name = c2s_get_ramdon_name;
    var s2c_send_ramdon_name = /** @class */ (function () {
        function s2c_send_ramdon_name() {
            this.optcode = 0;
            this.optname = "onSend_ramdon_name";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_send_ramdon_name.read = function (self, bytes) {
            var parmLen;
            var i;
            //名字包
            self.str = bytes.readString();
        };
        return s2c_send_ramdon_name;
    }());
    hanlder.s2c_send_ramdon_name = s2c_send_ramdon_name;
    var c2s_get_roomcard_share = /** @class */ (function () {
        function c2s_get_roomcard_share() {
            this.optcode = 0;
            this.optname = "onGet_roomcard_share";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_roomcard_share.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.game_id = bytes.readString();
        };
        return c2s_get_roomcard_share;
    }());
    hanlder.c2s_get_roomcard_share = c2s_get_roomcard_share;
    var c2s_get_promo_list = /** @class */ (function () {
        function c2s_get_promo_list() {
            this.optcode = 0;
            this.optname = "onGet_promo_list";
        }
        return c2s_get_promo_list;
    }());
    hanlder.c2s_get_promo_list = c2s_get_promo_list;
    var c2s_zhajinhua_call = /** @class */ (function () {
        function c2s_zhajinhua_call() {
            this.optcode = 0;
            this.optname = "onZhajinhua_call";
        }
        return c2s_zhajinhua_call;
    }());
    hanlder.c2s_zhajinhua_call = c2s_zhajinhua_call;
    var c2s_zhajinhua_auto_call = /** @class */ (function () {
        function c2s_zhajinhua_auto_call() {
            this.optcode = 0;
            this.optname = "onZhajinhua_auto_call";
        }
        return c2s_zhajinhua_auto_call;
    }());
    hanlder.c2s_zhajinhua_auto_call = c2s_zhajinhua_auto_call;
    var c2s_zhajinhua_filling = /** @class */ (function () {
        function c2s_zhajinhua_filling() {
            this.optcode = 0;
            this.optname = "onZhajinhua_filling";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_zhajinhua_filling.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注数额
            self.num = bytes.readUint8();
        };
        return c2s_zhajinhua_filling;
    }());
    hanlder.c2s_zhajinhua_filling = c2s_zhajinhua_filling;
    var c2s_zhajinhua_see_card = /** @class */ (function () {
        function c2s_zhajinhua_see_card() {
            this.optcode = 0;
            this.optname = "onZhajinhua_see_card";
        }
        return c2s_zhajinhua_see_card;
    }());
    hanlder.c2s_zhajinhua_see_card = c2s_zhajinhua_see_card;
    var c2s_zhajinhua_give_up = /** @class */ (function () {
        function c2s_zhajinhua_give_up() {
            this.optcode = 0;
            this.optname = "onZhajinhua_give_up";
        }
        return c2s_zhajinhua_give_up;
    }());
    hanlder.c2s_zhajinhua_give_up = c2s_zhajinhua_give_up;
    var c2s_zhajinhua_compare = /** @class */ (function () {
        function c2s_zhajinhua_compare() {
            this.optcode = 0;
            this.optname = "onZhajinhua_compare";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_zhajinhua_compare.read = function (self, bytes) {
            var parmLen;
            var i;
            //目标玩家位置
            self.pos = bytes.readUint8();
        };
        return c2s_zhajinhua_compare;
    }());
    hanlder.c2s_zhajinhua_compare = c2s_zhajinhua_compare;
    var c2s_niuniu_ready = /** @class */ (function () {
        function c2s_niuniu_ready() {
            this.optcode = 0;
            this.optname = "onNiuniu_ready";
        }
        return c2s_niuniu_ready;
    }());
    hanlder.c2s_niuniu_ready = c2s_niuniu_ready;
    var c2s_niuniu_banker = /** @class */ (function () {
        function c2s_niuniu_banker() {
            this.optcode = 0;
            this.optname = "onNiuniu_banker";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_niuniu_banker.read = function (self, bytes) {
            var parmLen;
            var i;
            //抢庄倍率
            self.num = bytes.readUint8();
        };
        return c2s_niuniu_banker;
    }());
    hanlder.c2s_niuniu_banker = c2s_niuniu_banker;
    var c2s_niuniu_bet = /** @class */ (function () {
        function c2s_niuniu_bet() {
            this.optcode = 0;
            this.optname = "onNiuniu_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_niuniu_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍率
            self.num = bytes.readUint8();
        };
        return c2s_niuniu_bet;
    }());
    hanlder.c2s_niuniu_bet = c2s_niuniu_bet;
    var c2s_niuniu_pinpai = /** @class */ (function () {
        function c2s_niuniu_pinpai() {
            this.optcode = 0;
            this.optname = "onNiuniu_pinpai";
        }
        return c2s_niuniu_pinpai;
    }());
    hanlder.c2s_niuniu_pinpai = c2s_niuniu_pinpai;
    var c2s_ddz_ready = /** @class */ (function () {
        function c2s_ddz_ready() {
            this.optcode = 0;
            this.optname = "onDdz_ready";
        }
        return c2s_ddz_ready;
    }());
    hanlder.c2s_ddz_ready = c2s_ddz_ready;
    var c2s_ddz_mingpai = /** @class */ (function () {
        function c2s_ddz_mingpai() {
            this.optcode = 0;
            this.optname = "onDdz_mingpai";
        }
        return c2s_ddz_mingpai;
    }());
    hanlder.c2s_ddz_mingpai = c2s_ddz_mingpai;
    var c2s_ddz_jiaodizhu = /** @class */ (function () {
        function c2s_ddz_jiaodizhu() {
            this.optcode = 0;
            this.optname = "onDdz_jiaodizhu";
        }
        return c2s_ddz_jiaodizhu;
    }());
    hanlder.c2s_ddz_jiaodizhu = c2s_ddz_jiaodizhu;
    var c2s_ddz_jiaodizhu_pass = /** @class */ (function () {
        function c2s_ddz_jiaodizhu_pass() {
            this.optcode = 0;
            this.optname = "onDdz_jiaodizhu_pass";
        }
        return c2s_ddz_jiaodizhu_pass;
    }());
    hanlder.c2s_ddz_jiaodizhu_pass = c2s_ddz_jiaodizhu_pass;
    var c2s_ddz_jiabei = /** @class */ (function () {
        function c2s_ddz_jiabei() {
            this.optcode = 0;
            this.optname = "onDdz_jiabei";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_ddz_jiabei.read = function (self, bytes) {
            var parmLen;
            var i;
            //加倍类型
            self.typ = bytes.readUint8();
        };
        return c2s_ddz_jiabei;
    }());
    hanlder.c2s_ddz_jiabei = c2s_ddz_jiabei;
    var c2s_ddz_play_card = /** @class */ (function () {
        function c2s_ddz_play_card() {
            this.optcode = 0;
            this.optname = "onDdz_play_card";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_ddz_play_card.read = function (self, bytes) {
            var parmLen;
            var i;
            //牌类型
            self.typ = bytes.readUint8();
            //牌长度
            self.len = bytes.readUint8();
            //最大牌
            self.val = bytes.readUint8();
            //出的牌
            self.cards = bytes.readString();
        };
        return c2s_ddz_play_card;
    }());
    hanlder.c2s_ddz_play_card = c2s_ddz_play_card;
    var c2s_ddz_play_card_pass = /** @class */ (function () {
        function c2s_ddz_play_card_pass() {
            this.optcode = 0;
            this.optname = "onDdz_play_card_pass";
        }
        return c2s_ddz_play_card_pass;
    }());
    hanlder.c2s_ddz_play_card_pass = c2s_ddz_play_card_pass;
    var c2s_ddz_trusteeship = /** @class */ (function () {
        function c2s_ddz_trusteeship() {
            this.optcode = 0;
            this.optname = "onDdz_trusteeship";
        }
        return c2s_ddz_trusteeship;
    }());
    hanlder.c2s_ddz_trusteeship = c2s_ddz_trusteeship;
    var c2s_zjh_continue = /** @class */ (function () {
        function c2s_zjh_continue() {
            this.optcode = 0;
            this.optname = "onZjh_continue";
        }
        return c2s_zjh_continue;
    }());
    hanlder.c2s_zjh_continue = c2s_zjh_continue;
    var c2s_niuniu_continue = /** @class */ (function () {
        function c2s_niuniu_continue() {
            this.optcode = 0;
            this.optname = "onNiuniu_continue";
        }
        return c2s_niuniu_continue;
    }());
    hanlder.c2s_niuniu_continue = c2s_niuniu_continue;
    var c2s_zjh_cancel_matching = /** @class */ (function () {
        function c2s_zjh_cancel_matching() {
            this.optcode = 0;
            this.optname = "onZjh_cancel_matching";
        }
        return c2s_zjh_cancel_matching;
    }());
    hanlder.c2s_zjh_cancel_matching = c2s_zjh_cancel_matching;
    var c2s_niuniu_cancel_matching = /** @class */ (function () {
        function c2s_niuniu_cancel_matching() {
            this.optcode = 0;
            this.optname = "onNiuniu_cancel_matching";
        }
        return c2s_niuniu_cancel_matching;
    }());
    hanlder.c2s_niuniu_cancel_matching = c2s_niuniu_cancel_matching;
    var c2s_zjh_leave_map = /** @class */ (function () {
        function c2s_zjh_leave_map() {
            this.optcode = 0;
            this.optname = "onZjh_leave_map";
        }
        return c2s_zjh_leave_map;
    }());
    hanlder.c2s_zjh_leave_map = c2s_zjh_leave_map;
    var c2s_blackjack_bet = /** @class */ (function () {
        function c2s_blackjack_bet() {
            this.optcode = 0;
            this.optname = "onBlackjack_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_blackjack_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注数额
            self.num = bytes.readString();
            //下注位置
            self.pos = bytes.readUint8();
        };
        return c2s_blackjack_bet;
    }());
    hanlder.c2s_blackjack_bet = c2s_blackjack_bet;
    var c2s_blackjack_buy_insurance = /** @class */ (function () {
        function c2s_blackjack_buy_insurance() {
            this.optcode = 0;
            this.optname = "onBlackjack_buy_insurance";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_blackjack_buy_insurance.read = function (self, bytes) {
            var parmLen;
            var i;
            //操作1买2不买
            self.opt_type = bytes.readUint8();
            //买保险位置
            self.pos = bytes.readUint8();
        };
        return c2s_blackjack_buy_insurance;
    }());
    hanlder.c2s_blackjack_buy_insurance = c2s_blackjack_buy_insurance;
    var c2s_blackjack_extend_bet = /** @class */ (function () {
        function c2s_blackjack_extend_bet() {
            this.optcode = 0;
            this.optname = "onBlackjack_extend_bet";
        }
        return c2s_blackjack_extend_bet;
    }());
    hanlder.c2s_blackjack_extend_bet = c2s_blackjack_extend_bet;
    var c2s_blackjack_bet_double = /** @class */ (function () {
        function c2s_blackjack_bet_double() {
            this.optcode = 0;
            this.optname = "onBlackjack_bet_double";
        }
        return c2s_blackjack_bet_double;
    }());
    hanlder.c2s_blackjack_bet_double = c2s_blackjack_bet_double;
    var c2s_blackjack_part_card = /** @class */ (function () {
        function c2s_blackjack_part_card() {
            this.optcode = 0;
            this.optname = "onBlackjack_part_card";
        }
        return c2s_blackjack_part_card;
    }());
    hanlder.c2s_blackjack_part_card = c2s_blackjack_part_card;
    var c2s_blackjack_ask_card = /** @class */ (function () {
        function c2s_blackjack_ask_card() {
            this.optcode = 0;
            this.optname = "onBlackjack_ask_card";
        }
        return c2s_blackjack_ask_card;
    }());
    hanlder.c2s_blackjack_ask_card = c2s_blackjack_ask_card;
    var c2s_blackjack_stop_card = /** @class */ (function () {
        function c2s_blackjack_stop_card() {
            this.optcode = 0;
            this.optname = "onBlackjack_stop_card";
        }
        return c2s_blackjack_stop_card;
    }());
    hanlder.c2s_blackjack_stop_card = c2s_blackjack_stop_card;
    var c2s_blackjack_bet_complete = /** @class */ (function () {
        function c2s_blackjack_bet_complete() {
            this.optcode = 0;
            this.optname = "onBlackjack_bet_complete";
        }
        return c2s_blackjack_bet_complete;
    }());
    hanlder.c2s_blackjack_bet_complete = c2s_blackjack_bet_complete;
    var c2s_tbniuniu_bet = /** @class */ (function () {
        function c2s_tbniuniu_bet() {
            this.optcode = 0;
            this.optname = "onTbniuniu_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_tbniuniu_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍率
            self.num = bytes.readUint8();
        };
        return c2s_tbniuniu_bet;
    }());
    hanlder.c2s_tbniuniu_bet = c2s_tbniuniu_bet;
    var c2s_tbniuniu_showcard = /** @class */ (function () {
        function c2s_tbniuniu_showcard() {
            this.optcode = 0;
            this.optname = "onTbniuniu_showcard";
        }
        return c2s_tbniuniu_showcard;
    }());
    hanlder.c2s_tbniuniu_showcard = c2s_tbniuniu_showcard;
    var c2s_tbniuniu_continue = /** @class */ (function () {
        function c2s_tbniuniu_continue() {
            this.optcode = 0;
            this.optname = "onTbniuniu_continue";
        }
        return c2s_tbniuniu_continue;
    }());
    hanlder.c2s_tbniuniu_continue = c2s_tbniuniu_continue;
    var c2s_tbniuniu_trusteeship = /** @class */ (function () {
        function c2s_tbniuniu_trusteeship() {
            this.optcode = 0;
            this.optname = "onTbniuniu_trusteeship";
        }
        return c2s_tbniuniu_trusteeship;
    }());
    hanlder.c2s_tbniuniu_trusteeship = c2s_tbniuniu_trusteeship;
    var c2s_brniuniu_bet = /** @class */ (function () {
        function c2s_brniuniu_bet() {
            this.optcode = 0;
            this.optname = "onBrniuniu_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_brniuniu_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_brniuniu_bet;
    }());
    hanlder.c2s_brniuniu_bet = c2s_brniuniu_bet;
    var both_fish_get_dole = /** @class */ (function () {
        function both_fish_get_dole() {
            this.optcode = 0;
            this.optname = "onFish_get_dole";
        }
        return both_fish_get_dole;
    }());
    hanlder.both_fish_get_dole = both_fish_get_dole;
    var c2s_start_fire = /** @class */ (function () {
        function c2s_start_fire() {
            this.optcode = 0;
            this.optname = "onStart_fire";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_start_fire.read = function (self, bytes) {
            var parmLen;
            var i;
            //相对自身的朝向
            self.toward = bytes.readUint8();
            //瞄准目标OID
            self.target_oid = bytes.readUint32();
            //是否炸金币
            self.is_boom = bytes.readUint8();
        };
        return c2s_start_fire;
    }());
    hanlder.c2s_start_fire = c2s_start_fire;
    var s2c_start_fire_result = /** @class */ (function () {
        function s2c_start_fire_result() {
            this.optcode = 0;
            this.optname = "onStart_fire_result";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_start_fire_result.read = function (self, bytes) {
            var parmLen;
            var i;
            //正在开火
            self.oid = bytes.readUint32();
            //相对朝向
            self.toward = bytes.readUint8();
            //瞄准目标OID
            self.target_oid = bytes.readUint32();
            //是否炸金币
            self.is_boom = bytes.readUint8();
        };
        return s2c_start_fire_result;
    }());
    hanlder.s2c_start_fire_result = s2c_start_fire_result;
    var c2s_fire_at = /** @class */ (function () {
        function c2s_fire_at() {
            this.optcode = 0;
            this.optname = "onFire_at";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_fire_at.read = function (self, bytes) {
            var parmLen;
            var i;
            //鱼ID
            self.oid = bytes.readUint32();
        };
        return c2s_fire_at;
    }());
    hanlder.c2s_fire_at = c2s_fire_at;
    var c2s_change_fire_lv = /** @class */ (function () {
        function c2s_change_fire_lv() {
            this.optcode = 0;
            this.optname = "onChange_fire_lv";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_change_fire_lv.read = function (self, bytes) {
            var parmLen;
            var i;
            //目标炮的等级
            self.lv = bytes.readUint32();
        };
        return c2s_change_fire_lv;
    }());
    hanlder.c2s_change_fire_lv = c2s_change_fire_lv;
    var c2s_aim_at = /** @class */ (function () {
        function c2s_aim_at() {
            this.optcode = 0;
            this.optname = "onAim_at";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_aim_at.read = function (self, bytes) {
            var parmLen;
            var i;
            //鱼ID
            self.oid = bytes.readUint32();
        };
        return c2s_aim_at;
    }());
    hanlder.c2s_aim_at = c2s_aim_at;
    var both_change_bullet_state = /** @class */ (function () {
        function both_change_bullet_state() {
            this.optcode = 0;
            this.optname = "onChange_bullet_state";
        }
        /**
        从输入二进制流中读取结构体
        */
        both_change_bullet_state.read = function (self, bytes) {
            var parmLen;
            var i;
            //状态
            self.state = bytes.readUint32();
        };
        return both_change_bullet_state;
    }());
    hanlder.both_change_bullet_state = both_change_bullet_state;
    var both_fish_result = /** @class */ (function () {
        function both_fish_result() {
            this.optcode = 0;
            this.optname = "onFish_result";
        }
        /**
        从输入二进制流中读取结构体
        */
        both_fish_result.read = function (self, bytes) {
            var parmLen;
            var i;
            //状态
            self.before = bytes.readUint32();
            //状态
            self.after = bytes.readUint32();
        };
        return both_fish_result;
    }());
    hanlder.both_fish_result = both_fish_result;
    var c2s_brniuniu_xiazhuang = /** @class */ (function () {
        function c2s_brniuniu_xiazhuang() {
            this.optcode = 0;
            this.optname = "onBrniuniu_xiazhuang";
        }
        return c2s_brniuniu_xiazhuang;
    }());
    hanlder.c2s_brniuniu_xiazhuang = c2s_brniuniu_xiazhuang;
    var c2s_brniuniu_shangzhuang = /** @class */ (function () {
        function c2s_brniuniu_shangzhuang() {
            this.optcode = 0;
            this.optname = "onBrniuniu_shangzhuang";
        }
        return c2s_brniuniu_shangzhuang;
    }());
    hanlder.c2s_brniuniu_shangzhuang = c2s_brniuniu_shangzhuang;
    var c2s_brniuniu_seated = /** @class */ (function () {
        function c2s_brniuniu_seated() {
            this.optcode = 0;
            this.optname = "onBrniuniu_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_brniuniu_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_brniuniu_seated;
    }());
    hanlder.c2s_brniuniu_seated = c2s_brniuniu_seated;
    var c2s_brnn_get_mapinfo = /** @class */ (function () {
        function c2s_brnn_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onBrnn_get_mapinfo";
        }
        return c2s_brnn_get_mapinfo;
    }());
    hanlder.c2s_brnn_get_mapinfo = c2s_brnn_get_mapinfo;
    var s2c_brnn_return_mapinfo = /** @class */ (function () {
        function s2c_brnn_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onBrnn_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_brnn_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
        };
        return s2c_brnn_return_mapinfo;
    }());
    hanlder.s2c_brnn_return_mapinfo = s2c_brnn_return_mapinfo;
    var s2c_dianyu_result = /** @class */ (function () {
        function s2c_dianyu_result() {
            this.optcode = 0;
            this.optname = "onDianyu_result";
            /**
            * 被电死的鱼
            */
            this.dead_fishs = []; //uint32
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_dianyu_result.read = function (self, bytes) {
            var parmLen;
            var i;
            //玩家
            self.p_id = bytes.readUint32();
            //电鱼
            self.fish_id = bytes.readUint32();
            //被电死的鱼
            self.dead_fishs.length = 0; //清空数组				
            parmLen = bytes.readUint16();
            for (i = 0; i < parmLen; i++) {
                self.dead_fishs.push(bytes.readUint32());
            }
        };
        return s2c_dianyu_result;
    }());
    hanlder.s2c_dianyu_result = s2c_dianyu_result;
    var c2s_sg_banker = /** @class */ (function () {
        function c2s_sg_banker() {
            this.optcode = 0;
            this.optname = "onSg_banker";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_sg_banker.read = function (self, bytes) {
            var parmLen;
            var i;
            //操作1买2不买
            self.opt_type = bytes.readUint8();
        };
        return c2s_sg_banker;
    }());
    hanlder.c2s_sg_banker = c2s_sg_banker;
    var c2s_sg_bet = /** @class */ (function () {
        function c2s_sg_bet() {
            this.optcode = 0;
            this.optname = "onSg_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_sg_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍数
            self.num = bytes.readUint8();
        };
        return c2s_sg_bet;
    }());
    hanlder.c2s_sg_bet = c2s_sg_bet;
    var c2s_sg_show_cards = /** @class */ (function () {
        function c2s_sg_show_cards() {
            this.optcode = 0;
            this.optname = "onSg_show_cards";
        }
        return c2s_sg_show_cards;
    }());
    hanlder.c2s_sg_show_cards = c2s_sg_show_cards;
    var c2s_longhu_bet = /** @class */ (function () {
        function c2s_longhu_bet() {
            this.optcode = 0;
            this.optname = "onLonghu_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_longhu_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_longhu_bet;
    }());
    hanlder.c2s_longhu_bet = c2s_longhu_bet;
    var c2s_longhu_xiazhuang = /** @class */ (function () {
        function c2s_longhu_xiazhuang() {
            this.optcode = 0;
            this.optname = "onLonghu_xiazhuang";
        }
        return c2s_longhu_xiazhuang;
    }());
    hanlder.c2s_longhu_xiazhuang = c2s_longhu_xiazhuang;
    var c2s_longhu_shangzhuang = /** @class */ (function () {
        function c2s_longhu_shangzhuang() {
            this.optcode = 0;
            this.optname = "onLonghu_shangzhuang";
        }
        return c2s_longhu_shangzhuang;
    }());
    hanlder.c2s_longhu_shangzhuang = c2s_longhu_shangzhuang;
    var c2s_longhu_seated = /** @class */ (function () {
        function c2s_longhu_seated() {
            this.optcode = 0;
            this.optname = "onLonghu_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_longhu_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_longhu_seated;
    }());
    hanlder.c2s_longhu_seated = c2s_longhu_seated;
    var c2s_longhu_get_mapinfo = /** @class */ (function () {
        function c2s_longhu_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onLonghu_get_mapinfo";
        }
        return c2s_longhu_get_mapinfo;
    }());
    hanlder.c2s_longhu_get_mapinfo = c2s_longhu_get_mapinfo;
    var s2c_longhu_return_mapinfo = /** @class */ (function () {
        function s2c_longhu_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onLonghu_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_longhu_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图1坐标
            self.pos1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图2坐标
            self.pos2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图3坐标
            self.pos3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
            //地图4坐标
            self.pos4 = bytes.readString();
        };
        return s2c_longhu_return_mapinfo;
    }());
    hanlder.s2c_longhu_return_mapinfo = s2c_longhu_return_mapinfo;
    var c2s_ebgang_banker = /** @class */ (function () {
        function c2s_ebgang_banker() {
            this.optcode = 0;
            this.optname = "onEbgang_banker";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_ebgang_banker.read = function (self, bytes) {
            var parmLen;
            var i;
            //抢庄倍率
            self.num = bytes.readUint8();
        };
        return c2s_ebgang_banker;
    }());
    hanlder.c2s_ebgang_banker = c2s_ebgang_banker;
    var c2s_ebgang_bet = /** @class */ (function () {
        function c2s_ebgang_bet() {
            this.optcode = 0;
            this.optname = "onEbgang_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_ebgang_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍数
            self.num = bytes.readUint8();
        };
        return c2s_ebgang_bet;
    }());
    hanlder.c2s_ebgang_bet = c2s_ebgang_bet;
    var c2s_hhdazhan_bet = /** @class */ (function () {
        function c2s_hhdazhan_bet() {
            this.optcode = 0;
            this.optname = "onHhdazhan_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_hhdazhan_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_hhdazhan_bet;
    }());
    hanlder.c2s_hhdazhan_bet = c2s_hhdazhan_bet;
    var c2s_hhdazhan_seated = /** @class */ (function () {
        function c2s_hhdazhan_seated() {
            this.optcode = 0;
            this.optname = "onHhdazhan_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_hhdazhan_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_hhdazhan_seated;
    }());
    hanlder.c2s_hhdazhan_seated = c2s_hhdazhan_seated;
    var c2s_qzpaijiu_banker = /** @class */ (function () {
        function c2s_qzpaijiu_banker() {
            this.optcode = 0;
            this.optname = "onQzpaijiu_banker";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_qzpaijiu_banker.read = function (self, bytes) {
            var parmLen;
            var i;
            //抢庄倍率
            self.num = bytes.readUint8();
        };
        return c2s_qzpaijiu_banker;
    }());
    hanlder.c2s_qzpaijiu_banker = c2s_qzpaijiu_banker;
    var c2s_qzpaijiu_bet = /** @class */ (function () {
        function c2s_qzpaijiu_bet() {
            this.optcode = 0;
            this.optname = "onQzpaijiu_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_qzpaijiu_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍数
            self.num = bytes.readUint8();
        };
        return c2s_qzpaijiu_bet;
    }());
    hanlder.c2s_qzpaijiu_bet = c2s_qzpaijiu_bet;
    var c2s_shuiguoji_bet = /** @class */ (function () {
        function c2s_shuiguoji_bet() {
            this.optcode = 0;
            this.optname = "onShuiguoji_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_shuiguoji_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注倍数
            self.num = bytes.readUint8();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_shuiguoji_bet;
    }());
    hanlder.c2s_shuiguoji_bet = c2s_shuiguoji_bet;
    var c2s_shuiguoji_lottery = /** @class */ (function () {
        function c2s_shuiguoji_lottery() {
            this.optcode = 0;
            this.optname = "onShuiguoji_lottery";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_shuiguoji_lottery.read = function (self, bytes) {
            var parmLen;
            var i;
            //开奖类型0正常开奖1猜大小
            self.type = bytes.readUint8();
            //参数为下注类型和下注倍数用逗号隔开
            self.param = bytes.readString();
        };
        return c2s_shuiguoji_lottery;
    }());
    hanlder.c2s_shuiguoji_lottery = c2s_shuiguoji_lottery;
    var c2s_shuiguoji_result = /** @class */ (function () {
        function c2s_shuiguoji_result() {
            this.optcode = 0;
            this.optname = "onShuiguoji_result";
        }
        return c2s_shuiguoji_result;
    }());
    hanlder.c2s_shuiguoji_result = c2s_shuiguoji_result;
    var c2s_robot_start_fire = /** @class */ (function () {
        function c2s_robot_start_fire() {
            this.optcode = 0;
            this.optname = "onRobot_start_fire";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_robot_start_fire.read = function (self, bytes) {
            var parmLen;
            var i;
            //机器人oid
            self.robot_oid = bytes.readUint32();
            //相对自身的朝向
            self.toward = bytes.readUint8();
            //瞄准目标OID
            self.target_oid = bytes.readUint32();
        };
        return c2s_robot_start_fire;
    }());
    hanlder.c2s_robot_start_fire = c2s_robot_start_fire;
    var c2s_robot_fire_at = /** @class */ (function () {
        function c2s_robot_fire_at() {
            this.optcode = 0;
            this.optname = "onRobot_fire_at";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_robot_fire_at.read = function (self, bytes) {
            var parmLen;
            var i;
            //机器人oid
            self.robot_oid = bytes.readUint32();
            //鱼ID
            self.oid = bytes.readUint32();
        };
        return c2s_robot_fire_at;
    }());
    hanlder.c2s_robot_fire_at = c2s_robot_fire_at;
    var c2s_baijiale_bet = /** @class */ (function () {
        function c2s_baijiale_bet() {
            this.optcode = 0;
            this.optname = "onBaijiale_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_baijiale_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_baijiale_bet;
    }());
    hanlder.c2s_baijiale_bet = c2s_baijiale_bet;
    var c2s_baijiale_seated = /** @class */ (function () {
        function c2s_baijiale_seated() {
            this.optcode = 0;
            this.optname = "onBaijiale_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_baijiale_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_baijiale_seated;
    }());
    hanlder.c2s_baijiale_seated = c2s_baijiale_seated;
    var c2s_baijiale_get_mapinfo = /** @class */ (function () {
        function c2s_baijiale_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onBaijiale_get_mapinfo";
        }
        return c2s_baijiale_get_mapinfo;
    }());
    hanlder.c2s_baijiale_get_mapinfo = c2s_baijiale_get_mapinfo;
    var s2c_baijiale_return_mapinfo = /** @class */ (function () {
        function s2c_baijiale_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onBaijiale_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_baijiale_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图1坐标
            self.pos1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图2坐标
            self.pos2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图3坐标
            self.pos3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
            //地图4坐标
            self.pos4 = bytes.readString();
        };
        return s2c_baijiale_return_mapinfo;
    }());
    hanlder.s2c_baijiale_return_mapinfo = s2c_baijiale_return_mapinfo;
    var c2s_hhdz_get_mapinfo = /** @class */ (function () {
        function c2s_hhdz_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onHhdz_get_mapinfo";
        }
        return c2s_hhdz_get_mapinfo;
    }());
    hanlder.c2s_hhdz_get_mapinfo = c2s_hhdz_get_mapinfo;
    var s2c_hhdz_return_mapinfo = /** @class */ (function () {
        function s2c_hhdz_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onHhdz_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_hhdz_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图1坐标
            self.pos1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图2坐标
            self.pos2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图3坐标
            self.pos3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
            //地图4坐标
            self.pos4 = bytes.readString();
        };
        return s2c_hhdz_return_mapinfo;
    }());
    hanlder.s2c_hhdz_return_mapinfo = s2c_hhdz_return_mapinfo;
    var c2s_longhu_update_road = /** @class */ (function () {
        function c2s_longhu_update_road() {
            this.optcode = 0;
            this.optname = "onLonghu_update_road";
        }
        return c2s_longhu_update_road;
    }());
    hanlder.c2s_longhu_update_road = c2s_longhu_update_road;
    var c2s_baijiale_update_road = /** @class */ (function () {
        function c2s_baijiale_update_road() {
            this.optcode = 0;
            this.optname = "onBaijiale_update_road";
        }
        return c2s_baijiale_update_road;
    }());
    hanlder.c2s_baijiale_update_road = c2s_baijiale_update_road;
    var c2s_shisanshui_playing = /** @class */ (function () {
        function c2s_shisanshui_playing() {
            this.optcode = 0;
            this.optname = "onShisanshui_playing";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_shisanshui_playing.read = function (self, bytes) {
            var parmLen;
            var i;
            //拼好的所有牌
            self.cards = bytes.readString();
            //是否特殊牌0不是1是
            self.opt_type = bytes.readUint8();
        };
        return c2s_shisanshui_playing;
    }());
    hanlder.c2s_shisanshui_playing = c2s_shisanshui_playing;
    var c2s_benchibaoma_bet = /** @class */ (function () {
        function c2s_benchibaoma_bet() {
            this.optcode = 0;
            this.optname = "onBenchibaoma_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_benchibaoma_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_benchibaoma_bet;
    }());
    hanlder.c2s_benchibaoma_bet = c2s_benchibaoma_bet;
    var c2s_benchibaoma_seated = /** @class */ (function () {
        function c2s_benchibaoma_seated() {
            this.optcode = 0;
            this.optname = "onBenchibaoma_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_benchibaoma_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_benchibaoma_seated;
    }());
    hanlder.c2s_benchibaoma_seated = c2s_benchibaoma_seated;
    var c2s_benchibaoma_get_mapinfo = /** @class */ (function () {
        function c2s_benchibaoma_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onBenchibaoma_get_mapinfo";
        }
        return c2s_benchibaoma_get_mapinfo;
    }());
    hanlder.c2s_benchibaoma_get_mapinfo = c2s_benchibaoma_get_mapinfo;
    var s2c_benchibaoma_return_mapinfo = /** @class */ (function () {
        function s2c_benchibaoma_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onBenchibaoma_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_benchibaoma_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
        };
        return s2c_benchibaoma_return_mapinfo;
    }());
    hanlder.s2c_benchibaoma_return_mapinfo = s2c_benchibaoma_return_mapinfo;
    var c2s_bairendezhou_bet = /** @class */ (function () {
        function c2s_bairendezhou_bet() {
            this.optcode = 0;
            this.optname = "onBairendezhou_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_bairendezhou_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_bairendezhou_bet;
    }());
    hanlder.c2s_bairendezhou_bet = c2s_bairendezhou_bet;
    var c2s_bairendezhou_seated = /** @class */ (function () {
        function c2s_bairendezhou_seated() {
            this.optcode = 0;
            this.optname = "onBairendezhou_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_bairendezhou_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_bairendezhou_seated;
    }());
    hanlder.c2s_bairendezhou_seated = c2s_bairendezhou_seated;
    var c2s_bairendezhou_get_mapinfo = /** @class */ (function () {
        function c2s_bairendezhou_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onBairendezhou_get_mapinfo";
        }
        return c2s_bairendezhou_get_mapinfo;
    }());
    hanlder.c2s_bairendezhou_get_mapinfo = c2s_bairendezhou_get_mapinfo;
    var s2c_bairendezhou_return_mapinfo = /** @class */ (function () {
        function s2c_bairendezhou_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onBairendezhou_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_bairendezhou_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图1坐标
            self.pos1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图2坐标
            self.pos2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图3坐标
            self.pos3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
            //地图4坐标
            self.pos4 = bytes.readString();
        };
        return s2c_bairendezhou_return_mapinfo;
    }());
    hanlder.s2c_bairendezhou_return_mapinfo = s2c_bairendezhou_return_mapinfo;
    var c2s_toubao_bet = /** @class */ (function () {
        function c2s_toubao_bet() {
            this.optcode = 0;
            this.optname = "onToubao_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_toubao_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_toubao_bet;
    }());
    hanlder.c2s_toubao_bet = c2s_toubao_bet;
    var c2s_toubao_seated = /** @class */ (function () {
        function c2s_toubao_seated() {
            this.optcode = 0;
            this.optname = "onToubao_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_toubao_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_toubao_seated;
    }());
    hanlder.c2s_toubao_seated = c2s_toubao_seated;
    var c2s_hhdz_update_road = /** @class */ (function () {
        function c2s_hhdz_update_road() {
            this.optcode = 0;
            this.optname = "onHhdz_update_road";
        }
        return c2s_hhdz_update_road;
    }());
    hanlder.c2s_hhdz_update_road = c2s_hhdz_update_road;
    var c2s_bairendezhou_update_road = /** @class */ (function () {
        function c2s_bairendezhou_update_road() {
            this.optcode = 0;
            this.optname = "onBairendezhou_update_road";
        }
        return c2s_bairendezhou_update_road;
    }());
    hanlder.c2s_bairendezhou_update_road = c2s_bairendezhou_update_road;
    var c2s_end_roomcard_game = /** @class */ (function () {
        function c2s_end_roomcard_game() {
            this.optcode = 0;
            this.optname = "onEnd_roomcard_game";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_end_roomcard_game.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.mapid = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
            //入座位置
            self.index = bytes.readUint8();
            //房卡id
            self.card_id = bytes.readString();
        };
        return c2s_end_roomcard_game;
    }());
    hanlder.c2s_end_roomcard_game = c2s_end_roomcard_game;
    var c2s_dezhou_bet = /** @class */ (function () {
        function c2s_dezhou_bet() {
            this.optcode = 0;
            this.optname = "onDezhou_bet";
        }
        return c2s_dezhou_bet;
    }());
    hanlder.c2s_dezhou_bet = c2s_dezhou_bet;
    var c2s_dezhou_addbet = /** @class */ (function () {
        function c2s_dezhou_addbet() {
            this.optcode = 0;
            this.optname = "onDezhou_addbet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_dezhou_addbet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
        };
        return c2s_dezhou_addbet;
    }());
    hanlder.c2s_dezhou_addbet = c2s_dezhou_addbet;
    var c2s_dezhou_pass = /** @class */ (function () {
        function c2s_dezhou_pass() {
            this.optcode = 0;
            this.optname = "onDezhou_pass";
        }
        return c2s_dezhou_pass;
    }());
    hanlder.c2s_dezhou_pass = c2s_dezhou_pass;
    var c2s_dezhou_discard = /** @class */ (function () {
        function c2s_dezhou_discard() {
            this.optcode = 0;
            this.optname = "onDezhou_discard";
        }
        return c2s_dezhou_discard;
    }());
    hanlder.c2s_dezhou_discard = c2s_dezhou_discard;
    var c2s_dezhou_take_money_to_room = /** @class */ (function () {
        function c2s_dezhou_take_money_to_room() {
            this.optcode = 0;
            this.optname = "onDezhou_take_money_to_room";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_dezhou_take_money_to_room.read = function (self, bytes) {
            var parmLen;
            var i;
            //携带金额
            self.num = bytes.readUint32();
        };
        return c2s_dezhou_take_money_to_room;
    }());
    hanlder.c2s_dezhou_take_money_to_room = c2s_dezhou_take_money_to_room;
    var c2s_vote_end_roomcard = /** @class */ (function () {
        function c2s_vote_end_roomcard() {
            this.optcode = 0;
            this.optname = "onVote_end_roomcard";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_vote_end_roomcard.read = function (self, bytes) {
            var parmLen;
            var i;
            //游戏id
            self.mapid = bytes.readString();
            //房间配置id
            self.room_config_id = bytes.readUint32();
            //入座位置
            self.index = bytes.readUint8();
            //房卡id
            self.card_id = bytes.readString();
            //是否同意
            self.isagree = bytes.readUint8();
        };
        return c2s_vote_end_roomcard;
    }());
    hanlder.c2s_vote_end_roomcard = c2s_vote_end_roomcard;
    var c2s_zoo_bet = /** @class */ (function () {
        function c2s_zoo_bet() {
            this.optcode = 0;
            this.optname = "onZoo_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_zoo_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_zoo_bet;
    }());
    hanlder.c2s_zoo_bet = c2s_zoo_bet;
    var c2s_zoo_seated = /** @class */ (function () {
        function c2s_zoo_seated() {
            this.optcode = 0;
            this.optname = "onZoo_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_zoo_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_zoo_seated;
    }());
    hanlder.c2s_zoo_seated = c2s_zoo_seated;
    var c2s_zoo_get_mapinfo = /** @class */ (function () {
        function c2s_zoo_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onZoo_get_mapinfo";
        }
        return c2s_zoo_get_mapinfo;
    }());
    hanlder.c2s_zoo_get_mapinfo = c2s_zoo_get_mapinfo;
    var s2c_zoo_return_mapinfo = /** @class */ (function () {
        function s2c_zoo_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onZoo_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_zoo_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
        };
        return s2c_zoo_return_mapinfo;
    }());
    hanlder.s2c_zoo_return_mapinfo = s2c_zoo_return_mapinfo;
    var c2s_dezhou_continue = /** @class */ (function () {
        function c2s_dezhou_continue() {
            this.optcode = 0;
            this.optname = "onDezhou_continue";
        }
        return c2s_dezhou_continue;
    }());
    hanlder.c2s_dezhou_continue = c2s_dezhou_continue;
    var c2s_get_app_addr = /** @class */ (function () {
        function c2s_get_app_addr() {
            this.optcode = 0;
            this.optname = "onGet_app_addr";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_app_addr.read = function (self, bytes) {
            var parmLen;
            var i;
            //入口类型
            self.app_type = bytes.readUint8();
            //设备类型
            self.device_type = bytes.readUint8();
            //其他数据
            self.data = bytes.readString();
        };
        return c2s_get_app_addr;
    }());
    hanlder.c2s_get_app_addr = c2s_get_app_addr;
    var c2s_pdk_play_card = /** @class */ (function () {
        function c2s_pdk_play_card() {
            this.optcode = 0;
            this.optname = "onPdk_play_card";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_pdk_play_card.read = function (self, bytes) {
            var parmLen;
            var i;
            //牌类型
            self.typ = bytes.readUint8();
            //牌长度
            self.len = bytes.readUint8();
            //最大牌
            self.val = bytes.readUint8();
            //出的牌
            self.cards = bytes.readString();
        };
        return c2s_pdk_play_card;
    }());
    hanlder.c2s_pdk_play_card = c2s_pdk_play_card;
    var c2s_pdk_pass_card = /** @class */ (function () {
        function c2s_pdk_pass_card() {
            this.optcode = 0;
            this.optname = "onPdk_pass_card";
        }
        return c2s_pdk_pass_card;
    }());
    hanlder.c2s_pdk_pass_card = c2s_pdk_pass_card;
    var c2s_pdk_qiang_guan = /** @class */ (function () {
        function c2s_pdk_qiang_guan() {
            this.optcode = 0;
            this.optname = "onPdk_qiang_guan";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_pdk_qiang_guan.read = function (self, bytes) {
            var parmLen;
            var i;
            //操作类型0不抢1抢
            self.typ = bytes.readUint8();
        };
        return c2s_pdk_qiang_guan;
    }());
    hanlder.c2s_pdk_qiang_guan = c2s_pdk_qiang_guan;
    var c2s_get_qifu_list = /** @class */ (function () {
        function c2s_get_qifu_list() {
            this.optcode = 0;
            this.optname = "onGet_qifu_list";
        }
        return c2s_get_qifu_list;
    }());
    hanlder.c2s_get_qifu_list = c2s_get_qifu_list;
    var c2s_player_qifu = /** @class */ (function () {
        function c2s_player_qifu() {
            this.optcode = 0;
            this.optname = "onPlayer_qifu";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_player_qifu.read = function (self, bytes) {
            var parmLen;
            var i;
            //祈福类型
            self.typ = bytes.readUint8();
            //祈福枚举
            self.id = bytes.readUint8();
            //祈福对象名称
            self.name = bytes.readString();
        };
        return c2s_player_qifu;
    }());
    hanlder.c2s_player_qifu = c2s_player_qifu;
    var c2s_recharge_confirm = /** @class */ (function () {
        function c2s_recharge_confirm() {
            this.optcode = 0;
            this.optname = "onRecharge_confirm";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_recharge_confirm.read = function (self, bytes) {
            var parmLen;
            var i;
            //账号
            self.account = bytes.readString();
            //转账的钱
            self.money = bytes.readInt32();
            //转账类型
            self.type = bytes.readInt32();
            //转账信息
            self.from_msg = bytes.readString();
        };
        return c2s_recharge_confirm;
    }());
    hanlder.c2s_recharge_confirm = c2s_recharge_confirm;
    var c2s_login_invite = /** @class */ (function () {
        function c2s_login_invite() {
            this.optcode = 0;
            this.optname = "onLogin_invite";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_login_invite.read = function (self, bytes) {
            var parmLen;
            var i;
            //登录类型
            self.typ = bytes.readUint8();
            //服务名
            self.server_name = bytes.readString();
            //账号
            self.account = bytes.readString();
            //密码
            self.pwd = bytes.readString();
            //非
            self.invitor = bytes.readString();
        };
        return c2s_login_invite;
    }());
    hanlder.c2s_login_invite = c2s_login_invite;
    var c2s_pdk_trusteeship = /** @class */ (function () {
        function c2s_pdk_trusteeship() {
            this.optcode = 0;
            this.optname = "onPdk_trusteeship";
        }
        return c2s_pdk_trusteeship;
    }());
    hanlder.c2s_pdk_trusteeship = c2s_pdk_trusteeship;
    var c2s_sss_cancel_special = /** @class */ (function () {
        function c2s_sss_cancel_special() {
            this.optcode = 0;
            this.optname = "onSss_cancel_special";
        }
        return c2s_sss_cancel_special;
    }());
    hanlder.c2s_sss_cancel_special = c2s_sss_cancel_special;
    var c2s_scmj_exchange = /** @class */ (function () {
        function c2s_scmj_exchange() {
            this.optcode = 0;
            this.optname = "onScmj_exchange";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_scmj_exchange.read = function (self, bytes) {
            var parmLen;
            var i;
            //选的牌
            self.cards = bytes.readString();
        };
        return c2s_scmj_exchange;
    }());
    hanlder.c2s_scmj_exchange = c2s_scmj_exchange;
    var c2s_scmj_set_lack = /** @class */ (function () {
        function c2s_scmj_set_lack() {
            this.optcode = 0;
            this.optname = "onScmj_set_lack";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_scmj_set_lack.read = function (self, bytes) {
            var parmLen;
            var i;
            //选的花色
            self.color = bytes.readUint8();
        };
        return c2s_scmj_set_lack;
    }());
    hanlder.c2s_scmj_set_lack = c2s_scmj_set_lack;
    var c2s_scmj_play_card = /** @class */ (function () {
        function c2s_scmj_play_card() {
            this.optcode = 0;
            this.optname = "onScmj_play_card";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_scmj_play_card.read = function (self, bytes) {
            var parmLen;
            var i;
            //出的牌
            self.cards = bytes.readUint8();
        };
        return c2s_scmj_play_card;
    }());
    hanlder.c2s_scmj_play_card = c2s_scmj_play_card;
    var c2s_scmj_hu = /** @class */ (function () {
        function c2s_scmj_hu() {
            this.optcode = 0;
            this.optname = "onScmj_hu";
        }
        return c2s_scmj_hu;
    }());
    hanlder.c2s_scmj_hu = c2s_scmj_hu;
    var c2s_scmj_gang = /** @class */ (function () {
        function c2s_scmj_gang() {
            this.optcode = 0;
            this.optname = "onScmj_gang";
        }
        return c2s_scmj_gang;
    }());
    hanlder.c2s_scmj_gang = c2s_scmj_gang;
    var c2s_scmj_peng = /** @class */ (function () {
        function c2s_scmj_peng() {
            this.optcode = 0;
            this.optname = "onScmj_peng";
        }
        return c2s_scmj_peng;
    }());
    hanlder.c2s_scmj_peng = c2s_scmj_peng;
    var c2s_scmj_pass = /** @class */ (function () {
        function c2s_scmj_pass() {
            this.optcode = 0;
            this.optname = "onScmj_pass";
        }
        return c2s_scmj_pass;
    }());
    hanlder.c2s_scmj_pass = c2s_scmj_pass;
    var c2s_get_daili_yonghu = /** @class */ (function () {
        function c2s_get_daili_yonghu() {
            this.optcode = 0;
            this.optname = "onGet_daili_yonghu";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_daili_yonghu.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.date_type = bytes.readInt32();
        };
        return c2s_get_daili_yonghu;
    }());
    hanlder.c2s_get_daili_yonghu = c2s_get_daili_yonghu;
    var c2s_login_parameter = /** @class */ (function () {
        function c2s_login_parameter() {
            this.optcode = 0;
            this.optname = "onLogin_parameter";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_login_parameter.read = function (self, bytes) {
            var parmLen;
            var i;
            //登录类型
            self.typ = bytes.readUint8();
            //服务名
            self.server_name = bytes.readString();
            //账号
            self.account = bytes.readString();
            //密码
            self.pwd = bytes.readString();
            //邀请码
            self.invitor = bytes.readString();
            //系统版本号
            self.system = bytes.readString();
            //手机型号
            self.model = bytes.readString();
            //唯一标识
            self.deviceid = bytes.readString();
        };
        return c2s_login_parameter;
    }());
    hanlder.c2s_login_parameter = c2s_login_parameter;
    var c2s_get_vip_list = /** @class */ (function () {
        function c2s_get_vip_list() {
            this.optcode = 0;
            this.optname = "onGet_vip_list";
        }
        return c2s_get_vip_list;
    }());
    hanlder.c2s_get_vip_list = c2s_get_vip_list;
    var c2s_get_vip_award = /** @class */ (function () {
        function c2s_get_vip_award() {
            this.optcode = 0;
            this.optname = "onGet_vip_award";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_get_vip_award.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.lv = bytes.readInt32();
        };
        return c2s_get_vip_award;
    }());
    hanlder.c2s_get_vip_award = c2s_get_vip_award;
    var c2s_eluosilunpan_bet = /** @class */ (function () {
        function c2s_eluosilunpan_bet() {
            this.optcode = 0;
            this.optname = "onEluosilunpan_bet";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_eluosilunpan_bet.read = function (self, bytes) {
            var parmLen;
            var i;
            //下注金额
            self.num = bytes.readUint32();
            //下注位置
            self.index = bytes.readUint8();
        };
        return c2s_eluosilunpan_bet;
    }());
    hanlder.c2s_eluosilunpan_bet = c2s_eluosilunpan_bet;
    var c2s_eluosilunpan_seated = /** @class */ (function () {
        function c2s_eluosilunpan_seated() {
            this.optcode = 0;
            this.optname = "onEluosilunpan_seated";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_eluosilunpan_seated.read = function (self, bytes) {
            var parmLen;
            var i;
            //入座位置
            self.index = bytes.readUint8();
        };
        return c2s_eluosilunpan_seated;
    }());
    hanlder.c2s_eluosilunpan_seated = c2s_eluosilunpan_seated;
    var c2s_eluosilunpan_get_mapinfo = /** @class */ (function () {
        function c2s_eluosilunpan_get_mapinfo() {
            this.optcode = 0;
            this.optname = "onEluosilunpan_get_mapinfo";
        }
        return c2s_eluosilunpan_get_mapinfo;
    }());
    hanlder.c2s_eluosilunpan_get_mapinfo = c2s_eluosilunpan_get_mapinfo;
    var s2c_eluosilunpan_return_mapinfo = /** @class */ (function () {
        function s2c_eluosilunpan_return_mapinfo() {
            this.optcode = 0;
            this.optname = "onEluosilunpan_return_mapinfo";
        }
        /**
        从输入二进制流中读取结构体
        */
        s2c_eluosilunpan_return_mapinfo.read = function (self, bytes) {
            var parmLen;
            var i;
            //地图1状态
            self.status1 = bytes.readUint8();
            //地图1倒计时
            self.countdown1 = bytes.readUint32();
            //地图1战绩
            self.record1 = bytes.readString();
            //地图2状态
            self.status2 = bytes.readUint8();
            //地图2倒计时
            self.countdown2 = bytes.readUint32();
            //地图2战绩
            self.record2 = bytes.readString();
            //地图3状态
            self.status3 = bytes.readUint8();
            //地图3倒计时
            self.countdown3 = bytes.readUint32();
            //地图3战绩
            self.record3 = bytes.readString();
            //地图4状态
            self.status4 = bytes.readUint8();
            //地图4倒计时
            self.countdown4 = bytes.readUint32();
            //地图4战绩
            self.record4 = bytes.readString();
        };
        return s2c_eluosilunpan_return_mapinfo;
    }());
    hanlder.s2c_eluosilunpan_return_mapinfo = s2c_eluosilunpan_return_mapinfo;
    var c2s_signin = /** @class */ (function () {
        function c2s_signin() {
            this.optcode = 0;
            this.optname = "onSignin";
        }
        return c2s_signin;
    }());
    hanlder.c2s_signin = c2s_signin;
    var c2s_new_dailyshare = /** @class */ (function () {
        function c2s_new_dailyshare() {
            this.optcode = 0;
            this.optname = "onNew_dailyshare";
        }
        return c2s_new_dailyshare;
    }());
    hanlder.c2s_new_dailyshare = c2s_new_dailyshare;
    var c2s_save_yuebao = /** @class */ (function () {
        function c2s_save_yuebao() {
            this.optcode = 0;
            this.optname = "onSave_yuebao";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_save_yuebao.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readFloat();
        };
        return c2s_save_yuebao;
    }());
    hanlder.c2s_save_yuebao = c2s_save_yuebao;
    var c2s_take_yuebao = /** @class */ (function () {
        function c2s_take_yuebao() {
            this.optcode = 0;
            this.optname = "onTake_yuebao";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_take_yuebao.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.money = bytes.readFloat();
            //
            self.drawpwd = bytes.readString();
        };
        return c2s_take_yuebao;
    }());
    hanlder.c2s_take_yuebao = c2s_take_yuebao;
    var c2s_player_qifu_new = /** @class */ (function () {
        function c2s_player_qifu_new() {
            this.optcode = 0;
            this.optname = "onPlayer_qifu_new";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_player_qifu_new.read = function (self, bytes) {
            var parmLen;
            var i;
            //祈福类型
            self.typ = bytes.readUint8();
            //祈福枚举
            self.id = bytes.readUint8();
            //祈福对象名称
            self.name = bytes.readString();
        };
        return c2s_player_qifu_new;
    }());
    hanlder.c2s_player_qifu_new = c2s_player_qifu_new;
    var c2s_receive_vip_award = /** @class */ (function () {
        function c2s_receive_vip_award() {
            this.optcode = 0;
            this.optname = "onReceive_vip_award";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_receive_vip_award.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.lv = bytes.readInt32();
        };
        return c2s_receive_vip_award;
    }());
    hanlder.c2s_receive_vip_award = c2s_receive_vip_award;
    var c2s_score_lucky_draw = /** @class */ (function () {
        function c2s_score_lucky_draw() {
            this.optcode = 0;
            this.optname = "onScore_lucky_draw";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_score_lucky_draw.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.type_id = bytes.readUint8();
        };
        return c2s_score_lucky_draw;
    }());
    hanlder.c2s_score_lucky_draw = c2s_score_lucky_draw;
    var c2s_get_bind_reward = /** @class */ (function () {
        function c2s_get_bind_reward() {
            this.optcode = 0;
            this.optname = "onGet_bind_reward";
        }
        return c2s_get_bind_reward;
    }());
    hanlder.c2s_get_bind_reward = c2s_get_bind_reward;
    var c2s_get_commission = /** @class */ (function () {
        function c2s_get_commission() {
            this.optcode = 0;
            this.optname = "onGet_commission";
        }
        return c2s_get_commission;
    }());
    hanlder.c2s_get_commission = c2s_get_commission;
    var c2s_free_sytle_sync = /** @class */ (function () {
        function c2s_free_sytle_sync() {
            this.optcode = 0;
            this.optname = "onFree_sytle_sync";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_free_sytle_sync.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.data = bytes.readString();
        };
        return c2s_free_sytle_sync;
    }());
    hanlder.c2s_free_sytle_sync = c2s_free_sytle_sync;
    var c2s_check_login_vf = /** @class */ (function () {
        function c2s_check_login_vf() {
            this.optcode = 0;
            this.optname = "onCheck_login_vf";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_check_login_vf.read = function (self, bytes) {
            var parmLen;
            var i;
            //手机号
            self.mobile = bytes.readString();
            //验证码
            self.code = bytes.readString();
            //运营商
            self.server_name = bytes.readString();
        };
        return c2s_check_login_vf;
    }());
    hanlder.c2s_check_login_vf = c2s_check_login_vf;
    var c2s_set_money_pwd = /** @class */ (function () {
        function c2s_set_money_pwd() {
            this.optcode = 0;
            this.optname = "onSet_money_pwd";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_set_money_pwd.read = function (self, bytes) {
            var parmLen;
            var i;
            //取款密码
            self.pwd = bytes.readString();
        };
        return c2s_set_money_pwd;
    }());
    hanlder.c2s_set_money_pwd = c2s_set_money_pwd;
    var c2s_get_first_pay = /** @class */ (function () {
        function c2s_get_first_pay() {
            this.optcode = 0;
            this.optname = "onGet_first_pay";
        }
        return c2s_get_first_pay;
    }());
    hanlder.c2s_get_first_pay = c2s_get_first_pay;
    var c2s_set_role_info = /** @class */ (function () {
        function c2s_set_role_info() {
            this.optcode = 0;
            this.optname = "onSet_role_info";
        }
        /**
        从输入二进制流中读取结构体
        */
        c2s_set_role_info.read = function (self, bytes) {
            var parmLen;
            var i;
            //
            self.type = bytes.readInt32();
            //
            self.info = bytes.readString();
        };
        return c2s_set_role_info;
    }());
    hanlder.c2s_set_role_info = c2s_set_role_info;
})(hanlder || (hanlder = {}));
//# sourceMappingURL=protocols.js.map