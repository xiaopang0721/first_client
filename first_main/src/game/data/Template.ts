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
			var len:number = arr.length;
			for(var i:number = 0; i < len; i++){
				var obj:Object = arr[i];
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
		 * tb_kucun_config根据对应id取数据
		 */
		static getKucun_configTempById(id:number):tb_kucun_config{
			return <tb_kucun_config>(this.getSingeTempDataById(this.data["tb_kucun_config"],id));
		}

		/**
		 * tb_mapAssert根据对应id取数据
		 */
		static getMapAssertTempById(id:number):tb_mapAssert{
			return <tb_mapAssert>(this.getSingeTempDataById(this.data["tb_mapAssert"],id));
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
		 * tb_yz_group根据对应id取数据
		 */
		static getYz_groupTempById(id:number):tb_yz_group{
			return <tb_yz_group>(this.getSingeTempDataById(this.data["tb_yz_group"],id));
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
	export interface tb_mapAssert{
		id:number; //	编号
		name:string; //	地图名称
		pxWidth:number; //	地图宽
		pxHeight:number; //	地图高
		imgId:number; //	地图资源图片
		sound:string; //	地图声音
		isWave:number; //	是否要波动
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
	export interface tb_yz_group{
		id:number; //	编号
		yz_id:number; //	鱼阵ID
		yz_group_line:Array<any>; //	编号ID
	}
}