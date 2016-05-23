/// <reference path="../../libs/modules/egret/egret.d.ts" />
/// <reference path="../../libs/modules/res/res.d.ts" />


module view
{
    export class GameScene extends egret.Sprite
	{
		private _isDown: boolean = false;
		
		private _bg: egret.Bitmap;
		
		private _isPaused: boolean = true;
		private _isOver: boolean = false;


		//计算帧之间的时间间隔		
        private lastTime: number = 0;
        private newTime: number = 0;
		

		public constructor()
		{
			super();
			this.createChildren();
		}

		protected createChildren()
		{
			this._bg = new egret.Bitmap(RES.getRes("bg_png"));
			this.addChild(this._bg);
			
			this.touchEnabled = true;


			this.initialize()
		}

		public restart()
		{
			this.reset();
			this.start();
		}

		/**初始化 */		
		protected initialize()
		{
			//侦听该事件，每帧运行
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			
			this.reset();
		}


		/**计算时间差，更新物理空间 */		
		public onEnterFrame(e: egret.Event): void
		{
			this.newTime = egret.getTimer();
			this.update((this.newTime - this.lastTime) * 0.001);
            this.lastTime = this.newTime;
		}

		/** */		
		private update(deltaTime: number = 1 / 60)
		{
			
			if (this._isPaused)
				return;
			
			if (this._isOver)
				return;
		}

		/**重置游戏 */		
		public reset()
		{

			this._isOver = false;
			
		}

		/**
		 *	暂停
		 */
		public pause()
		{
			this._isPaused = true;
		}

		/**恢复 */		
		public resume()
		{
			this._isPaused = false;
		}

		public gameOver()
		{
			alert("Game Over");
			this._isOver = true;
			this._isPaused = true;
			this.restart();
		}

		/**启动 */		
		public start()
		{
			
			this.lastTime = egret.getTimer();
			this.resume();
			this._isOver = false;
		}

		public destroy()
		{


		}

	}
}
