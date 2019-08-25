// /**
// * name 充值渠道
// */
// module gamedatingnqp.page {
// 	export class ChongZhiQuDaoPage extends game.gui.base.Page {
// 		private _viewUI: ui.nqp.dating.ChongZhi_1UI;
// 		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
// 			super(v, onOpenFunc, onCloseFunc);
// 			this._asset = [
// 				DatingPath.atlas_dating_ui + "chongzhi.atlas",
// 			];
// 			this._isNeedBlack = true;
// 			this._isClickBlack = false;
// 			this._isNeedDuang = false;
// 		}
// 		// 页面初始化函数
// 		protected init(): void {
// 			this._viewUI = this.createView("dating.ChongZhi_1UI");
// 			this.addChild(this._viewUI);
// 			this._viewUI.list_money.itemRender = this.createChildren("dating.component.MoneyItemRenderUI", MoneyItemRender);
// 			this._viewUI.list_money.renderHandler = new Handler(this, this.renderHandler);
// 			this._viewUI.list_money.mouseHandler = new Handler(this, this.moneyselectHandler);
// 		}
// 		private moneyselectHandler(e, index: number) {
// 			if (e.type != LEvent.CLICK) return;
// 			this._viewUI.txt_input.text = this._viewUI.list_money.dataSource[index]
// 		}
// 		private renderHandler(cell: any, index: number) {
// 			if (cell) {
// 				cell.setData(this._game, cell.dataSource);
// 			}
// 		}
// 		protected onBtnTweenEnd(e: any, target: any): void {
// 			switch (target) {
// 				case this._viewUI.btn_clear://清除
// 					this._viewUI.txt_input.text = "";
// 					break;
// 				case this._viewUI.btn_pay://支付
// 					if (!this._viewUI.txt_input.text || !parseInt(this._viewUI.txt_input.text)) {
// 						this._game.showTips("金额输入错误")
// 						return;
// 					}
// 					if (parseInt(this._viewUI.txt_input.text) < this._dataSource.minmoney) {
// 						this._game.showTips(StringU.substitute("充值金额不低于{0}元", this._dataSource.minmoney))
// 						return;
// 					}
// 					if (parseInt(this._viewUI.txt_input.text) > this._dataSource.maxmoney) {
// 						this._game.showTips(StringU.substitute("充值金额不超过{0}元", this._dataSource.maxmoney))
// 						return;
// 					}
// 					// if (!WebConfig.info.username) {
// 					// 	this._game.showTips("请先绑定")
// 					// 	this._game.uiRoot.general.open(PageDef.PAGE_BINDACCOUNT)
// 					// 	return;
// 					// }
// 					let dd = this._dataSource;
// 					if (!dd) {
// 						this._game.showTips("无效操作")
// 						return;
// 					}
// 					this._game.network.call_goto_pay(this._viewUI.txt_input.text, dd.id, dd.paytype)
// 					break;
// 			}
// 		}
// 		// 页面打开时执行函数
// 		protected onOpen(): void {
// 			super.onOpen();
// 			let arr = this._dataSource.quickmoney ? this._dataSource.quickmoney.split(",") : [];
// 			arr.length = 8;
// 			this._viewUI.list_money.dataSource = arr;
// 			this._viewUI.txt_input.prompt = StringU.substitute("充值金额不低于{0}元", this._dataSource.minmoney);
// 			this._viewUI.txt_name.text = StringU.substitute("充值渠道 " + (this._dataSource.index + 1))
// 			this._viewUI.txt_xe.text = StringU.substitute("单笔限额:{0}元 - {1}元", this._dataSource.minmoney, this._dataSource.maxmoney)
// 			this._viewUI.txt_input.disabled = this._dataSource.is_disable_input;
// 			this._viewUI.btn_clear.visible = !this._dataSource.is_disable_input;
// 			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
// 			this._viewUI.btn_pay.on(LEvent.CLICK, this, this.onBtnClickWithTween);
// 		}
// 		public close(): void {
// 			if (this._viewUI) {
// 			}
// 			super.close();
// 		}
// 	}
// 	class MoneyItemRender extends ui.nqp.dating.component.MoneyItemRenderUI {
// 		private _game: Game;
// 		private _data: any;//"ddz","niuniu","zjh"
// 		setData(game: Game, data: any) {
// 			if(!data){
// 				this.visible = false;
// 				return
// 			}
// 			this.btn.label = data;
// 		}
// 	}
// }
//# sourceMappingURL=ChongZhiQuDaoPage.js.map