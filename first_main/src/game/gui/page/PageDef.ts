/**
* 页面定义
*/
module game.gui.page {
	interface ClassMap {
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
		 *	大众版皮肤
		 */
		static BASE_PLATFORM_TYPE_DZQP: string = "dzqp";
		/**
		 *	Q版皮肤
		 */
		static BASE_PLATFORM_TYPE_QB: string = "qban";
		/**
		 *	新版皮肤
		 */
		static BASE_PLATFORM_TYPE_NQP: string = "nqp";

		/**
		 * 获取游戏名字
		 * @param str 
		 */
		static getNameById(str) {
			return GAME_NAME_LIST[str]
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
		"ddz": "斗地主",
		"majiang": "四川麻将",
		"niuniu": "抢庄牛牛",
		"paodekuai": "跑得快",
		"shisanshui": "十三水",
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
		"longhu": "百人龙虎",
		"paijiu": "牌九",
		"sangong": "三公",
		"saolei": "红包扫雷",
		"shuiguoji": "水果机",
		"toubao": "皇冠骰宝",
		"zoo": "飞禽走兽",
	}

}

