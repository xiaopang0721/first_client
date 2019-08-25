/**
* name 加载资源管理器
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var LoadingMgr = /** @class */ (function () {
            function LoadingMgr() {
                this._map = {};
                this._hasLoad = {};
                this._waitList = [];
                //缓存 hold 一遍
                this._assetList = [];
            }
            Object.defineProperty(LoadingMgr, "ins", {
                get: function () {
                    if (!this._ins) {
                        this._ins = new LoadingMgr();
                        var gameLoadedObj = localGetItem("gameLoadedObj");
                        if (gameLoadedObj) {
                            this._ins._hasLoad = JSON.parse(gameLoadedObj) || {};
                        }
                    }
                    return this._ins;
                },
                enumerable: true,
                configurable: true
            });
            //是否加载完成
            LoadingMgr.prototype.isLoaded = function (gameid) {
                return this._hasLoad[gameid] == findGameVesion(gameid);
            };
            LoadingMgr.prototype.isInLoadList = function (gameid) {
                return this._map[gameid] == findGameVesion(gameid);
            };
            LoadingMgr.prototype.load = function (gameid, preAsset, priority) {
                if (priority === void 0) { priority = 4; }
                if (this.isLoaded(gameid) || this.isInLoadList(gameid)) {
                    return false;
                }
                this._map[gameid] = findGameVesion(gameid);
                if (this._isLoading) { //加载中 进入等待列表
                    var preLoader = new LoadingRender(gameid, preAsset, priority);
                    if (priority == 0) {
                        this._waitList.unshift(preLoader);
                    }
                    else {
                        this._waitList.push(preLoader);
                    }
                    return true;
                }
                if (preAsset && preAsset.length) {
                    if (!this._preLoader) {
                        this._preLoader = new LoadingRender(gameid, preAsset, priority);
                        if (this._preLoader.startLoad()) {
                            this._isLoading = true;
                            return true;
                        }
                    }
                }
                return false;
            };
            Object.defineProperty(LoadingMgr.prototype, "isLoading", {
                //是否在加载中
                get: function () {
                    return this._isLoading;
                },
                enumerable: true,
                configurable: true
            });
            LoadingMgr.prototype.retain = function (asset) {
                for (var index = 0; index < asset.length; index++) {
                    if (this._assetList.indexOf(asset[index]) != -1)
                        continue;
                    this._assetList.push(asset[index]);
                    var refasset = RefAsset.Get(asset[index]);
                    refasset.retain();
                }
            };
            //获取进度
            LoadingMgr.prototype.getProgress = function (gameid) {
                if (this._preLoader && this._preLoader.gameId == gameid) { //如果是正在加载的 内容 那就显示进度
                    return this._preLoader.progress;
                }
                for (var index = 0; index < this._waitList.length; index++) {
                    var preload = this._waitList[index];
                    if (preload && preload.gameId == gameid) { ////如果是在等待列表 那就随便给个初始进度
                        return 0.01;
                    }
                }
                return 0;
            };
            LoadingMgr.prototype.cancleUnLoads = function () {
                //重置 其实就是清掉未加载的gameid
                this._map = this._hasLoad;
                if (this._preLoader) {
                    this._preLoader.preAsset && Laya.loader.cancelLoadByUrls(this._preLoader.preAsset);
                    this._preLoader.clearLoadingRender();
                    this._preLoader = null;
                }
                else {
                    for (var index = 0; index < this._waitList.length; index++) {
                        var preLoader = this._waitList[index];
                        if (preLoader) {
                            preLoader.preAsset && Laya.loader.cancelLoadByUrls(preLoader.preAsset);
                            preLoader.clearLoadingRender();
                            preLoader = null;
                        }
                    }
                }
                this._waitList.length = 0; //等待列表清空
                this._isLoading = false;
            };
            LoadingMgr.prototype.freeAndLoadNext = function () {
                if (this._preLoader) {
                    if (this._hasLoad[this._preLoader.gameId] != findGameVesion(this._preLoader.gameId)) {
                        this._hasLoad[this._preLoader.gameId] = findGameVesion(this._preLoader.gameId);
                    }
                    //缓存 hold 一遍
                    this.retain(this._preLoader.preAsset);
                    //再去清理
                    this._preLoader.clearLoadingRender();
                    this._preLoader = null;
                }
                if (this._waitList.length > 0) {
                    this._preLoader = this._waitList.shift();
                    if (this._preLoader && this._preLoader.startLoad()) {
                        this._isLoading = true;
                        return;
                    }
                }
                this._isLoading = false;
            };
            return LoadingMgr;
        }());
        managers.LoadingMgr = LoadingMgr;
        var LoadingRender = /** @class */ (function () {
            function LoadingRender(gameid, preAssets, priority) {
                this._obj = { progress: 0.001 };
                this._gameId = gameid;
                this._preAssets = preAssets;
                this._priority = priority;
            }
            Object.defineProperty(LoadingRender.prototype, "progress", {
                get: function () {
                    return this._obj.progress || 0.001;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LoadingRender.prototype, "gameId", {
                get: function () {
                    return this._gameId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LoadingRender.prototype, "preAsset", {
                get: function () {
                    return this._preAssets;
                },
                enumerable: true,
                configurable: true
            });
            LoadingRender.prototype.startLoad = function () {
                if (this._preLoader)
                    return false;
                if (!this._preLoader) {
                    this._preLoader = new PreLoad();
                }
                this._preLoader.on(LEvent.CHANGED, this, this.onUpdateProgress);
                for (var index = 0; index < this._preAssets.length; index++) {
                    var asset = this._preAssets[index];
                    var type = asset.indexOf(".sk") == -1 ? RefAsset.GENRAL : RefAsset.TEMPLET;
                    this._preLoader.load(asset, type);
                }
                this.onUpdateProgress();
                return true;
            };
            LoadingRender.prototype.onUpdateProgress = function () {
                var _this = this;
                if (this._isClear || this._isComplete)
                    return;
                var totalCount = this._preLoader.totalCount;
                var loadCount = this._preLoader.loadCount;
                var v = loadCount / totalCount;
                if (v && this._obj.progress && this._obj.progress == v)
                    return;
                Laya.Tween.clearTween(this._obj);
                Laya.Tween.to(this._obj, { progress: v }, 200, null, Handler.create(this, function () {
                    if (_this._obj.progress >= 1) {
                        _this.onLoadAssetCom();
                    }
                }));
            };
            //资源加载完
            LoadingRender.prototype.onLoadAssetCom = function () {
                this._isComplete = true;
                var gameLoadedObj = localGetItem("gameLoadedObj");
                var obj = {};
                if (gameLoadedObj) {
                    obj = JSON.parse(gameLoadedObj) || {};
                }
                obj[this._gameId] = findGameVesion(this._gameId);
                gameLoadedObj = JSON.stringify(obj);
                localSetItem("gameLoadedObj", gameLoadedObj);
                var name = PageDef.getNameById(this._gameId);
                name && main.game.showTips(name + "更新完成！");
                LoadingMgr.ins.freeAndLoadNext();
                this.clearLoadingRender();
            };
            LoadingRender.prototype.clearLoadingRender = function () {
                this._isClear = true;
                if (this._preLoader) {
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this._preLoader.off(LEvent.CHANGED, this, this.onUpdateProgress);
                    this._preLoader.offAll();
                    for (var index = 0; index < this._preAssets.length; index++) {
                        var asset = this._preAssets[index];
                        this._preLoader.clear(asset);
                    }
                    this._preLoader = null;
                    this._preAssets = null;
                    this._gameId = null;
                }
            };
            return LoadingRender;
        }());
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=LoadingMgr.js.map