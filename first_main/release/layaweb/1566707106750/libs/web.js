// vfish1.0
var web;
(function (web) {
    var libs;
    (function (libs) {
        var HttpRequest = Laya.HttpRequest;
        var Event = Laya.Event;
        var WebProtocolsBase = (function () {
            function WebProtocolsBase(gameid, mgr, url, onNotLogin) {
                this._game_id = gameid;
                this._mgr = mgr;
                this._url = url;
                this._onNotLogin = onNotLogin;
                this._httpRquestPool = [];
            }
            Object.defineProperty(WebProtocolsBase.prototype, "url", {
                get: function () {
                    return this._url;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 从http连接池分配实例
             */
            WebProtocolsBase.prototype.popRequest = function () {
                if (this._httpRquestPool.length > 0) {
                    return this._httpRquestPool.pop();
                }
                return new HttpRequest();
            };
            /**
             * 将http连接返回连接池
             */
            WebProtocolsBase.prototype.pushRequest = function (inst) {
                if(!inst) return;
                inst.offAll();
                this._httpRquestPool.push(inst);
            };
            WebProtocolsBase.prototype.OnComplete = function (onComplete, onError, msg) {
                var data = msg ? JSON.parse(msg) : null;
                if(!data){
                    onError && onError(msg);
                    return;
                }
                if (data.success != 0) {
                    data.is_notlogin && this._onNotLogin && this._onNotLogin();
                    onError && onError(msg);
                    return;
                }
                if (data.change_data) {
                    this._mgr.ReadMsg(data.change_data);
                }
                onComplete && onComplete(data);
            };
            /**
             * 登录游戏，获取unionid，并得到所有对象的创建包
             * @param invite
             * @param code
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.login = function (invite, code, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var url = this._url + "/login";
                var data = "invite=" + invite + "&game_id=" + this._game_id + "&code=" + code;
                var _onComplete = function (data) { _this._unionid = data.unionid; onComplete && onComplete(data); };
                this._httpRequest.send(url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 测试接口，登录游戏，获取unionid，并得到所有对象的创建包
             * @param invite
             * @param code
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.loginTest = function (invite, code, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var url = this._url + "/login_test";
                var data = "invite=" + invite + "&game_id=" + this._game_id + "&code=" + code;
                var _onComplete = function (data) { _this._unionid = data.unionid; onComplete && onComplete(data); };
                this._httpRequest.send(url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 获取二维码
             * @param path
             * @param width
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.getAccessToken = function (path, width, onComplete, onError) {
                this._httpRequest = this._httpRequest || new HttpRequest();
                var url = this._url + "/get_access_token";
                var data = "unionid=" + this._unionid + "&game_id=" + this._game_id + "&path=" + path + "&width=" + width;
                url = url + data;
                this._httpRequest.send(url, "", "get");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 疯狂登入接口，登录游戏
             * @param invite
             * @param code
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.loginCrazy = function (invite, code, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var url = this._url + "/login_crazy";
                var data = "invite=" + invite + "&game_id=" + this._game_id + "&code=" + code;
                var _onComplete = function (data) { _this._unionid = data.unionid; onComplete && onComplete(data); };
                this._httpRequest.send(url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 获取unionid,login_str,server info
             * @param url
             * @param code
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.GetLoginInfo = function (url, code, encrypted_data, iv, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var _url = url + "/get_login_info";
                var data = "game_id=" + this._game_id + "&code=" + code + "&encrypted_data=" + encrypted_data + "&iv=" + iv;
                var _onComplete = function (data) {
                    _this._unionid = data.unionid;
                    _this._login_str = data.login_str;
                    _this._url = data.url;
                    onComplete && onComplete(data);
                };
                this._httpRequest.send(_url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 获取unionid,login_str,server info
             * @param channelExt
             * @param email
             * @param game_appid
             * @param new_time
             * @param loginplatform2cp
             * @param user_id
             * @param sdklogindomain
             * @param sdkloginmodel
             * @param sign
             * @param icon
             * @param nickname
             */
            WebProtocolsBase.prototype.GetLoginInfoH5 = function (url, channelExt, email, game_appid, new_time, loginplatform2cp, user_id, sdklogindomain, sdkloginmodel, sign, icon, nickname, openid, sex, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var _url = url + "/get_login_info_h5";
                var data = "game_id=" + this._game_id + "&channelExt=" + channelExt + "&email=" + email + "&game_appid=" + game_appid
                    + "&new_time=" + new_time + "&loginplatform2cp=" + loginplatform2cp + "&user_id=" + user_id + "&sdklogindomain=" + sdklogindomain
                    + "&openid=" + openid + "&sex=" + sex
                    + "&sdkloginmodel=" + sdkloginmodel + "&sign=" + sign + "&icon=" + icon + "&nickname=" + nickname;
                var _onComplete = function (data) {
                    _this._unionid = data.unionid;
                    _this._login_str = data.login_str;
                    _this._url = data.url;
                    onComplete && onComplete(data);
                };
                this._httpRequest.send(_url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 测试接口，获取unionid,login_str,server info
             * @param url
             * @param code
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.GetLoginInfoTest = function (url, code, onComplete, onError) {
                var _this = this;
                this._httpRequest = this._httpRequest || new HttpRequest();
                var _url = url;
                var data = "account=" +code;
                var _onComplete = function (data) {
                    _this._unionid = data.unionid;
                    _this._login_str = data.login_str;
                    _this._url = data.url;
                    onComplete && onComplete(data);
                };
                this._httpRequest.send(_url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [_onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            /**
             * 登录游戏，并得到所有对象的创建包
             * @param invite
             * @param login_str
             * @param onComplete
             * @param onError
             */
            WebProtocolsBase.prototype.ShardsLogin = function (invite, login_str, qd_id, onComplete, onError) {
                this._httpRequest = this._httpRequest || new HttpRequest();
                var url = this._url + "/shards_login";
                var data = "invite=" + invite + "&game_id=" + this._game_id + "&login_str=" + login_str;
                if (qd_id == null)
                    qd_id = "";
                data = data + "&qd_id=" + qd_id;
                this._httpRequest.send(url, data, "post");
                this._httpRequest.once(Event.COMPLETE, this, this.OnComplete, [onComplete, onError]);
                this._httpRequest.once(Event.ERROR, this, onError);
            };
            return WebProtocolsBase;
        }());
        libs.WebProtocolsBase = WebProtocolsBase;
    })(libs = web.libs || (web.libs = {}));
})(web || (web = {}));
//# sourceMappingURL=WebProtocolsBase.js.map
var web;
(function (web) {
    var libs;
    (function (libs) {
        var WebObjectMgrBase = (function () {
            function WebObjectMgrBase() {
                this._objMap = new Object();
                this._eventDip = new Laya.EventDispatcher();
            }
            Object.defineProperty(WebObjectMgrBase.prototype, "eventDip", {
                get: function () {
                    return this._eventDip;
                },
                enumerable: true,
                configurable: true
            });
            WebObjectMgrBase.prototype.on = function (type, caller, listener, args) {
                this._eventDip.on(type, caller, listener, args);
            };
            WebObjectMgrBase.prototype.off = function (type, caller, listener, onceOnly) {
                this._eventDip.off(type, caller, listener, onceOnly);
            };
            WebObjectMgrBase.prototype.GetObj = function (unionid) {
                return this._objMap[unionid];
            };
            WebObjectMgrBase.prototype.ReadMsg = function (msg) {
                for (var i = 0; i < msg.all_data.length; i++) {
                    var data = msg.all_data[i];
                    var guid = data[1] + ',' + data[0];
                    var typ = data[1];
                    var obj = this.GetObj(guid);
                    if (obj == null) {
                        obj = this.createObject(typ, guid);
                        this._objMap[guid] = obj;
                    }
                    if (msg.createBlock) {
                        obj.ReadCreate(data[2]);
                    }
                    else {
                        obj.ReadUpdate(data[2]);
                    }
                }
            };
            WebObjectMgrBase.prototype.createObject = function (typ, guid) {
                throw 'not implement';
            };
            return WebObjectMgrBase;
        }());
        libs.WebObjectMgrBase = WebObjectMgrBase;
    })(libs = web.libs || (web.libs = {}));
})(web || (web = {}));
//# sourceMappingURL=WebObjectMgrBase.js.map
var web;
(function (web) {
    var libs;
    (function (libs) {
        var WebObjectBase = (function () {
            function WebObjectBase(guid) {
                this._guid = guid;
                this._numbers = new Array();
                this._bits = new Array();
                this._strs = new Array();
                this._intEventFun = [];
                this._bitEventFun = [];
                this._strEventFun = [];
                this._eventDip = new Laya.EventDispatcher();
            }
            WebObjectBase.prototype.on = function (type, caller, listener, args) {
                this._eventDip.on(type, caller, listener, args);
            };
            WebObjectBase.prototype.off = function (type, caller, listener, onceOnly) {
                this._eventDip.off(type, caller, listener, onceOnly);
            };
            WebObjectBase.prototype.GetGuid = function () {
                return this._guid;
            };
            WebObjectBase.prototype.SetNumber = function (index, val) {
                var oldVal = this._numbers[index];
                this._numbers[index] = val;
                if (oldVal != val) {
                    this.onCallFun(this._intEventFun, index);
                }
            };
            WebObjectBase.prototype.GetNumber = function (index) {
                return this._numbers[index] || 0;
            };
            WebObjectBase.prototype.setBitValue = function (index, val) {
                var oldVal = this.GetBit(index);
                if (val) {
                    this.SetBit(index);
                }
                else {
                    this.UnSetBit(index);
                }
                if (oldVal != val) {
                    this.onCallFun(this._bitEventFun, index);
                }
            };
            WebObjectBase.prototype.SetBit = function (index) {
                this._bits[index] = true;
            };
            WebObjectBase.prototype.UnSetBit = function (index) {
                this._bits[index] = false;
            };
            WebObjectBase.prototype.GetBit = function (index) {
                return this._bits[index] || false;
            };
            WebObjectBase.prototype.SetStr = function (index, val) {
                var oldVal = this._strs[index];
                this._strs[index] = val;
                if (oldVal != val) {
                    this.onCallFun(this._strEventFun, index);
                }
            };
            WebObjectBase.prototype.GetStr = function (index) {
                return this._strs[index] || "";
            };
            WebObjectBase.prototype.readValues = function (arr, fun) {
                for (var i = 0; i < arr.length; i++) {
                    var val = arr[i];
                    if (val != null) {
                        //lua的数组是从1开始的，所以这里要做个兼容
                        fun(i + 1, val);
                    }
                }
            };
            WebObjectBase.prototype.ReadCreate = function (msg) {
                var _this = this;
                this.readValues(msg.numbers, function (idx, val) { _this.SetNumber(idx, val); });
                this.readValues(msg.bits, function (idx, val) { _this.setBitValue(idx, val != 0); });
                this.readValues(msg.strs, function (idx, val) { _this.SetStr(idx, val); });
            };
            WebObjectBase.prototype.readUpdateValues = function (arrs, fun) {
                for (var i = 0; i < arrs.length; i++) {
                    var val = arrs[i];
                    fun(val[0], val[1]);
                }
            };
            WebObjectBase.prototype.ReadUpdate = function (msg) {
                var _this = this;
                this.readUpdateValues(msg[0], function (idx, val) {
                    _this.SetNumber(idx, val);
                });
                this.readUpdateValues(msg[1], function (idx, val) {
                    _this.setBitValue(idx, val != 0);
                });
                this.readUpdateValues(msg[2], function (idx, val) {
                    _this.SetStr(idx, val);
                });
            };
            /**
             * 监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.AddListen = function (index, caller, callback) {
                this.addFun(this._intEventFun, index, caller, callback);
            };
            /**
             * 移除监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.removeListene = function (index, caller, callback) {
                if (callback === void 0) { callback = null; }
                this.removeFun(this._intEventFun, index, caller, callback);
            };
            /**
             * 监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.AddListenString = function (index, caller, callback) {
                this.addFun(this._strEventFun, index, caller, callback);
            };
            /**
             * 监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.removeListeneString = function (index, caller, callback) {
                this.removeFun(this._strEventFun, index, caller, callback);
            };
            /**
             * 监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.AddListenBit = function (index, caller, callback) {
                this.addFun(this._bitEventFun, index, caller, callback);
            };
            /**
             * 监听对象在下标变化
             * @param index 下标值
             * @param callback 回调格式function(binlog:BinLogStru):void
             */
            WebObjectBase.prototype.removeListeneBit = function (index, caller, callback) {
                this.removeFun(this._bitEventFun, index, caller, callback);
            };
            /**
             *  监听对象在下标变化(一段下标)
             * @param baseIndex 下标基础
             * @param callback 回调指针
             * @param arg 下标基础之后的列表
             */
            WebObjectBase.prototype.AddListensSeq = function (beginIndex, endIndex, caller, callback) {
                var struct = ObjectPools.malloc(core.obj.HanlderStruct);
                struct.caller = caller;
                struct.method = callback;
                for (var i = beginIndex; i <= endIndex; i++)
                    this.addFun(this._intEventFun, i, caller, callback, struct);
            };
            /**
             *  移除监听对象在下标变化(一段下标)
             * @param baseIndex 下标基础
             * @param callback 回调指针
             * @param arg 下标基础之后的列表
             */
            WebObjectBase.prototype.removeListenesSeq = function (beginIndex, endIndex, caller, callback) {
                if (caller === void 0) { caller = null; }
                if (callback === void 0) { callback = null; }
                for (var i = beginIndex; i <= endIndex; i++)
                    this.removeFun(this._intEventFun, i, caller, callback, i == 0);
            };
            /**
            * 添加回调
            * @param arr
            * @param index
            * @param caller
            * @param callback
            */
            WebObjectBase.prototype.addFun = function (arr, index, caller, callback, struct) {
                var eventList = arr[index];
                if (!eventList)
                    eventList = [];
                var len = eventList.length;
                for (var i = 0; i < len; i++) {
                    var callObj = eventList[i];
                    if (callObj && callObj.caller == caller && callObj.method == callback) {
                        //一样的
                        return;
                    }
                }
                if (!struct) {
                    struct = ObjectPools.malloc(core.obj.HanlderStruct);
                    struct.caller = caller;
                    struct.method = callback;
                }
                eventList.push(struct);
                arr[index] = eventList;
            };
            /**
            * 回收回调
            * @param arr
            * @param index
            * @param caller
            * @param callback
            */
            WebObjectBase.prototype.removeFun = function (arr, index, caller, callback, needFree) {
                if (needFree === void 0) { needFree = true; }
                var eventList = arr[index];
                if (!eventList || !eventList.length)
                    return;
                var len = eventList.length;
                for (var i = 0; i < len; i++) {
                    var callObj = eventList[i];
                    if (!callObj)
                        continue;
                    if (callback == null || (callObj.caller == caller && callObj.method == callback)) {
                        eventList.splice(i);
                        i = i <= 1 ? 0 : i - 1;
                        if (needFree)
                            ObjectPools.free(callObj);
                    }
                }
                arr[index] = eventList;
            };
            /**
             * 触发事件
             * @param arr
             * @param index
             */
            WebObjectBase.prototype.onCallFun = function (arr, index) {
                var eventList = arr[index];
                if (!eventList || !eventList.length)
                    return;
                var len = eventList.length;
                for (var i = 0; i < len; i++) {
                    var callObj = eventList[i];
                    if (callObj && callObj.caller && callObj.method) {
                        callObj.method.call(callObj.caller, null);
                    }
                }
            };
            return WebObjectBase;
        }());
        libs.WebObjectBase = WebObjectBase;
    })(libs = web.libs || (web.libs = {}));
})(web || (web = {}));
//# sourceMappingURL=WebObjectBase.js.map
// 单元测试
//# sourceMappingURL=UnitTesting.js.map
