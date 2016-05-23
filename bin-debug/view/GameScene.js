/// <reference path="../../libs/modules/egret/egret.d.ts" />
/// <reference path="../../libs/modules/res/res.d.ts" />
var view;
(function (view) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            _super.call(this);
            this._isDown = false;
            this._isPaused = true;
            this._isOver = false;
            //计算帧之间的时间间隔		
            this.lastTime = 0;
            this.newTime = 0;
            this.createChildren();
        }
        var d = __define,c=GameScene,p=c.prototype;
        p.createChildren = function () {
            this._bg = new egret.Bitmap(RES.getRes("bg_png"));
            this.addChild(this._bg);
            this.touchEnabled = true;
            this.initialize();
        };
        p.restart = function () {
            this.reset();
            this.start();
        };
        /**初始化 */
        p.initialize = function () {
            //侦听该事件，每帧运行
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.reset();
        };
        /**计算时间差，更新物理空间 */
        p.onEnterFrame = function (e) {
            this.newTime = egret.getTimer();
            this.update((this.newTime - this.lastTime) * 0.001);
            this.lastTime = this.newTime;
        };
        /** */
        p.update = function (deltaTime) {
            if (deltaTime === void 0) { deltaTime = 1 / 60; }
            if (this._isPaused)
                return;
            if (this._isOver)
                return;
        };
        /**重置游戏 */
        p.reset = function () {
            this._isOver = false;
        };
        /**
         *	暂停
         */
        p.pause = function () {
            this._isPaused = true;
        };
        /**恢复 */
        p.resume = function () {
            this._isPaused = false;
        };
        p.gameOver = function () {
            alert("Game Over");
            this._isOver = true;
            this._isPaused = true;
            this.restart();
        };
        /**启动 */
        p.start = function () {
            this.lastTime = egret.getTimer();
            this.resume();
            this._isOver = false;
        };
        p.destroy = function () {
        };
        return GameScene;
    })(egret.Sprite);
    view.GameScene = GameScene;
    egret.registerClass(GameScene,'view.GameScene');
})(view || (view = {}));
//# sourceMappingURL=GameScene.js.map