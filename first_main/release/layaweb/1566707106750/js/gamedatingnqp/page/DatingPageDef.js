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
* 二八杠 该页面限制了类名首字母为大写其它为小写 Ebgang
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var DatingPageDef = /** @class */ (function (_super) {
            __extends(DatingPageDef, _super);
            function DatingPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DatingPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                DatingClip.init();
                PageDef._pageClassMap[DatingPageDef.PAGE_VIP] = page.VipPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_LOGIN_BIND] = LoginBindSjPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_BINDACCOUNT] = LoginBindZhPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_ZHLOGIN] = LoginZhPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_SJLOGIN] = LoginSjPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_HUODONGGONGGAO] = HuoDongGongGaoPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_BANGDING] = BangDingPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIP] = page.Tips;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIPS] = page.TipsPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GUEST_TIP] = page.GuestTipPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUIT_TIPS] = page.TipsQuit;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUD] = page.HudMainPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_XIAOXI] = page.MessagePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YANZHENGMA] = page.YanZhengMaPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_NEW_GONGGAO] = page.GongGaoOpenPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GENGGAINC] = page.GengGaiNCPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QIANDAOXQ] = page.QianDaoXqPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GET_REWARD] = page.RewardPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_CHANGGE_HEAD] = page.HeadChangePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GM] = page.GMPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_LOGIN] = page.LoginPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDMONEY] = page.BindMoneyPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_NEW_OPEN] = page.MailOpenPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUD_SHARE] = page.HudSharePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUKUAN] = page.QuKuanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_KEFU] = page.KeFuPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_XINXI] = page.GeRenXinXiPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI] = page.ChongZhiPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDYHK] = page.QuKuanBindYHKPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDZFB] = page.QuKuanBindZFBPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUODONG] = page.HuoDongPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUANMINDAILI] = page.TuiGuangPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANG1] = page.TuiGuangSavePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIQUJILU] = page.TiQuJiLvPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANGHELP] = page.TuiGuangHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN] = page.ZhuanPanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN_RECORD] = page.ZhuanPanRecordPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN_HELP] = page.ZhuanPanHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QIANDAO] = page.QianDaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GONGGAO] = page.GongGaoPage;
                // PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI_QUDAO] = ChongZhiQuDaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO] = page.YuEBaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO_HELP] = page.YuEBaoHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_JIANPAN] = page.JianPanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIP_GONGGAO] = page.TipGongGaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_VIP_UP] = page.VipUpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDPHONE] = page.LoginBindPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_FIRST_RECHARGE] = page.FirstRechargePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_SHEZHI_MIMA] = page.QuKuanSetPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_MIMA_TISHI] = page.QuKuanTishiPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_SHURU_MIMA] = page.QuKuanMimaPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUKUANSXDML] = page.QuKuanSXDMLPage;
                this["__needLoadAsset"] = [
                    DatingPath.atlas_dating_ui + 'bangding.atlas',
                    DatingPath.atlas_dating_ui + 'baobiao.atlas',
                    DatingPath.atlas_dating_ui + 'chongzhi.atlas',
                    DatingPath.atlas_dating_ui + 'dating.atlas',
                    DatingPath.atlas_dating_ui + 'datingrk.atlas',
                    DatingPath.atlas_dating_ui + 'datingsk.atlas',
                    DatingPath.atlas_dating_ui + 'denglu.atlas',
                    DatingPath.atlas_dating_ui + 'fenxiang.atlas',
                    DatingPath.atlas_dating_ui + 'geren.atlas',
                    DatingPath.atlas_dating_ui + 'gonggao.atlas',
                    DatingPath.atlas_dating_ui + 'guanwang.atlas',
                    DatingPath.atlas_dating_ui + 'huode.atlas',
                    DatingPath.atlas_dating_ui + 'huodong.atlas',
                    DatingPath.atlas_dating_ui + 'kehu.atlas',
                    DatingPath.atlas_dating_ui + 'qiandao.atlas',
                    DatingPath.atlas_dating_ui + 'qukuan.atlas',
                    DatingPath.atlas_dating_ui + 'tongyong.atlas',
                    DatingPath.atlas_dating_ui + 'top.atlas',
                    DatingPath.atlas_dating_ui + 'tuiguang.atlas',
                    DatingPath.atlas_dating_ui + 'xinxi.atlas',
                    DatingPath.atlas_dating_ui + 'yanzheng.atlas',
                    DatingPath.atlas_dating_ui + 'zhuanpan.atlas',
                    DatingPath.atlas_dating_ui + 'vip.atlas',
                    DatingPath.atlas_dating_ui + 'shezhi.atlas',
                    DatingPath.atlas_dating_ui + 'yuebao.atlas',
                    DatingPath.atlas_dating_ui + 'zhuce.atlas',
                    DatingPath.atlas_dating_ui + "shouchong.atlas",
                ];
            };
            /**
             * 初始化排序列表
             */
            DatingPageDef.initSortList = function (game_list) {
                this.GAME_SORT_LIST = [];
                for (var index = 0; index < game_list.length; index++) {
                    var arr = game_list[index];
                    if (!arr || arr.length < 2)
                        continue;
                    var gameStr = arr[0];
                    var type_list = arr[1];
                    if (!type_list || !type_list.length)
                        continue;
                    for (var index_1 = 0; index_1 < type_list.length; index_1++) {
                        var type = type_list[index_1];
                        var arr1 = this.GAME_SORT_LIST[type];
                        if (!arr1) {
                            arr1 = [];
                            this.GAME_SORT_LIST[type] = arr1;
                        }
                        if (arr1.indexOf(gameStr) == -1) {
                            arr1.push(gameStr);
                        }
                    }
                }
            };
            DatingPageDef.initPageDef = function () {
                if (!WebConfig.gamelist)
                    return;
                var game_list = [];
                var game_lists = [];
                for (var index = 0; index < WebConfig.gamelist.length; index++) {
                    var dz_str = WebConfig.gamelist[index];
                    if (typeof dz_str === "number")
                        continue;
                    if (!dz_str)
                        continue;
                    var str = dz_str.replace("DZ_", "");
                    var str1 = str.replace("r_", "");
                    if (str.indexOf("r_") == -1) {
                        GAME_TYPE_LIST[str1] && game_list.push([str, GAME_TYPE_LIST[str1]]);
                    }
                    else {
                        GAME_CARD_TYPE_LIST[str1] && game_list.push([str, GAME_CARD_TYPE_LIST[str1]]);
                    }
                }
                DatingPageDef.initSortList(game_list);
            };
            Object.defineProperty(DatingPageDef, "LOGIN_POPUP", {
                /**
                 * 登录弹窗界面列表
                 * 1：绑定送金
                 * 2：首充界面
                 * 3：热门活动
                 * 4：公告
                 * 5：游客绑定提示
                 * 6：推广官网气泡
                 * 7：推广活动气泡框
                 * 8：其他系统推广浮窗
                 */
                get: function () {
                    return {
                        "bdsq": DatingPageDef.PAGE_BINDMONEY,
                        "xsyd": "",
                        "schd": DatingPageDef.PAGE_FIRST_RECHARGE,
                        "rmhd": DatingPageDef.PAGE_HUODONG,
                        "yxgg": DatingPageDef.PAGE_XIAOXI,
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(DatingPageDef, "GONGGAO_GOTO", {
                /**
                 * 公告跳转界面列表
                 */
                get: function () {
                    return {
                        "2": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_ZHUANPAN,
                        "3": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_QIANDAO,
                        "4": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_QUANMINDAILI,
                        "5": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_CHONGZHI,
                        "6": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_HUODONG,
                        "7": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_YUEBAO,
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            DatingPageDef.GAME_NAME = "dating";
            //登录界面
            DatingPageDef.PAGE_LOGIN = "2";
            //主界面
            DatingPageDef.PAGE_HUD = "3";
            //消息
            DatingPageDef.PAGE_XIAOXI = "4";
            //游客提示
            DatingPageDef.PAGE_GUEST_TIP = "5";
            //取款
            DatingPageDef.PAGE_QUKUAN = "6";
            //客服
            DatingPageDef.PAGE_KEFU = "7";
            //绑定
            DatingPageDef.PAGE_BANGDING = "8";
            //打开公告
            DatingPageDef.PAGE_NEW_GONGGAO = "9";
            //绑定送钱
            DatingPageDef.PAGE_BINDMONEY = "10";
            //打开邮件
            DatingPageDef.PAGE_NEW_OPEN = "11";
            //个人信息
            DatingPageDef.PAGE_XINXI = "12";
            //充值列表
            DatingPageDef.PAGE_CHONGZHI = "13";
            //绑定银行卡
            DatingPageDef.PAGE_BINDYHK = "15";
            //绑定支付宝
            DatingPageDef.PAGE_BINDZFB = "16";
            //活动
            DatingPageDef.PAGE_HUODONG = "17";
            //全民代理
            DatingPageDef.PAGE_QUANMINDAILI = "18";
            //推广2
            DatingPageDef.PAGE_TUIGUANG1 = "19";
            //大转盘
            DatingPageDef.PAGE_ZHUANPAN = "21";
            //大转盘记录
            DatingPageDef.PAGE_ZHUANPAN_RECORD = "22";
            //大转盘帮助
            DatingPageDef.PAGE_ZHUANPAN_HELP = "23";
            //签到
            DatingPageDef.PAGE_QIANDAO = "24";
            //公告
            DatingPageDef.PAGE_HUODONGGONGGAO = "26";
            //修改头像
            DatingPageDef.PAGE_CHANGGE_HEAD = "28";
            //公告
            DatingPageDef.PAGE_GONGGAO = "30";
            //通用领取
            DatingPageDef.PAGE_GET_REWARD = "31";
            //签到详情
            DatingPageDef.PAGE_QIANDAOXQ = "32";
            //账号登陆
            DatingPageDef.PAGE_ZHLOGIN = "33";
            //手机登陆
            DatingPageDef.PAGE_SJLOGIN = "34";
            //更改昵称
            DatingPageDef.PAGE_GENGGAINC = "35";
            //首充
            DatingPageDef.PAGE_FIRST_RECHARGE = "36";
            //兑换所需打码量
            DatingPageDef.PAGE_QUKUANSXDML = "37";
            //提取明细
            DatingPageDef.PAGE_TIQUJILU = "38";
            //推广帮助
            DatingPageDef.PAGE_TUIGUANGHELP = "39";
            //HUD分享
            DatingPageDef.PAGE_HUD_SHARE = "40";
            //充值渠道
            DatingPageDef.PAGE_CHONGZHI_QUDAO = "42";
            //验证码滑屏
            DatingPageDef.PAGE_YANZHENGMA = "43";
            //余额宝
            DatingPageDef.PAGE_YUEBAO = "44";
            //余额宝帮助
            DatingPageDef.PAGE_YUEBAO_HELP = "45";
            //键盘
            DatingPageDef.PAGE_JIANPAN = "48";
            //停机公告界面
            DatingPageDef.PAGE_TIP_GONGGAO = "51";
            //VIP界面
            DatingPageDef.PAGE_VIP = "52";
            //VIP提升界面
            DatingPageDef.PAGE_VIP_UP = "54";
            //登录注册绑定界面
            DatingPageDef.PAGE_BINDPHONE = "55";
            //提示
            DatingPageDef.PAGE_TIP = "100";
            //提示
            DatingPageDef.PAGE_TIPS = "101";
            //退出提示
            DatingPageDef.PAGE_QUIT_TIPS = "102";
            //取款密码设置
            DatingPageDef.PAGE_SHEZHI_MIMA = "103";
            //取款密码提示
            DatingPageDef.PAGE_MIMA_TISHI = "104";
            //输入取款密码
            DatingPageDef.PAGE_SHURU_MIMA = "105"; //gm
            DatingPageDef.PAGE_GM = "999";
            /**
             * 棋牌
             */
            DatingPageDef.TYPE_CHESS = 0;
            /**
             *	百人
             */
            DatingPageDef.TYPE_BAIREN = 1;
            /**
             * 电玩
             */
            DatingPageDef.TYPE_GAME = 2;
            /**
             * 房卡
             */
            DatingPageDef.TYPE_CARD = 3;
            /**
             * 游戏筛选列表
             */
            DatingPageDef.GAME_SORT_LIST = [];
            return DatingPageDef;
        }(game.gui.page.PageDef));
        page.DatingPageDef = DatingPageDef;
        var GAME_CARD_TYPE_LIST = {
        // "ddz": [DatingPageDef.TYPE_CARD],
        // "majiang": [DatingPageDef.TYPE_CARD],
        // "niuniu": [
        // 	DatingPageDef.TYPE_CARD,
        // ],
        // "paodekuai": [
        // 	DatingPageDef.TYPE_CARD,
        // ],
        // "shisanshui": [
        // 	DatingPageDef.TYPE_CARD,
        // ],
        // "tbniuniu": [
        // 	DatingPageDef.TYPE_CARD,
        // ],
        // "zjh": [
        // 	DatingPageDef.TYPE_CARD,
        // ],
        };
        var GAME_TYPE_LIST = {
            "baijiale": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "bairendezhou": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "benchibaoma": [
                DatingPageDef.TYPE_GAME,
            ],
            "blackjack": [
                DatingPageDef.TYPE_CHESS,
            ],
            "brniuniu": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "buyu": [
                DatingPageDef.TYPE_GAME,
            ],
            "dezhou": [
                DatingPageDef.TYPE_CHESS,
            ],
            "ebgang": [
                DatingPageDef.TYPE_CHESS,
            ],
            // "elslp": [
            // 	DatingPageDef.TYPE_GAME,
            // ],
            "honghei": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "longhu": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "niuniu": [
                DatingPageDef.TYPE_CHESS,
            ],
            "paijiu": [
                DatingPageDef.TYPE_CHESS,
            ],
            "sangong": [
                DatingPageDef.TYPE_CHESS,
            ],
            // "saolei": [
            // 	DatingPageDef.TYPE_GAME,
            // ],
            "shuiguoji": [
                DatingPageDef.TYPE_GAME,
            ],
            "tbniuniu": [
                DatingPageDef.TYPE_CHESS,
            ],
            "toubao": [
                DatingPageDef.TYPE_BAIREN,
            ],
            "zjh": [
                DatingPageDef.TYPE_CHESS,
            ],
            "zoo": [
                DatingPageDef.TYPE_GAME,
            ],
        };
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=DatingPageDef.js.map