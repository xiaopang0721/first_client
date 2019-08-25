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
var gamedating;
(function (gamedating) {
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
                PageDef._pageClassMap[DatingPageDef.PAGE_TIP] = page.Tips;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIPS] = page.TipsPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUD] = page.HudMainPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YANZHENGMA] = page.YanZhengMaPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDPHONE] = page.LoginBindSjPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDACCOUNT] = page.LoginBindZhPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GENGGAINC] = page.GengGaiNCPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QIANDAOXQ] = page.QianDaoXqPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GET_REWARD] = page.RewardPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BAOXIANXIANG] = page.BaoXianXiangPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_CHANGGE_HEAD] = page.HeadChangePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GM] = page.GMPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_LOGIN] = page.LoginPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHLOGIN] = page.LoginZhPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_SJLOGIN] = page.LoginSjPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_XIAOXI] = page.MailPage;
                PageDef._pageClassMap[DatingPageDef.PANEL_NEW_OPEN] = page.MailOpenPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_SHARE] = page.SharePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUD_SHARE] = page.HudSharePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BANGDING] = page.BangDingPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUKUAN] = page.QuKuanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_KEFU] = page.KeFuPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_XINXI] = page.GeRenXinXiPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI] = page.ChongZhiPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BAOBIAO] = page.BaoBiaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDMONEY] = page.BindMoneyPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDYHK] = page.QuKuanBindYHKPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_BINDZFB] = page.QuKuanBindZFBPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUODONG] = page.HuoDongPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QUANMINDAILI] = page.TuiGuangPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANG1] = page.TuiGuangSavePage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIQUJILU] = page.TiQuJiLvPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANGHELP] = page.TuiGuangHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GUANWANG] = page.GuanWangPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN] = page.ZhuanPanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN_RECORD] = page.ZhuanPanRecordPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN_HELP] = page.ZhuanPanHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_QIANDAO] = page.QianDaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TOP] = page.TopPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_HUODONGGONGGAO] = page.HuoDongGongGaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_GONGGAO] = page.GongGaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI_QUDAO] = page.ChongZhiQuDaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO] = page.YuEBaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO_HELP] = page.YuEBaoHelpPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO_RECORD] = page.YuEBaoRecordPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO_CUNQU] = page.YuEBaoCunQuPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_JIANPAN] = page.JianPanPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_TIP_GONGGAO] = page.TipGongGaoPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_VIP] = page.VipPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_VIP_LEVEL] = page.VipLevelPage;
                PageDef._pageClassMap[DatingPageDef.PAGE_VIP_UP] = page.VipUpPage;
                this["__needLoadAsset"] = [
                    DatingPath.sk_dating + "DZ_baijiale.png",
                    DatingPath.sk_dating + "DZ_baijiale.sk",
                    DatingPath.sk_dating + "DZ_bairendezhou.png",
                    DatingPath.sk_dating + "DZ_bairendezhou.sk",
                    DatingPath.sk_dating + "DZ_benchibaoma.png",
                    DatingPath.sk_dating + "DZ_benchibaoma.sk",
                    DatingPath.sk_dating + "DZ_blackjack.png",
                    DatingPath.sk_dating + "DZ_blackjack.sk",
                    DatingPath.sk_dating + "DZ_dezhou.png",
                    DatingPath.sk_dating + "DZ_dezhou.sk",
                    DatingPath.sk_dating + "DZ_brniuniu.png",
                    DatingPath.sk_dating + "DZ_brniuniu.sk",
                    DatingPath.sk_dating + "DZ_buyu.png",
                    DatingPath.sk_dating + "DZ_buyu.sk",
                    DatingPath.sk_dating + "DZ_ddz.png",
                    DatingPath.sk_dating + "DZ_ddz.sk",
                    DatingPath.sk_dating + "DZ_ebgang.png",
                    DatingPath.sk_dating + "DZ_ebgang.sk",
                    DatingPath.sk_dating + "DZ_honghei.png",
                    DatingPath.sk_dating + "DZ_honghei.sk",
                    DatingPath.sk_dating + "DZ_longhu.png",
                    DatingPath.sk_dating + "DZ_longhu.sk",
                    DatingPath.sk_dating + "DZ_niuniu.png",
                    DatingPath.sk_dating + "DZ_niuniu.sk",
                    DatingPath.sk_dating + "DZ_paijiu.png",
                    DatingPath.sk_dating + "DZ_paijiu.sk",
                    DatingPath.sk_dating + "DZ_toubao.png",
                    DatingPath.sk_dating + "DZ_toubao.sk",
                    DatingPath.sk_dating + "DZ_sangong.png",
                    DatingPath.sk_dating + "DZ_sangong.sk",
                    DatingPath.sk_dating + "DZ_shisanshui.png",
                    DatingPath.sk_dating + "DZ_shisanshui.sk",
                    DatingPath.sk_dating + "DZ_shuiguoji.png",
                    DatingPath.sk_dating + "DZ_shuiguoji.sk",
                    DatingPath.sk_dating + "DZ_tbniuniu.png",
                    DatingPath.sk_dating + "DZ_tbniuniu.sk",
                    DatingPath.sk_dating + "DZ_zjh.png",
                    DatingPath.sk_dating + "DZ_zjh.sk",
                    DatingPath.sk_dating + "DZ_paodekuai.png",
                    DatingPath.sk_dating + "DZ_paodekuai.sk",
                    DatingPath.sk_dating + "DZ_zoo.png",
                    DatingPath.sk_dating + "DZ_zoo.sk",
                    DatingPath.sk_dating + "DZ_saolei.png",
                    DatingPath.sk_dating + "DZ_saolei.sk",
                    DatingPath.sk_dating + "DZ_caishendao.png",
                    DatingPath.sk_dating + "DZ_caishendao.sk",
                    DatingPath.sk_dating + "DZ_majiang.png",
                    DatingPath.sk_dating + "DZ_majiang.sk",
                    DatingPath.atlas_dating_ui + 'bangding.atlas',
                    DatingPath.atlas_dating_ui + 'baobiao.atlas',
                    DatingPath.atlas_dating_ui + 'baoxianxiang.atlas',
                    DatingPath.atlas_dating_ui + 'chongzhi.atlas',
                    DatingPath.atlas_dating_ui + 'dating.atlas',
                    DatingPath.atlas_dating_ui + 'datingrk.atlas',
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
                    DatingPath.atlas_dating_ui + 'touxiang.atlas',
                    DatingPath.atlas_dating_ui + 'tuiguang.atlas',
                    DatingPath.atlas_dating_ui + 'xinxi.atlas',
                    DatingPath.atlas_dating_ui + 'yanzheng.atlas',
                    DatingPath.atlas_dating_ui + 'zhuanpan.atlas',
                    DatingPath.atlas_dating_ui + 'vip.atlas',
                    DatingPath.atlas_dating_ui + 'shezhi.atlas',
                    DatingPath.atlas_dating_ui + 'yuebao.atlas',
                    DatingPath.atlas_dating_ui + 'zhuce.atlas',
                    DatingPath.ui_dating + "tuiguang/tu_tg3.jpg",
                ];
            };
            /**
             * 初始化排序列表
             */
            DatingPageDef.initSortList = function (game_list) {
                this.GAME_SORT_LIST = {};
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
            DatingPageDef.GAME_NAME = "dating";
            //登录界面
            DatingPageDef.PAGE_LOGIN = "2";
            //主界面
            DatingPageDef.PAGE_HUD = "3";
            //消息
            DatingPageDef.PAGE_XIAOXI = "4";
            //分享
            DatingPageDef.PAGE_SHARE = "5";
            //取款
            DatingPageDef.PAGE_QUKUAN = "6";
            //客服
            DatingPageDef.PAGE_KEFU = "7";
            //绑定
            DatingPageDef.PAGE_BANGDING = "8";
            //绑定送钱
            DatingPageDef.PAGE_BINDMONEY = "10";
            //打开邮件
            DatingPageDef.PANEL_NEW_OPEN = "11";
            //个人信息
            DatingPageDef.PAGE_XINXI = "12";
            //充值列表
            DatingPageDef.PAGE_CHONGZHI = "13";
            //报表
            DatingPageDef.PAGE_BAOBIAO = "14";
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
            //官网
            DatingPageDef.PAGE_GUANWANG = "20";
            //大转盘
            DatingPageDef.PAGE_ZHUANPAN = "21";
            //大转盘记录
            DatingPageDef.PAGE_ZHUANPAN_RECORD = "22";
            //大转盘帮助
            DatingPageDef.PAGE_ZHUANPAN_HELP = "23";
            //签到
            DatingPageDef.PAGE_QIANDAO = "24";
            //排行榜
            DatingPageDef.PAGE_TOP = "25";
            //公告
            DatingPageDef.PAGE_HUODONGGONGGAO = "26";
            //修改头像
            DatingPageDef.PAGE_CHANGGE_HEAD = "28";
            //保险箱
            DatingPageDef.PAGE_BAOXIANXIANG = "29";
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
            //绑定账号
            DatingPageDef.PAGE_BINDACCOUNT = "36";
            //绑定手机
            DatingPageDef.PAGE_BINDPHONE = "37";
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
            //余额宝记录
            DatingPageDef.PAGE_YUEBAO_RECORD = "46";
            //余额宝存取
            DatingPageDef.PAGE_YUEBAO_CUNQU = "47";
            //键盘
            DatingPageDef.PAGE_JIANPAN = "48";
            //停机公告界面
            DatingPageDef.PAGE_TIP_GONGGAO = "51";
            //VIP界面
            DatingPageDef.PAGE_VIP = "52";
            //VIP等级界面
            DatingPageDef.PAGE_VIP_LEVEL = "53";
            //VIP提升界面
            DatingPageDef.PAGE_VIP_UP = "54";
            //提示
            DatingPageDef.PAGE_TIP = "100";
            //提示
            DatingPageDef.PAGE_TIPS = "101";
            //gm
            DatingPageDef.PAGE_GM = "999";
            /**
             * 游戏筛选列表
             */
            DatingPageDef.GAME_SORT_LIST = {};
            /**
             * 登录弹窗界面列表
             */
            DatingPageDef.LOGIN_POPUP = {
                "1": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_BINDMONEY,
                "2": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_HUODONG,
                "3": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_HUODONGGONGGAO,
            };
            /**
             * 公告跳转界面列表
             */
            DatingPageDef.GONGGAO_GOTO = {
                "2": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_ZHUANPAN,
                "3": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_QIANDAO,
                "4": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_QUANMINDAILI,
                "5": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_CHONGZHI,
                "6": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_HUODONG,
                "7": DatingPageDef.GAME_NAME + DatingPageDef.PAGE_YUEBAO,
            };
            return DatingPageDef;
        }(game.gui.page.PageDef));
        page.DatingPageDef = DatingPageDef;
        var GAME_CARD_TYPE_LIST = {
            "ddz": [DatingPageDef.TYPE_CARD],
            "majiang": [DatingPageDef.TYPE_CARD],
            "niuniu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CARD,
            ],
            "paodekuai": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CARD,
            ],
            "shisanshui": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CARD,
            ],
            "tbniuniu": [
                DatingPageDef.TYPE_CARD,
            ],
            "zjh": [
                DatingPageDef.TYPE_CARD,
            ],
        };
        var GAME_TYPE_LIST = {
            "baijiale": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
                DatingPageDef.TYPE_BAIREN,
            ],
            "bairendezhou": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
                DatingPageDef.TYPE_BAIREN,
            ],
            "benchibaoma": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_GAME,
                DatingPageDef.TYPE_BAIREN,
            ],
            "blackjack": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "brniuniu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
                DatingPageDef.TYPE_BAIREN,
            ],
            "buyu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_GAME,
                DatingPageDef.TYPE_BUYU,
            ],
            "caishendao": [
                DatingPageDef.TYPE_HOT,
            ],
            "dezhou": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "ebgang": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "elslp": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_GAME,
                DatingPageDef.TYPE_BAIREN,
            ],
            "honghei": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
                DatingPageDef.TYPE_BAIREN,
            ],
            "longhu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
                DatingPageDef.TYPE_BAIREN,
            ],
            "niuniu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "paijiu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "sangong": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "saolei": [
                DatingPageDef.TYPE_GAME,
            ],
            "shuiguoji": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_GAME,
            ],
            "tbniuniu": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "toubao": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_GAME,
                DatingPageDef.TYPE_BAIREN,
            ],
            "zjh": [
                DatingPageDef.TYPE_HOT,
                DatingPageDef.TYPE_CHESS,
            ],
            "zoo": [
                DatingPageDef.TYPE_GAME,
            ],
        };
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=DatingPageDef.js.map