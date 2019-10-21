/**
* 路径配置
*/
module game.data {
	export class Path {
		static ui: string = "ui/";
		static atlas_ui: string = "res/atlas/ui/";
		static map: string = "map/{0}/";
		static map_far: string = "map/{0}/far/";
		static mapEffect: string = "mapEffect/";
		static music: string = "music/";
		static data: string = 'data/';
		static temp: string = 'data/temp/';
		static ui_tongyong_sk: string = "tongyong_ui/game_ui/tongyong/sk/";
		static atlas_game_ui_tongyong: string = "tongyong_res/atlas/tongyong_ui/game_ui/tongyong/";

		static sound_hy: string = Path.music + 'qi_kai_de_sheng.mp3';
		static music_bg: string = Path.music + 'bg.mp3';
		static music_btn: string = Path.music + 'btn.mp3';
		static music_copy: string = Path.music + 'copy.mp3';
		static music_kefu: string = Path.music + 'kefu.mp3';
		static music_tuiguang: string = Path.music + 'tuiguang.mp3';
		static music_zhuanpan: string = Path.music + 'zhuanpan.mp3';
		static scene: string = 'scene/';
		static get custom_atlas():string {
			return "custom_atlas/" + WebConfig.platform + "/";
		}
		static get ui_atlas_effect():string {
			return Path.custom_atlas + "ui/";
		}
		static get custom_atlas_scene():string {
			return Path.custom_atlas + Path.scene;
		}
		
		/**
		 * 获得一直序列帧地址
		 * @param path 图片路径
		 * @param count 帧数
		 * @param start 起始位置
		 * @param reverse 是否倒序播放
		 */
		static getSeqFrames(path: string, count: number, start: number = 0, reverse: boolean = false): string[] {
			let paths = [];
			if (reverse)
				for (let i = count - 1; i >= start; i--) {
					paths.push(StringU.substitute(path, i));
				}
			else
				for (let i = start; i < start + count; i++) {
					paths.push(StringU.substitute(path, i));
				}
			return paths;
		}
	}
}