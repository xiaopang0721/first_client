/**
* 页面定义
*/
module game.gui.page {
	export interface ClassMap {
		[index: string]: Object;
	}

	export class PageDef {
		// 加载界面
		static PAGE_LOADING: string = "1";
		//断线重连锁屏
		static PAGE_WAITEFFECT: string = "99";
		//页面集合
		protected static _pageClassMap: ClassMap = {};
		public static init(): void {
			PageDef._pageClassMap[PageDef.PAGE_LOADING] = Loading;
			PageDef._pageClassMap[PageDef.PAGE_WAITEFFECT] = WaitEffectPage;
		}

		public static getPageClass(key: string): Object {
			return PageDef._pageClassMap[key];
		}

		//其实就为了 能取到正确的key
		static myinit(str: string) {
			for (let key in this) {
				if (typeof this[key] === 'string') {
					if (PageDef[key]) {
						delete this[key];
					}
					else if (key == "GAME_NAME") {//游戏key
						this[key] = str;
					}
					else if (this[key].indexOf(str) == -1) {
						this[key] = str + this[key]
					}
				}
			}
			if (!this["GAME_NAME"])//补差价
			{
				this["GAME_NAME"] = str;
			}

		}

		/**
		 * 棋牌
		 */
		static TYPE_HOT: number | string = 0;
		/**
		 * 棋牌
		 */
		static TYPE_CHESS: number | string = 1;
		/**
		 * 房卡
		 */
		static TYPE_CARD: number | string = 2;
		/**
		 * 电玩
		 */
		static TYPE_GAME: number | string = 3;
		/**
		 * 捕鱼
		 */
		static TYPE_BUYU: number | string = 4;
		/**
		 *	百人
		 */
		static TYPE_BAIREN: number | string = 5;

		/**
		 *	姚记版皮肤
		 */
		static BASE_PLATFORM_TYPE_DAZHONGQP: string = "dazhongqp";
		/**
		 *	暗金版皮肤
		 */
		static BASE_PLATFORM_TYPE_AJQP: string = "ajqp";
		/**
		 *	新版皮肤
		 */
		static BASE_PLATFORM_TYPE_NQP: string = "nqp";

		/**
		 * 获取游戏名字
		 * @param str 
		 */
		static getNameById(str, pf_code = Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) {
			let game_name = ""
			switch (pf_code) {
				case Web_operation_fields.GAME_PLATFORM_TYPE_AEQP:
					game_name = GAME_NAME_LIST[str]
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_KYQP:
					game_name = GAME_NAME_LIST_KY[str]
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP:
					game_name = GAME_NAME_LIST_JDB[str]
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_AGQP:
					game_name = GAME_NAME_LIST_AG[str]
					break
			}
			return game_name
		}

		/**
		 * 获取游戏是否开启入口
		 * @param type 
		 */
		static getIsOpenEnter(type: string | number, gameID) {
			if (type == PageDef.TYPE_CARD) {
				return GAME_CARD_CLOSED_LIST.indexOf(gameID) == -1;
			}
			return GAME_CLOSED_LIST.indexOf(gameID) == -1;
		}


	}

	const GAME_CLOSED_LIST = [
		"caishendao", "majiang", "saolei", "zoo"
	]
	const GAME_CARD_CLOSED_LIST = [
		"tbniuniu", "zjh", "majiang"
	]

	const GAME_NAME_LIST = {
		"majiang": "四川麻将",
		"niuniu": "抢庄牛牛",
		"mpniuniu": "看牌抢庄牛牛",
		"tbniuniu": "通比牛牛",
		"zjh": "炸金花",
		"baijiale": "百家乐",
		"bairendezhou": "百人德州",
		"benchibaoma": "奔驰宝马",
		"blackjack": "21点",
		"brniuniu": "百人牛牛",
		"buyu": "AE捕鱼王",
		"caishendao": "财神到",
		"dezhou": "德州扑克",
		"ebgang": "二八杠",
		"elslp": "俄罗斯轮盘",
		"honghei": "红黑大战",
		"longhu": "龙虎斗",
		"paijiu": "牌九",
		"sangong": "三公",
		"saolei": "红包扫雷",
		"shuiguoji": "水果机",
		"toubao": "皇冠骰宝",
		"zoo": "飞禽走兽",
		"rddz": "房卡-斗地主",
		"rniuniu": "房卡-抢庄牛牛",
		"rpaodekuai": "房卡-跑得快",
		"rshisanshui": "房卡-十三水",
		"wxsaoleihb": "微信红包扫雷",
	}

