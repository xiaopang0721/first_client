// vfish1.0
declare module web.libs {
    class WebObjectBase {
        private _guid;
        private _numbers;
        private _bits;
        private _strs;
        private _intEventFun;
        private _bitEventFun;
        private _strEventFun;
        private _eventDip;
        constructor(guid: any);
        on(type: string, caller: any, listener: Function, args?: Array<any>): void;
        off(type: string, caller: any, listener: Function, onceOnly?: boolean): void;
        GetGuid(): string;
        SetNumber(index: number, val: number): void;
        GetNumber(index: number): number;
        private setBitValue(index, val);
        SetBit(index: number): void;
        UnSetBit(index: number): void;
        GetBit(index: number): boolean;
        SetStr(index: number, val: string): void;
        GetStr(index: number): string;
        private readValues<T>(arr, fun);
        ReadCreate(msg: any): void;
        private readUpdateValues<T>(arrs, fun);
        ReadUpdate(msg: any): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        AddListen(index: number, caller: any, callback: Function): void;
        /**
         * 移除监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        removeListene(index: number, caller: any, callback?: Function): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        AddListenString(index: number, caller: any, callback: Function): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        removeListeneString(index: number, caller: any, callback: Function): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        AddListenBit(index: number, caller: any, callback: Function): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        removeListeneBit(index: number, caller: any, callback: Function): void;
        /**
         *  监听对象在下标变化(一段下标)
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        AddListensSeq(beginIndex: number, endIndex: number, caller: any, callback: Function): void;
        /**
         *  移除监听对象在下标变化(一段下标)
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        removeListenesSeq(beginIndex: number, endIndex: number, caller?: any, callback?: Function): void;
        /**
        * 添加回调
        * @param arr
        * @param index
        * @param caller
        * @param callback
        */
        private addFun(arr, index, caller, callback, struct?);
        /**
        * 回收回调
        * @param arr
        * @param index
        * @param caller
        * @param callback
        */
        private removeFun(arr, index, caller, callback, needFree?);
        /**
         * 触发事件
         * @param arr
         * @param index
         */
        private onCallFun(arr, index);
    }
}
declare module web.libs {
    class WebObjectMgrBase {
        private _eventDip;
        private _objMap;
        constructor();
        readonly eventDip: Laya.EventDispatcher;
        on(type: string, caller: any, listener: Function, args?: Array<any>): void;
        off(type: string, caller: any, listener: Function, onceOnly?: boolean): void;
        GetObj(unionid: string): any;
        ReadMsg(msg: any): void;
        protected createObject(typ: string, guid: string): WebObjectBase;
    }
}
declare module web.libs {
    import HttpRequest = Laya.HttpRequest;
    class WebProtocolsBase {
        protected _httpRequest: HttpRequest;
        protected _mgr: WebObjectMgrBase;
        protected _url: string;
        protected _game_id: string;
        protected _unionid: string;
        protected _login_str: string;
        protected _onNotLogin: Function;
        protected _httpRquestPool: Array<HttpRequest>;
        constructor(gameid: string, mgr: WebObjectMgrBase, url: string, onNotLogin: Function);
        readonly url: string;
        /**
         * 从http连接池分配实例
         */
        protected popRequest(): HttpRequest;
        /**
         * 将http连接返回连接池
         */
        protected pushRequest(inst: HttpRequest): void;
        protected OnComplete(onComplete: any, onError: any, msg: any): void;
        /**
         * 登录游戏，获取unionid，并得到所有对象的创建包
         * @param invite
         * @param code
         * @param onComplete
         * @param onError
         */
        login(invite: string, code: string, onComplete: Function, onError: Function): void;
        /**
         * 测试接口，登录游戏，获取unionid，并得到所有对象的创建包
         * @param invite
         * @param code
         * @param onComplete
         * @param onError
         */
        loginTest(invite: string, code: string, onComplete: Function, onError: Function): void;
        /**
         * 获取二维码
         * @param path
         * @param width
         * @param onComplete
         * @param onError
         */
        getAccessToken(path: string, width: number, onComplete: Function, onError: Function): void;
        /**
         * 疯狂登入接口，登录游戏
         * @param invite
         * @param code
         * @param onComplete
         * @param onError
         */
        loginCrazy(invite: string, code: string, onComplete: Function, onError: Function): void;
        /**
         * 获取unionid,login_str,server info
         * @param url
         * @param code
         * @param onComplete
         * @param onError
         */
        GetLoginInfo(url: string, code: string, encrypted_data: string, iv: string, onComplete: Function, onError: Function): void;
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
        GetLoginInfoH5(url: string, channelExt: string, email: string, game_appid: string, new_time: number, loginplatform2cp: string, user_id: string, sdklogindomain: string, sdkloginmodel: string, sign: string, icon: string, nickname: string, openid: string, sex: string, onComplete: Function, onError: Function): void;
        /**
         * 测试接口，获取unionid,login_str,server info
         * @param url
         * @param code
         * @param onComplete
         * @param onError
         */
        GetLoginInfoTest(url: string, code: string, onComplete: Function, onError: Function): void;
        /**
         * 登录游戏，并得到所有对象的创建包
         * @param invite
         * @param login_str
         * @param onComplete
         * @param onError
         */
        ShardsLogin(invite: string, login_str: string, qd_id: string, onComplete: Function, onError: Function): void;
    }
}
