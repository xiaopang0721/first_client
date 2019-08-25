/**
* url工厂
*/
var utils;
(function (utils) {
    var RandomUrlFactory = /** @class */ (function () {
        function RandomUrlFactory() {
            this._serverUrlList = [];
            this._waitHandleList = [];
            this._platformUrl = Laya.URL.basePath + (!WebConfig.isDebug ? "conf/platformUrl.bin?v=" : "conf/platformUrl.json?v=");
        }
        Object.defineProperty(RandomUrlFactory, "ins", {
            get: function () {
                if (!this._ins) {
                    this._ins = new RandomUrlFactory();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取url
         * @param type 类型
         * @param completeHandler 回调
         */
        RandomUrlFactory.prototype.getUrl = function (handle) {
            if (this._waitHandleList.length > 0) { //先进入队列
                this._waitHandleList.push(handle);
                return;
            }
            //开始处理回调
            this.startHandle(handle);
        };
        RandomUrlFactory.prototype.startHandle = function (handle) {
            this._handle = handle;
            var needLoad = !this._serverUrlList.length;
            if (needLoad) { //列表为空 去加载
                this._url = this._platformUrl + (isDebug ? MathU.randomRange(1, 1000000).toString() : cur_vesion);
                logd("生成一个新地址", this._url);
                Laya.loader.load(this._url, Handler.create(this, this.completeHandler));
            }
            else { //否则去回调
                this.doHandle();
            }
        };
        /**
         * 回收url
         * @param type 类型
         */
        RandomUrlFactory.prototype.recoverUrl = function (url) {
            var indx = this._serverUrlList.indexOf(url);
            if (indx == -1)
                return;
            logd("回收 url", url);
            this._serverUrlList.splice(indx, 1);
        };
        //加载完成 解析数据
        RandomUrlFactory.prototype.completeHandler = function (data) {
            if (isDebug) {
                var conf_url_value = Laya.loader.getRes(this._url);
                this._serverUrlList = conf_url_value.server_url[WebConfig.platform] || conf_url_value.server_url["default"];
            }
            else {
                var conf_url = Laya.loader.getRes(this._url);
                var conf_url_byteArray = new ByteArray(conf_url);
                var conf_url_value = JSON.parse(StringU.readZlibData(conf_url_byteArray));
                this._serverUrlList = conf_url_value.server_url[WebConfig.platform] || conf_url_value.server_url["default"];
            }
            this.doHandle();
        };
        RandomUrlFactory.prototype.doHandle = function () {
            var idx = MathU.randomRange(0, this._serverUrlList.length - 1);
            logd("创建 url", this._serverUrlList[idx]);
            if (this._handle) {
                this._handle.runWith({ index: idx, url: this._serverUrlList[idx] });
                this._handle && this._handle.recover();
                this._handle = null;
            }
            if (this._waitHandleList.length > 0) {
                this.startHandle(this._waitHandleList.shift());
            }
        };
        return RandomUrlFactory;
    }());
    utils.RandomUrlFactory = RandomUrlFactory;
})(utils || (utils = {}));
//# sourceMappingURL=RandomUrlFactory.js.map