	//开元游戏名字
	const GAME_NAME_LIST_KY = {
		"620": "德州扑克",
		"720": "二八杠",
		"830": "抢庄牛牛",
		"220": "炸金花",
		"860": "三公",
		"900": "押庄龙虎",
		"600": "21点",
		"870": "通比牛牛",
		"230": "极速炸金花",
		"730": "抢庄牌九",
		"630": "十三水",
		"610": "斗地主",
		"910": "百家乐",
		"920": "森林舞会",
		"930": "百人牛牛",
		"1950": "万人炸金花",
		"650": "血流成河",
		"890": "看牌抢庄牛牛",
		"740": "二人麻将",
		"1350": "幸运转盘",
		"1940": "金鲨银鲨",
		"1960": "奔驰宝马",
		"1980": "百人骰宝",
		"1810": "单挑牛牛",
		"1990": "炸金牛",
		"1850": "押宝抢庄牛牛",
		"510": "红包捕鱼",
		"1355": "搏一搏",
		"1970": "五星宏辉",
		"1860": "赌场扑克",
		"1370": "港式梭哈",
		"1690": "血战骰宝",
		"1610": "幸运夺宝",
	}

	//JDB游戏名字
	const GAME_NAME_LIST_JDB = {
		"8001": "幸运龙",
		"8002": "唐伯虎点秋香",
		"8003": "变脸",
		"8004": "悟空",
		"8005": "骆马大冒险",
		"8006": "台湾黑熊",
		"8007": "幸运麟",
		"8014": "招财狮",
		"8015": "月光秘宝",
		"8016": "上班族狂想曲",
		"8017": "过新年",
		"8018": "拿破仑",
		"8019": "文房四宝",
		"8020": "芝麻开门",
		"8021": "黄金香蕉帝国",
		"8022": "麻雀无双",
		"8023": "奥林匹亚神庙",
		"8024": "水晶王国",
		"8025": "神偷妙贼",
		"8026": "热舞教父",
		"8027": "料理厨王",
		"8028": "幸运淘金鼠",
		"8029": "奇幻糖果岛",
		"8030": "疯狂科学家",
		"8031": "金饺子",
		"8034": "金钱侠",
		"8035": "幸运凤",
		"8036": "龙王",
		"8037": "魔术秀",
		"8044": "江山美人",
		"8046": "关公",
		"8047": "变脸2",
		"8048": "芝麻开门2",
		"8049": "唐伯虎点秋香2",
		"8050": "马上有钱",
		"8051": "喜洋羊",
		"14001": "斗鸡",
		"14002": "玛雅大冒险",
		"14003": "屌丝熊猫",
		"14004": "塞尔达传说",
		"14005": "包大人",
		"14006": "亿万富翁",
		"14007": "一拳超人",
		"14008": "神龙大侠",
		"14010": "飞龙在天",
		"14011": "银河护卫队",
		"14012": "街头霸王",
		"14013": "春宵苦短",
		"14015": "星球大战",
		"14016": "王牌特工",
		"14017": "少女前线",
		"14018": "妲己",
		"14019": "宝石物语",
		"14020": "魔法乳神",
		"14021": "钱滚钱",
		"14022": "采矿土豪",
		"14023": "赌王扑克",
		"14025": "幸运赛车",
		"14026": "发大财",
		"14027": "好运777",
		"14029": "东方神兽",
		"14030": "三倍金刚",
		"14033": "飞鸟派对",
		"14034": "狗来富",
		"14035": "龙舞",
		"14036": "超级牛B",
		"14038": "埃及夺宝",
		"14039": "开运夺宝",
		"14040": "七海夺宝",
		"14042": "聚宝盆",
		"15001": "金鸡报囍",
		"15002": "齐天大圣",
		"15004": "火牛阵",
		"15005": "幸运福娃",
		"15006": "印加帝国",
		"15009": "忍者大进击",
		"15010": "熊猫厨王",
		"15011": "后羿传",
		"15012": "五福临门",
		"15013": "九尾狐",
		"7001": "龙王捕鱼",
		"7002": "龙王捕鱼2",
		"7003": "财神捕鱼",
		"7004": "五龙捕魚",
		"9001": "小玛莉",
		"9002": "新年快乐",
		"9003": "飞禽走兽",
		"9004": "啤酒大亨",
		"9006": "花果山传奇",
		"9007": "超激发水果盘",
		"12001": "财神宾果",
		"12002": "金鸡福彩",
		"12003": "快乐六星彩",
	}

