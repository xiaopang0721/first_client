//////////////////////////////////////////////////////////////////////////////
//////////////////////////以下代码为自动生成，请勿手工改动///////////////////////
//////////////////////////////////////////////////////////////////////////////
/**
 * 模板数据
 */
module game.data{
	export class Template{
		private static _data:Object;

		constructor(){}

		static setData(v:Object){
			this._data = v;
		}

		static get data():Object{
			return this._data;
		}

		/**根据id获取某条数据*/
		static getSingeTempDataById(arr:Array<Object>, value:number):Object{
			if(!arr || value <= 0) return null;
			let len:number = arr.length;
			for(let i:number = 0; i < len; i++){
				let obj:Object = arr[i];
				if(!obj) continue;
				if(obj["id"] == value){
					return obj;
				}
			}
			return null;
		}

		/**
		 * tb_battery根据对应id取数据
		 */
		static getBatteryTempById(id:number):tb_battery{
			return <tb_battery>(this.getSingeTempDataById(this.data["tb_battery"],id));
		}

		/**
		 * tb_battery_level根据对应id取数据
		 */
		static getBattery_levelTempById(id:number):tb_battery_level{
			return <tb_battery_level>(this.getSingeTempDataById(this.data["tb_battery_level"],id));
		}

		/**
		 * tb_classic根据对应id取数据
		 */
		static getClassicTempById(id:number):tb_classic{
			return <tb_classic>(this.getSingeTempDataById(this.data["tb_classic"],id));
		}

		/**
		 * tb_config根据对应id取数据
		 */
		static getConfigTempById(id:number):tb_config{
			return <tb_config>(this.getSingeTempDataById(this.data["tb_config"],id));
		}

		/**
		 * tb_expression根据对应id取数据
		 */
		static getExpressionTempById(id:number):tb_expression{
			return <tb_expression>(this.getSingeTempDataById(this.data["tb_expression"],id));
		}

		/**
		 * tb_fish根据对应id取数据
		 */
		static getFishTempById(id:number):tb_fish{
			return <tb_fish>(this.getSingeTempDataById(this.data["tb_fish"],id));
		}

		/**
		 * tb_fish_group_line根据对应id取数据
		 */
		static getFish_group_lineTempById(id:number):tb_fish_group_line{
			return <tb_fish_group_line>(this.getSingeTempDataById(this.data["tb_fish_group_line"],id));
		}

		/**
		 * tb_god根据对应id取数据
		 */
		static getGodTempById(id:number):tb_god{
			return <tb_god>(this.getSingeTempDataById(this.data["tb_god"],id));
		}

		/**
		 * tb_item根据对应id取数据
		 */
		static getItemTempById(id:number):tb_item{
			return <tb_item>(this.getSingeTempDataById(this.data["tb_item"],id));
		}

		/**
		 * tb_kucun_config根据对应id取数据
		 */
		static getKucun_configTempById(id:number):tb_kucun_config{
			return <tb_kucun_config>(this.getSingeTempDataById(this.data["tb_kucun_config"],id));
		}

		/**
		 * tb_mail根据对应id取数据
		 */
		static getMailTempById(id:number):tb_mail{
			return <tb_mail>(this.getSingeTempDataById(this.data["tb_mail"],id));
		}

		/**
		 * tb_mapAssert根据对应id取数据
		 */
		static getMapAssertTempById(id:number):tb_mapAssert{
			return <tb_mapAssert>(this.getSingeTempDataById(this.data["tb_mapAssert"],id));
		}

		/**
		 * tb_recharge根据对应id取数据
		 */
		static getRechargeTempById(id:number):tb_recharge{
			return <tb_recharge>(this.getSingeTempDataById(this.data["tb_recharge"],id));
		}

		/**
		 * tb_refresh_fish_count根据对应id取数据
		 */
		static getRefresh_fish_countTempById(id:number):tb_refresh_fish_count{
			return <tb_refresh_fish_count>(this.getSingeTempDataById(this.data["tb_refresh_fish_count"],id));
		}

		/**
		 * tb_room_algorithm根据对应id取数据
		 */
		static getRoom_algorithmTempById(id:number):tb_room_algorithm{
			return <tb_room_algorithm>(this.getSingeTempDataById(this.data["tb_room_algorithm"],id));
		}

