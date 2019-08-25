/**
* 网络请求
*/
var utils;
(function (utils) {
    var Request = /** @class */ (function () {
        function Request() {
        }
        /**
         * 阻塞式转圈圈请求（超时出现弹窗）
         * @param url
         * @param data
         * @param callback
         * @param errorback
         * @param errorback
         * @param waitFunc
         */
        Request.sendA = function (url, data, callback, timeoutFunc, waitFunc) {
            if (!url) {
                throw new Error("地址null");
            }
            var info = new RequestInfo();
            info.url = url;
            info.data = data;
            info.callback = Handler.create(this, this.complete, [info, callback], false);
            info.timeoutFunc = (timeoutFunc || this.defTimeoutFunc);
            info.failback = this.failFunc;
            info.sucessback = this.sucessFunc;
            info.waitFunc = (waitFunc || this.defWaitFunc);
            this._queue.push(info);
            this.checkQueue();
        };
        /**
         * 检查队列
         */
        Request.checkQueue = function () {
            var info = this._queue[0];
            info && info.trySend();
        };
        /**
         * 请求完成时
         * @param info
         */
        Request.complete = function (info, callback, value) {
            var idx = this._queue.indexOf(info);
            idx != -1 && this._queue.splice(idx, 1);
            callback && callback.runWith(value);
            this.checkQueue();
        };
        // 请求队列
        Request._queue = [];
        //阻塞式转圈圈请求（超时出现弹窗）
        Request.SENDMODE_A = 1;
        //阻塞式不转圈圈请求（超时出现弹窗）
        Request.SENDMODE_B = 2;
        //非阻塞式请求（超时不处理）
        Request.SENDMODE_C = 3;
        return Request;
    }());
    utils.Request = Request;
    /**
     * 请求结构体
     */
    var RequestInfo = /** @class */ (function () {
        function RequestInfo() {
            this.state = RequestInfo.STATE_NONE;
            Laya.timer.loop(1000, this, this.checkTimeout);
        }
        Object.defineProperty(RequestInfo.prototype, "isWait", {
            /**
             * 是否等待数据返回
             */
            get: function () {
                return this.state == RequestInfo.STATE_WAIT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RequestInfo.prototype, "isComplete", {
            /**
             * 是否已完成
             */
            get: function () {
                return this.state == RequestInfo.STATE_COMPLETE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RequestInfo.prototype, "isPause", {
            /**
             * 是否暂停
             */
            get: function () {
                return this.state == RequestInfo.STATE_PAUSE;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 暂停
         */
        RequestInfo.prototype.pause = function () {
            this.state = RequestInfo.STATE_PAUSE;
        };
        /**
         * 继续
         */
        RequestInfo.prototype.continue = function () {
            this.state = RequestInfo.STATE_NONE;
            this.trySend();
        };
        /**
         * 尝试发送
         */
        RequestInfo.prototype.trySend = function () {
            var _this = this;
            if (this.isWait || this.isPause) {
                return;
            }
            this.state = RequestInfo.STATE_WAIT;
            // 等待函数
            this.waitFunc && this.waitFunc.run();
            this.timeout = Laya.timer.currTimer + RequestInfo.TIMEOUT;
            if (!this._request) {
                this._request = new HttpRequest();
                this._request.http.timeout = RequestInfo.TIMEOUT;
            }
            var data = parseObjToUrlParameter(this.data);
            this._request.once(LEvent.COMPLETE, this, function (value) {
                _this.state = RequestInfo.STATE_COMPLETE;
                Laya.timer.clear(_this, _this.checkTimeout);
                logd('RequestInfo COMPLETE:', _this.url, data, 'info:' + value);
                logd("-------------------", value);
                Laya.timer.clear(_this, _this.trySend);
                _this._request.offAll();
                value = JSON.parse(value);
                if (_this.callback != null && value)
                    _this.callback.runWith(value);
                if (_this.failback != null && value && value.success != 0)
                    _this.failback.runWith(value);
                if (_this.sucessback != null && value && value.success == 0)
                    _this.sucessback.runWith(_this.url);
            });
            this._request.once(LEvent.ERROR, this, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                logd('RequestInfo ERROR:', _this.url, data, 'info:' + args);
                if (_this._request.http.status != 500) {
                    // 出错3000后再次尝试
                    _this.doTimeout(false);
                    Laya.timer.once(3000, _this, _this.trySend);
                }
            });
            this._request.send(this.url, data, "post");
        };
        RequestInfo.prototype.doTimeout = function (realTimeOut) {
            if (realTimeOut === void 0) { realTimeOut = true; }
            Laya.timer.clear(this, this.trySend);
            this._request.offAll();
            this.state = RequestInfo.STATE_NONE;
            if (this.timeoutFunc && realTimeOut) {
                var args = this.timeoutFunc.args;
                if (!args) {
                    args = [];
                    this.timeoutFunc.args = args;
                }
                args.indexOf(this) == -1 && args.push(this);
                this.timeoutFunc.run();
            }
            this.trySend();
        };
        /**
         * 校验是否超时
         */
        RequestInfo.prototype.checkTimeout = function () {
            if (this.isWait && this.timeout < Laya.timer.currTimer) {
                this.doTimeout();
            }
        };
        RequestInfo.TIMEOUT = 10000; // 超时时间
        RequestInfo.STATE_NONE = 0; // 无
        RequestInfo.STATE_WAIT = 1; // 等待
        RequestInfo.STATE_COMPLETE = 2; // 完成
        RequestInfo.STATE_PAUSE = 3; // 暂停
        return RequestInfo;
    }());
    utils.RequestInfo = RequestInfo;
})(utils || (utils = {}));
//# sourceMappingURL=Request.js.map