	//AG游戏名字
	const GAME_NAME_LIST_AG = {
		"0": "大厅",
		"1": "旗舰厅",
		"2": "国际厅",
		"3": "多台",
		"4": "包桌",
		"5": "竞咪",
		"6": "捕鱼王",
		"8": "电子游戏",
		"9": "活动专厅",
		"11": "HTML5",
		"12": "旗舰厅百家乐",
		"13": "国际厅百家乐",
		"15": "国际厅龙虎",
		"17": "AGIN比赛厅",
		"18": "视讯游戏大厅",
		"21": "旗舰厅百家乐",
		"22": "国际厅百家乐",
		"23": "旗舰厅龙虎",
		"24": "国际厅龙虎",
		"25": "旗舰厅轮盘",
		"26": "国际厅轮盘",
		"27": "旗舰厅骰宝",
		"30": "包桌百家乐",
		"31": "LED包桌百家乐",
		"32": "牛牛",
		"33": "21點",
		"34": "直播厅",
		"36": "炸金花",
		"37": "斗牛",
		"38": "欧洲厅",
		"39": "新世界厅",
		"40": "欧洲厅百家乐",
		"41": "共咪百家乐",
		"42": "语音百家乐",
		"C001": "国际厅百家乐C1台",
		"C002": "国际厅百家乐C2台",
		"C003": "国际厅百家乐C3台",
		"C005": "国际厅百家乐C5台",
		"C006": "国际厅百家乐C6台",
		"C007": "国际厅龙虎C7台",
		"C008": "国际厅轮盘C8台",
		"C010": "国际厅21点C10台",
		"C015": "国际厅骰宝C15台",
		"C016": "国际厅炸金花C16台",
		"C019": "国际厅斗牛C19台",
		"C021": "国际厅百家乐C21台",
		"C022": "国际厅百家乐C22台",
		"B001": "旗舰厅百家乐B1台",
		"B002": "旗舰厅百家乐B2台",
		"B003": "旗舰厅百家乐B3台",
		"B004": "旗舰厅百家乐B4台",
		"B005": "旗舰厅百家乐B5台",
		"B006": "旗舰厅百家乐B6台",
		"B007": "旗舰厅保险百家乐B7台",
		"B021": "旗舰厅龙虎B21台",
		"B022": "旗舰厅牛牛B22台",
		"B023": "旗舰厅轮盘B23台",
		"B025": "旗舰厅骰宝B25台",
		"V012": "竞咪百家乐L12台",
		"V015": "竞咪百家乐L15台",
		"V016": "竞咪百家乐L16台",
		"V017": "竞咪百家乐L17台",
		"V018": "竞咪百家乐L18台",
		"V019": "竞咪百家乐L19台",
		"V020": "竞咪百家乐L20台",
		"D001": "欧洲厅轮盘D1台",
		"D021": "欧洲厅21点D21台",
		"D051": "欧洲厅百家乐D51台",
		"D052": "欧洲厅百家乐D52台",
		"D053": "欧洲厅百家乐D53台",
		"D054": "欧洲厅百家乐D54台",
		"D022": "欧洲厅21点D22台",
		"D023": "欧洲厅21点D23台",
		"E001": "新世界厅百家乐E1台",
		"E002": "新世界厅百家乐E2台",
		"E003": "新世界厅百家乐E3台",
		"E005": "新世界厅百家乐E5台",
		"E006": "新世界厅百家乐E6台",
		"E007": "新世界厅百家乐E7台",
		"E008": "新世界厅百家乐E8台",
		"E009": "新世界厅百家乐E9台",
		"E010": "新世界厅龙虎E10台",
		"E011": "新世界厅炸金花E11台",
		"F001": "语音百家乐F1台",
		"F002": "语音百家乐F2台",
		"501": "水果拉霸",
		"101": "水果拉霸",
		"502": "新视频扑克(杰克高手)",
		"102": "新视频扑克(杰克高手)",
		"503": "美女沙排",
		"504": "运财羊",
		"505": "武圣传",
		"507": "极速幸运轮",
		"508": "太空漫游",
		"108": "太空漫游",
		"509": "复古花园",
		"109": "复古花园",
		"510": "关东煮",
		"511": "牧场咖啡",
		"512": "甜一甜屋",
		"513": "日本武士",
		"113": "日本武士",
		"514": "象棋老虎机",
		"114": "象棋老虎机",
		"515": "麻将老虎机",
		"115": "麻将老虎机",
		"516": "西洋棋老虎机",
		"517": "开心农场",
		"117": "开心农场",
		"518": "夏日营地",
		"118": "夏日营地",
		"519": "海底漫游",
		"520": "鬼马小丑",
		"521": "机动乐园",
		"522": "惊吓鬼屋",
		"523": "疯狂马戏团",
		"524": "海洋剧场",
		"525": "水上乐园",
		"526": "空中战争",
		"527": "摇滚狂迷",
		"528": "越野机车",
		"529": "埃及奥秘",
		"530": "欢乐时光",
		"531": "侏罗纪",
		"532": "土地神",
		"533": "布袋和尚",
		"534": "正财神",
		"535": "武财神",
		"135": "武财神",
		"536": "偏财神",
		"537": "性感女仆",
		"WHGWA01": "钻石女王",
		"T023": "包桌",
		"T024": "包桌",
		"T025": "包桌",
		"T026": "包桌",
		"T027": "包桌",
		"T028": "包桌",
		"T029": "包桌",
		"T030": "包桌",
		"L010": "竞咪包桌L10台",
		"L011": "竞咪包桌L11台",
		"L013": "竞咪包桌L13台",
		"YFD": "森林舞会",
		"YBEN": "奔驰宝马",
		"YHR": "極速赛马",
		"YGS": "猜猜乐",
		"YFR": "水果拉霸",
		"YDZ": "德州牛仔",
		"YBIR": "飞禽走兽",
		"YFP": "水果派对",
		"YMFD": "森林舞会多人版",
		"YMFR": "水果拉霸多人版",
		"YMBN": "百人牛牛",
		"YGFS": "多宝水果拉霸",
		"YJFS": "彩金水果拉霸",
		"YMBI": "飞禽走兽多人版",
		"YMBA": "牛牛对战",
		"YMBZ": "奔驰宝马多人版",
		"YMAC": "动物狂欢",
		"YMJW": "西游争霸",
		"YMJH": "翻倍炸金花",
		"YMBF": "刺激战场",
		"YMSG": "斗三公",
		"YMJJ": "红黑梅方",
		"YJTW": "彩金宝藏世界",
		"YMD2": "疯狂德州",
		"YJBZ": "彩金奔驰宝马",
		"YMSL": "海陆争霸",
		"YMDD": "百人推筒子",
		"YMKM": "功夫万条筒",
		"YMDL": "双喜炸金花",
		"YMPL": "凤凰传奇",
		"YMBJ": "全民21点",
		"YMLD": "福星推筒子",
		"YMGG": "YP刮刮卡",
		"YMFW": "财富转盘",
		"YMBS": "射龙门",
		"YMEF": "11选5",
		"YMLS": "幸运7",
		"YMPP": "宠物乐园",
		"YJBI": "彩金飞禽走兽",
		"YMRA": "皇牌ACE",
		"WH31": "巨龙宝藏",
		"WH49": "摔跤英雄",
		"WH25": "胡桃夹子",
		"WH65": "神庙丽影",
		"WC02": "疯狂弹球",
		"SB56": "赌城之夜",
		"WH54": "极品飙车",
		"WH26": "寿司大食客",
		"WH40": "皇家戏台",
		"WH44": "蒸汽战争",
		"SB58": "魅惑魔女",
		"WH36": "横行霸道",
		"WH42": "古惑仔",
		"WH55": "神奇宠物",
		"SB57": "魔龙",
		"WH19": "财宝塔罗",
		"WH28": "埃及宝藏",
		"WH27": "和风剧院",
		"WH30": "点石成金",
		"WH23": "封神演义",
		"WH07": "五狮进宝",
		"WH02": "圣女贞德",
		"WH12": "发财熊猫",
		"WH35": "招财锦鲤",
		"WH38": "十二生肖",
		"WH20": "葫芦兄弟",
		"WH32": "贪玩蓝月",
		"WH34": "内衣橄榄球",
		"WH18": "白雪公主",
		"SB55": "多宝鱼虾蟹",
		"WC01": "跳跳乐",
		"WH24": "僵尸来袭",
		"WH21": "永恒之吻",
		"WH29": "狂野女巫",
		"WH22": "恐怖嘉年华",
		"SC05": "百搭777",
		"WA01": "钻石女王",
		"WH17": "嫦娥奔月",
		"WH10": "爱丽丝大冒险",
		"WH11": "战火风云",
		"WH06": "亚瑟王",
		"WH04": "穆夏女神",
		"EP02": "龙虎",
		"WH03": "冠军足球",
		"SB51": "王者传说",
		"EP03": "骰宝",
		"WH01": "阿里巴巴",
		"SB47": "神奇宝石",
		"SB50": "XIN哥来了",
		"SB49": "金龙珠",
		"SB45": "猛龙传奇",
		"SC03": "金拉霸",
		"SX02": "街头烈战",
		"800": "富贵金鸡",
		"XG13": "美女大格斗",
		"XG11": "中秋佳节",
		"XG12": "韩风劲舞",
		"XG16": "黄金对垒",
		"XG10": "龙舟竞渡",
		"SB31": "天空守护者",
		"SB36": "捕鱼王者",
		"SB35": "欧洲列强争霸",
		"SB34": "冰河世界",
		"SB32": "齐天大圣",
		"SB33": "糖果碰碰乐",
		"FRU2": "水果拉霸2",
		"SB37": "上海百乐门",
		"PKBD": "百搭二王",
		"PKBB": "红利百搭",
		"XG01": "龙珠",
		"XG02": "幸运8",
		"XG03": "闪亮女郎",
		"XG04": "金鱼",
		"XG05": "中国新年",
		"XG06": "海盗王",
		"XG07": "鲜果狂热",
		"XG08": "小熊猫",
		"XG09": "大豪客",
		"SB38": "竞技狂热",
		"SB30": "灵猴献瑞",
		"AV01": "性感女仆",
		"SB20": "摇滚狂迷",
		"SB22": "埃及奥秘",
		"SB23": "欢乐时光",
		"SB19": "空中战争",
		"SB21": "越野机车",
		"SB24": "侏罗纪",
		"TGLW": "极速幸运轮",
		"SB25": "土地神",
		"SB26": "布袋和尚",
		"SB27": "正财神",
		"SB28": "武财神",
		"SB29": "偏财神",
		"SB13": "鬼马小丑",
		"SB14": "机动乐园",
		"SB15": "惊吓鬼屋",
		"SB16": "疯狂马戏团",
		"SB17": "海洋剧场",
		"SB18": "水上乐园",
		"SB07": "象棋老虎机",
		"SB09": "西洋棋老虎机",
		"SB10": "开心农场",
		"SB12": "海底漫游",
		"SB08": "麻将老虎机",
		"SB11": "夏日营地",
		"SB01": "太空漫游",
		"SB03": "关东煮",
		"SB04": "牧场咖啡",
		"SB05": "甜一甜屋",
		"SB06": "日本武士",
		"SB02": "复古花园",
		"SLM3": "武圣传",
		"SLM1": "美女沙排",
		"SLM2": "运财羊",
		"PKBJ": "杰克高手",
		"FRU": "水果拉霸",
		"wotp": "凤凰之道",
		"ccccny": "币币币",
		"tigc": "虎爪",
		"anwild": "狂野蟒蛇",
		"yclong": "云从龙",
		"xufe": "玄圃联欢",
		"pisa": "武士元素",
		"popc": "幸运盖尔",
		"phtd": "超级法老王宝藏",
		"jnglg": "丛林巨兽",
		"epa": "猿人传奇",
		"drgch": "龙之战士",
		"ght_a": "烈焰钻石",
		"fmjp": "古怪猴子彩池",
		"grbjp": "湛蓝深海彩池",
		"fday": "幸运日",
		"aeolus": "众神时代:风暴之神",
		"legwld": "野外宝藏",
		"ashicv": "冰穴",
		"ashhof": "边境之心",
		"phot": "热紫",
		"sugla": "糖果大陆",
		"warg": "黄金武士",
		"treasq": "八宝一后",
		"titimama": "跳跳猫猫",
		"egspin": "埃及旋转",
		"ashamw": "狂野亚马逊",
		"asfa": "亚洲幻想",
		"heavru": "武则天",
		"sling": "四灵",
		"slion": "超级狮子",
		"haocs": "好事成双",
		"gtsswk": "孙悟空",
		"gtsje": "玉皇大帝",
		"ttc": "顶级王牌-明星",
		"savcas": "大草原现金",
		"frtln": "幸运狮子",
		"fdtjg": "戴图理的神奇七大奖",
		"fdt": "戴图理的神奇七",
		"pnp": "粉红豹",
		"furf": "神的时代：雷霆4神",
		"er": "开心假期",
		"aztec": "印加帝国头奖",
		"hotktv": "火热KTV",
		"chao": "超级888",
		"glrj": "角斗士彩池游戏",
		"ririjc": "日日进财",
		"lm": "疯狂乐透",
		"zctz": "招财童子",
		"gos": "黄金之旅",
		"gtsjxb": "吉祥8",
		"bfb": "水牛闪电",
		"fkmj": "疯狂麻将",
		"hlf2": "万圣节财富2",
		"gtsirl": "爱尔兰运气",
		"ftsis": "神灵时代：命运姐妹",
		"dt2": "沙漠宝藏2",
		"gts51": "幸运熊猫",
		"glg": "黄金版游戏",
		"gtsru": "财富魔方",
		"gtsdrdv": "大胆的戴夫和荷鲁斯之眼",
		"ashbob": "杰克与魔豆",
		"paw": "小猪与狼",
		"tmqd": "三剑客和女王",
		"gtsir": "浮冰流",
		"gtsdgk": "龙之王国",
		"gtswng": "黄金翅膀",
		"gts52": "疯狂维京海盗",
		"gtsjzc": "爵士俱乐部",
		"mmy": "木乃伊迷城",
		"fmn": "水果狂",
		"qop": "金字塔女王",
		"wlg": "舞龙",
		"gtscb": "现金魔块",
		"ms": "魔幻吃角子老虎",
		"athn": "神的时代：智慧女神",
		"gtsfc": "足球狂欢节",
		"wlcsh": "五路财神",
		"ftg": "五虎将",
		"kfp": "六福兽",
		"aogs": "众神时代",
		"spud": "黄金农场",
		"ashhotj": "丛林心脏",
		"pmn": "黑豹之月",
		"jqw": "金钱蛙",
		"gesjp": "艺伎故事彩池游戏",
		"ashsbd": "辛巴达的金色航程",
		"ashcpl": "宝物箱中寻",
		"ctiv": "拉斯维加斯的猫",
		"gtsrng": "罗马与荣耀",
		"gtsgme": "大明帝国",
		"qnw": "权杖女王",
		"bl": "海滨嘉年华",
		"grel": "金色召集",
		"ashfta": "白雪公主",
		"nian": "年年有余",
		"kkg": "无敌金刚",
		"vcstd": "豪华的开心假期",
		"donq": "堂吉诃德的财富",
		"zcjbjp": "招财进宝彩池游戏",
		"thtk": "泰寺",
		"sfh": "非洲炙热",
		"fcgz": "翡翠公主",
		"hh": "鬼屋",
		"sis": "沉默的武士",
		"tpd2": "泰国天堂",
		"bob": "熊之舞",
		"ges": "艺伎故事",
		"gts50": "热力宝石",
		"gtsflzt": "飞龙在天",
		"hb": "一夜奇遇",
		"hlf": "万圣节财富",
		"cm": "中国厨房",
		"fnfrj": "趣味水果",
		"catqc": "猫女王",
		"sx": "四象",
		"mgstk": "神奇的栈",
		"whk": "白狮王",
		"bs": "白狮",
		"dt": "沙漠宝藏",
		"gtswg": "赌徒",
		"bt": "百慕大三角",
		"ashfmf": "满月财富",
		"fxf": "诙谐财富",
		"pst": "法老王的秘密",
		"mcb": "Cash back先生",
		"ctp2": "超级船长的宝藏",
		"samz": "亚马逊的秘密",
		"gtsatq": "亚特兰蒂斯女王",
		"zcjb": "招财进宝",
		"arc": "弓兵",
		"glr": "角斗士",
		"dlm": "情圣博士",
		"fow": "惊异之林",
		"gtscnb": "警察与土匪",
		"topg": "壮志凌云",
		"pl": "舞线",
		"gtspor": "非常幸运",
		"gtshwkp": "超级高速公路之王",
		"shmst": "夏洛克的秘密",
		"gtssmbr": "激情桑巴",
		"gtsmrln": "玛丽莲·梦露",
		"nk": "海王星王国",
		"fff": "酷炫水果农场",
		"fbr": "终极足球",
		"chl": "樱桃之恋",
		"wis": "我心狂野",
		"foy": "青春之泉",
		"rky": "洛基传奇",
		"ta": "三个朋友",
		"trl": "真爱",
		"ub": "丛林巫师",
		"gtscbl": "牛仔和外星人",
		"esmk": "埃斯梅拉达",
		"jpgt": "奖金巨人",
		"sol": "好运连胜",
		"pgv": "企鹅假期",
		"fm": "古怪猴子",
		"bib": "湛蓝深海",
		"hk": "高速公路之王",
		"ct": "船长的宝藏",
		"c7": "疯狂之七",
		"ssp": "圣诞奇迹",
		"eas": "惊喜复活节",
		"cnpr": "甜蜜派对",
		"art": "北极宝藏",
		"dnr": "海豚礁",
		"sisjp": "沉默的武士彩池游戏",
		"gemq": "宝石女王",
		"longlong": "龙龙龙",
		"zeus": "神的时代：奥王宙斯",
		"hrcls": "神的时代：奥林匹斯",
		"sib": "银子弹",
		"ashadv": "仙境冒险",
		"ririshc": "日日生财",
		"mfrt": "财富小姐",
	}

}