		/**
		 * tb_say_notice根据对应id取数据
		 */
		static getSay_noticeTempById(id:number):tb_say_notice{
			return <tb_say_notice>(this.getSingeTempDataById(this.data["tb_say_notice"],id));
		}

		/**
		 * tb_shop根据对应id取数据
		 */
		static getShopTempById(id:number):tb_shop{
			return <tb_shop>(this.getSingeTempDataById(this.data["tb_shop"],id));
		}

		/**
		 * tb_tips根据对应id取数据
		 */
		static getTipsTempById(id:number):tb_tips{
			return <tb_tips>(this.getSingeTempDataById(this.data["tb_tips"],id));
		}

		/**
		 * tb_yz_group根据对应id取数据
		 */
		static getYz_groupTempById(id:number):tb_yz_group{
			return <tb_yz_group>(this.getSingeTempDataById(this.data["tb_yz_group"],id));
		}

		/**
		 * tb_zuanshi根据对应id取数据
		 */
		static getZuanshiTempById(id:number):tb_zuanshi{
			return <tb_zuanshi>(this.getSingeTempDataById(this.data["tb_zuanshi"],id));
		}

	}
	export interface tb_battery{
		id:number; //	唯一id
		type:number; //	炮台类型
		name:string; //	炮台名称
		desc:string; //	炮台描述
		activation:Array<any>; //	激活道具
		suipian:Array<any>; //	碎片激活
		hit:number; //	炮台命中率加成
		day:number; //	炮台有效期
		model:string; //	炮台模型
		bullet_effec:string; //	子弹效果
		hit_effec:string; //	击中效果
		speed:number; //	炮台射速
	}
	export interface tb_battery_level{
		id:number; //	唯一id
		rate:number; //	炮台倍率
		cost:Array<any>; //	升级消耗资源
		award:Array<any>; //	升级给予奖励
	}
	export interface tb_classic{
		id:number; //	唯一id
		map_type:number; //	地图类型
		name:string; //	地图名称
		rate_min:number; //	地图倍率最低值
		rate_max:number; //	地图倍率最高值
		room_parameter:number; //	房间参数
		num_coefficient:number; //	房间人数系数
		has_boss_kc:number; //	是否有BOSS库存
	}
	export interface tb_config{
		id:number; //	唯一id
		pochan:number; //	破产赠送
		gold_fish_pool:Array<any>; //	黄金鱼召唤
		boss_fish_pool:Array<any>; //	BOSS鱼召唤
		gold_fish_line:Array<any>; //	黄金鱼召唤线路
		boss_fish_line:Array<any>; //	BOSS鱼召唤线路
		init_resources:Array<any>; //	玩家初始拥有资源
		boss_beilv:number; //	BOSS库存倍率控制
	}
	export interface tb_expression{
		id:number; //	编号
		word:string; //	表情替换符
		display:string; //	表情资源
	}
	export interface tb_fish{
		id:number; //	编号
		type:number; //	鱼的类型
		name:string; //	鱼的名称
		rate_range:Array<any>; //	鱼的倍率范围
		desc:string; //	鱼的倍率描述
		fish_scale:number; //	鱼的缩放比例
		show:number; //	金币展示
		great:number; //	爆炸金币展示
		show_order:number; //	鱼的界面前后顺序
		show_dead:number; //	死亡动画
		xiangqing:string; //	鱼的详情描述
		fish_fs:number; //	帮助界面鱼的缩放
		len_head:number; //	到鱼头的长度
		len_tail:number; //	到鱼尾的长度
		b_effect:number; //	底层特效
		t_effect:number; //	顶层特效
		t_overlay:number; //	顶层叠加
		t_tuowei:number; //	拖尾效果
		data:number; //	特殊参数
		quan_effect:number; //	光圈特效
		paixu:number; //	帮助中鱼的排序
	}
	export interface tb_fish_group_line{
		id:number; //	编号
		group_id:number; //	鱼群ID
		lines_id:Array<any>; //	路径ID
	}
	export interface tb_god{
		id:number; //	编号
		name:string; //	物品名称
		reward:Array<any>; //	获得奖励
		cost:number; //	花费RMB金额
		cost_dq:Array<any>; //	消耗点券数量
		first:Array<any>; //	首次赠送
		isfirst:number; //	是否首充
		priority:number; //	排序
		displayid:string; //	图标
		ivsible:number; //	是否显示
	}
	export interface tb_item{
		id:number; //	编号
		name:string; //	名字
		type:number; //	物品类型
		quality:number; //	品质
		level:number; //	使用等级
		itemdesc:string; //	物品说明
		binding:number; //	是否绑定
		max_overlap:number; //	叠加数2
		icon:string; //	图标资源
		batch_use:number; //	是否批量使用
		is_giving:number; //	是否可赠送
		quick_use:number; //	快捷使用
		come:string; //	获取来源
		first_drop:number; //	掉落ID
		show:number; //	是否显示
	}
	export interface tb_kucun_config{
		id:number; //	ID
		room_type:number; //	房间类型
		serve_rate:number; //	正常服务费比例
		black_serve_rate:string; //	小黑屋服务费比例
		nomal_money:number; //	初始库存金币
		black_nomal_money:number; //	小黑屋初始库存
		min_win_money:number; //	输赢库存的临界点
		fish_rate:Array<any>; //	库存捕获率系数
		bad_room_rate:Array<any>; //	进入输库存的概率
		enter_balck_shouyi:number; //	进小黑屋的最小倍收益比
		black_fish_rate:Array<any>; //	小黑屋库存捕获率系数
		boss_init_money:number; //	BOSS库存初始库存值
		boss_fish_rate:Array<any>; //	BOSS库存捕获系数
	}
	export interface tb_mail{
		id:number; //	编号
		type:number; //	类型
		title:string; //	标题
		msg:string; //	信息
		award:Array<any>; //	物品奖励
		money:number; //	金币
		begin_date:number; //	发送时间
		end_date:number; //	结束时间
	}
	export interface tb_mapAssert{
		id:number; //	编号
		name:string; //	地图名称
		pxWidth:number; //	地图宽
		pxHeight:number; //	地图高
		imgId:number; //	地图资源图片
		sound:string; //	地图声音
		isWave:number; //	是否要波动
	}
	export interface tb_recharge{
		id:number; //	编号
		name:string; //	物品名称
		reward:Array<any>; //	获得奖励
		cost:number; //	花费RMB金额
		cost_dq:Array<any>; //	消耗点券数量
		first:Array<any>; //	首次赠送
		isfirst:number; //	是否首充
		priority:number; //	排序
		displayid:string; //	图标
		ivsible:number; //	是否显示
		need_vip:number; //	需要VIP等级
		sc_type:number; //	商城类型
	}
	export interface tb_refresh_fish_count{
		id:number; //	编号
		map_id:number; //	地图id
		group_type:number; //	鱼群类型
		min_base:number; //	最小基础数量
		max_base:number; //	最大基础数量
		min_xishu:number; //	系数
		max_xishu:number; //	系数2
		min_time:number; //	最短刷出时间
		max_time:number; //	最长刷出时间
		need_supply:number; //	补充鱼数量
	}
	export interface tb_room_algorithm{
		id:number; //	唯一id
		begin_time:number; //	初始时间点
		end_time:number; //	结束时间点
		num_min:number; //	人数下限
		num_max:number; //	人数上限
	}
	export interface tb_say_notice{
		id:number; //	ID
		notice:string; //	炮的倍数
	}
	export interface tb_shop{
		id:number; //	唯一id
		type:number; //	商城类型
		need_vip:number; //	需要VIP等级
		sell:Array<any>; //	出售道具
		cost:Array<any>; //	购买消耗
		show_item:string; //	消耗图标展示
		discount:number; //	折扣
		hf_jz:number; //	话费价值
		limit_dh:number; //	话费卡限制兑换
	}
	export interface tb_tips{
		id:number; //	编号
		tips:string; //	提示内容
	}
	export interface tb_yz_group{
		id:number; //	编号
		yz_id:number; //	鱼阵ID
		yz_group_line:Array<any>; //	编号ID
	}
	export interface tb_zuanshi{
		id:number; //	编号
		name:string; //	物品名称
		reward:Array<any>; //	获得奖励
		cost:number; //	花费RMB金额
		cost_dq:Array<any>; //	消耗点券数量
		first:Array<any>; //	首次赠送
		isfirst:number; //	是否首充
		priority:number; //	排序
		displayid:string; //	图标
		ivsible:number; //	是否显示
	}
}