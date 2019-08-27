// v1.0
declare module core.net {
    class Encipher {
        private PROTO_TEA_C2S;
        private PROTO_MD5_KEY;
        private xor_key_c2s;
        constructor();
        private encipher_init;
        encipher_reset(pkt: ByteArray): void;
        encipher_encode(pkt: ByteArray): number;
    }
}
declare module core.net {
    const EV_CONNECT: number;
    const EV_CLOSED: number;
    const EV_ERROR: number;
    class FlowInfo {
        codes: Array<number>;
        total: number;
        add(optcode: number, msg: any): void;
    }
    class Network extends Laya.Socket {
        static SEND_MSG_NOT_CONNECTED: string;
        private _name;
        name: string;
        private _address;
        private _port;
        private _hanlders;
        private _sendFlowInfo;
        private _sendRecordData;
        private _receiveFlowInfo;
        readonly sendFlowInfo: FlowInfo;
        readonly receiveFlowInfo: FlowInfo;
        readonly sendRecordData: number[];
        private encipher;
        private _cmdFilter;
        addCmdFilter(cmd: number): void;
        removeCmdFilter(cmd: number): void;
        private _tempBytes;
        constructor(v?: string);
        flowStatistics: boolean;
        readonly url: string;
        setRemotePoint(addr: string, p: number): void;
        addHanlder(optcode: number, caller: any, method: Function, args?: Array<any>): void;
        removeHanlder(optcode: number, caller: any, method: Function): void;
        isWss(): boolean;
        connect(): void;
        sendMsg(optcode: number, msg: ByteArray): void;
        private onMessageReveived;
        protected readPacket(optcode: number, bs: ByteArray): any;
        private disptchHanlder;
    }
}
declare module core.obj {
    class BinLogStru extends SyncEvent {
        private static _pool;
        static malloc(): BinLogStru;
        static free(ptr: BinLogStru): void;
        _opt: number;
        _typ: number;
        _index: number;
        _atomic_opt: number;
        _value_u32_buffer: DataView;
        _value_dbe: number;
        _value_str: string;
        _callback_index: number;
        _old_value_u32_buffer: DataView;
        _old_value_dbe: number;
        _old_value_str: string;
        BinLogStru(): void;
        opt: number;
        index: number;
        offset: number;
        typ: number;
        atomic_opt: number;
        callback_idx: number;
        uint32: number;
        int32: number;
        bit: number;
        old_int32: number;
        uint16: number;
        int16: number;
        byte: number;
        double: number;
        float: number;
        str: string;
        old_str: string;
        value: number;
        old_value: number;
        Clear(): void;
        ReadFrom(bytes: ByteArray): boolean;
        WriteTo(bytes: ByteArray): void;
        clone(): BinLogStru;
    }
}
declare module core.obj {
    class GuidObject extends SyncEvent {
        /**
         * 用于监听下标变化
         */
        private _events_value;
        private _int_binlog_array;
        /**
         * 用于监听字符下标变化
         */
        private _events_str_values;
        private _str_binlog_array;
        /**
         * 用于触发多下标单回调的情况
         */
        private _events_mask;
        /**
         * 用于事件回调
         */
        private _events_callback;
        protected _uint32_values_len: number;
        protected _uint32_values_buffer: DataView;
        protected _str_values_len: number;
        protected _str_values: Array<string>;
        protected _guid: string;
        protected _u_guid: number;
        /**
         * 从模式下更新事件触发后产生
         * 回调格式  this._after_update(obj:GuidObject,flags:number,intMask:UpdateMask,strMask:UpdateMask):void
         */
        protected _after_update: Function;
        private static addListens_mask;
        private static tmpIntMask;
        private static tmpStrMask;
        private _tmpBinlog;
        fieldChangeData: any;
        guid: string;
        oid: number;
        constructor();
        fieldCountOpen: boolean;
        /**
         * 重置整个对象,下标清零
         */
        Reset(): void;
        private clearValues;
        protected checkIntSize(index: number): void;
        protected checkStrSize(index: number): void;
        private OnEventSyncBinLog;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        AddListen(index: number, caller: any, callback: Function): void;
        /**
         *  监听对象在下标变化
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        AddListens(baseIndex: number, caller: any, callback: Function, ...arg: any[]): void;
        /**
         *  监听对象在下标变化(一段下标)
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        AddListensSeq(beginIndex: number, endIndex: number, caller: any, callback: Function): void;
        /**
         * 移除监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        removeListene(index: number, caller: any, callback?: Function): void;
        /**
         *  移除监听对象在下标变化，列表集合
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        removeListenes(baseIndex: number, caller: any, callback?: Function, ...arg: any[]): void;
        /**
         *  移除监听对象在下标变化(一段下标)
         * @param baseIndex 下标基础
         * @param callback 回调指针
         * @param arg 下标基础之后的列表
         */
        removeListenesSeq(beginIndex: number, endIndex: number, caller?: any, callback?: Function): void;
        /**
         * 监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        AddListenString(index: number, caller: any, callback: Function): void;
        /**
         * 移除监听对象在下标变化
         * @param index 下标值
         * @param callback 回调格式function(binlog:BinLogStru):void
         */
        removeListeneString(index: number, caller?: any, callback?: Function): void;
        GetDouble(index: number): number;
        GetUInt32(index: number): number;
        GetInt32(index: number): number;
        GetUInt16(index: number, offset: number): number;
        GetInt16(index: number, offset: number): number;
        GetFloat(index: number): number;
        GetByte(index: number, offset: number): number;
        GetUInt8(index: number, offset: number): number;
        GetBit(index: number, offset: number): boolean;
        GetStr(index: number): string;
        SetDouble(index: number, value: number): void;
        AddDouble(index: number, value: number): void;
        SubDouble(index: number, value: number): void;
        SetUInt32(index: number, value: number): void;
        AddUInt32(index: number, value: number): void;
        SubUInt32(index: number, value: number): void;
        SetInt32(index: number, value: number): void;
        AddInt32(index: number, value: number): void;
        SubInt32(index: number, value: number): void;
        SetUInt16(index: number, offset: number, value: number): void;
        AddUInt16(index: number, offset: number, value: number): void;
        SubUInt16(index: number, offset: number, value: number): void;
        SetInt16(index: number, offset: number, value: number): void;
        AddInt16(index: number, offset: number, value: number): void;
        SubInt16(index: number, offset: number, value: number): void;
        SetFloat(index: number, v: number): void;
        SetByte(index: number, offset: number, value: number): void;
        AddByte(index: number, offset: number, value: number): void;
        SubByte(index: number, offset: number, value: number): void;
        SetStr(index: number, val: string): void;
        SetBit(index: number, offset: number): void;
        UnSetBit(index: number, offset: number): void;
        private ReadValues;
        private ReadStringValues;
        /**
         * 数字下标创建包掩码
         * @param mask
         */
        private GetCreateMask;
        /**
         * 字符串创建包掩码
         * @param mask
         */
        private GetCreateStringMask;
        private ApplyAtomicBinLog;
        /**
         * 将binlog的操作实施到对象，并且如果就主模式，转换binlog得到
         * 这个函数会把转
         * @param binlog
         */
        private ApplyBinLog;
        private AddBinlogStru;
        private DispatchIndex;
        ReadFrom(flags: number, bytes: ByteArray): boolean;
        onBaseCreated(): void;
        WriteCreateBlock(bytes: ByteArray, int_mask: UpdateMask, str_mask: UpdateMask): void;
        WriteValues(mask: UpdateMask, bytes: ByteArray): void;
        WriteStringValues(mask: UpdateMask, bytes: ByteArray): void;
        GetHashCode(): number;
        Equals(o: GuidObject): Boolean;
        tostring(): Array<string>;
        dispose(): void;
    }
}
declare module core.obj {
    class GuidObjectTable extends SyncEvent {
        protected _objs: Object;
        private _newEvent;
        private _delEvent;
        protected _indexer: StringIndexer;
        protected _hashGUID: Function;
        protected _u_2_guid: Object;
        constructor();
        Get(k: string): GuidObject;
        /**
         * 索引器
         */
        readonly indexer: StringIndexer;
        /**
         * 创建对象
         * @param k
         * @return
         */
        CreateObject(k: string, u: number): GuidObject;
        /**
         * 释放对象
         * @param o
         */
        ReleaseObject(o: GuidObject): void;
        ReleaseKey(k: string): boolean;
        AttachObject(o: GuidObject): void;
        DetachObject(o: GuidObject): void;
        protected static applyBlock_tmp_obj: any;
        /**
         * 应用对象更新数据包
         * @param bytes
         */
        ApplyBlock(bytes: ByteArray): boolean;
        SearchObject(s: string, vec: Array<string>): void;
        ForEachObject(f: Function): void;
        /**
         * 调用远程创建对象，成功的时候回调
         * @param guid
         * @param cb function(o:GuidObject):void
         */
        RegisterCreateEvent(guid: string, caller: any, cb: Function): void;
        /**
         * 调用远程删除对象,成功时回调
         * @param guid
         * @param cb function(o:GuidObject):void
         */
        RegisterReleaseEvent(guid: string, caller: any, cb: Function): void;
        private _packet_pool;
        /**
         * 从池中分配新的数据包,如果没有包号就不要写入
         * @param optCode
         * @return
         */
        newPacket(optCode?: number): ByteArray;
        /**
         * 回收数据包到包池
         * @param pkt
         */
        freePacket(pkt: ByteArray): void;
        /**
         * 清理对象
         */
        clearObjs(): void;
        protected removeObject(guid: string, obj: GuidObject): void;
        protected saveObjsToString(): string;
        protected loadObjsFormString(data: string): void;
        dispose(): void;
    }
}
/**
* 对象池对象的接口
*/
declare module core.utils {
    interface IPoolsObject {
        poolName: string;
        /**
         * 进池 （相当于对象dispose函数）
         */
        intoPool(...arg: any[]): void;
        /**
         * 出池 （相当于对象初始化函数）
         */
        outPool(...arg: any[]): void;
    }
}
declare module core.obj {
    class HanlderStruct implements IPoolsObject {
        /** 执行域(this)。*/
        caller: any;
        /** 处理方法。*/
        method: Function;
        /** 参数。*/
        args: Array<any>;
        dispose: boolean;
        poolName: string;
        /**
         * 进池 （相当于对象dispose函数）
         */
        intoPool(...arg: any[]): void;
        /**
         * 出池 （相当于对象初始化函数）
         */
        outPool(...arg: any[]): void;
    }
    /**
    * 事件分发器,由于本身事件数量肯定不会多
    * 所以没有必要使用二分查找算法,直接遍历
    * 事件ID与事件回调处于不同的数组，通过相同的数组下标关联
    * @author linbc
    */
    class NetEventDispatcher {
        static KEY_TYPE_INT: number;
        static KEY_TYPE_STRING: number;
        static KEY_TYPE_INT_MASK: number;
        protected _event_key_type: number;
        protected _event_id_int: Array<number>;
        protected _event_id_str: Array<string>;
        protected _event_callback: Array<HanlderStruct>;
        protected _event_id_int_mask: Array<UpdateMask>;
        protected _callback_index: number;
        private _event_index;
        constructor(type?: number);
        /**
         * 触发该事件的参数
         * @param param
         */
        private DispatchIndex;
        DispatchString(key: string, param: Object): void;
        DispatchInt(key: number, param: Object): void;
        DispatchIntMask(key: UpdateMask, param: Object): void;
        /**
         * 根据规则触发整数回调
         *
         * @param param
         * @param pred 回调格式 pred(index,binlog)->bool
         */
        Dispatch(param: Object, pred: Function): void;
        /**
         * 添加回调监听,监听ID手工指定
         * @param key	事件ID
         * @param f		回调函数闭包,可以支持一个参数(Object)
         */
        AddListenInt(key: number, caller: any, f: Function): void;
        AddListenString(key: string, caller: any, f: Function): void;
        AddListenIntMask(key: UpdateMask, caller: any, f: Function): void;
        /**
         * 移除整型类的回调监听
         * @param key 	事件ID
         * @param f		回调函数闭包,可以支持一个参数(Object)，如果f为空，则移除所有
         */
        removeListenerInt(key: number, caller: any, f?: Function): void;
        /**
         * 移除字符串类型的回调监听
         * @param key 	事件ID
         * @param f 回调函数闭包,可以支持一个参数(Object)，如果f为空，则移除所有
         */
        removeListenerString(key: string, caller: any, f?: Function): void;
        /**
         * 移除多下标监听
         * @param key
         * @param f
         */
        removeListenerUpdateMask(key: UpdateMask, caller: any, f?: Function): void;
        /**
         *  添加回调监听,事件ID自增后并返回
         * @param f	事件支持一个参数,Object
         */
        AddCallback(caller: any, f: Function): number;
        /**
         * 清空所有已经注册的事件监听
         */
        Clear(): void;
    }
}
declare module core.obj {
    class StringIndexer {
        protected _indexerExp: Array<RegExp>;
        protected _objs: Array<Array<GuidObject>>;
        constructor();
        /**
         * 根据正则表达式返回加入的索引，并返回索引编号 如: create("^i\d+") 代表所有的物品
         * @param exp
         * @return
         */
        createIndex(exp: string): number;
        /**
         * 根据正则表达式返回索引
         * @param exp 正则表达式
         * @return 返回索引,如果返回-1就是没找到
         */
        getIndex(exp: string): number;
        /**
         * 释放正则表达式的索引的内容
         * 暂时不支持运行过程中增加和删除索引
         * @param exp
         */
        releaseIndex(exp: string): void;
        /**
         * 根据传入的字符串，验证符合哪个索引
         * @param obj
         * @return
         */
        private test;
        /**
         * 插入对象，遍历所有的正则表达式，如果符合则会插入
         * @param obj
         */
        insert(obj: GuidObject): void;
        /**
         * 根据对象的GUID移除所在的索引
         * @param guid
         */
        remove(guid: string): void;
        /**
         * 根据正则表达式查询对象集合
         * @param exp
         * @return
         */
        query(exp: string): Array<GuidObject>;
        /**
         * 根据索引编号返回所有的对象集合
         * @param indexTyp
         * @return
         */
        get(indexTyp: number): Array<GuidObject>;
        Clear(): void;
    }
}
declare module core.obj {
    const OBJ_OPT_NEW: number;
    const OBJ_OPT_DELETE: number;
    const OBJ_OPT_UPDATE: number;
    const OBJ_OPT_BINLOG: number;
    const OBJ_OPT_U_GUID: number;
    const OPT_SET: number;
    const OPT_UNSET: number;
    const OPT_ADD: number;
    const OPT_SUB: number;
    const TYPE_UINT32: number;
    const TYPE_UINT16: number;
    const TYPE_UINT8: number;
    const TYPE_BIT: number;
    const TYPE_UINT64: number;
    const TYPE_INT32: number;
    const TYPE_STRING: number;
    const TYPE_INT16: number;
    const TYPE_INT8: number;
    const TYPE_FLOAT: number;
    const TYPE_DOUBLE: number;
    const ATOMIC_OPT_RESULT_NO: number;
    const ATOMIC_OPT_RESULT_TRY: number;
    const ATOMIC_OPT_RESULT_OK: number;
    const ATOMIC_OPT_RESULT_FAILED: number;
    class SyncEvent extends Laya.EventDispatcher {
        static OBJ_OPT_NEW: number;
        static OBJ_OPT_DELETE: number;
        static OBJ_OPT_UPDATE: number;
        static OBJ_OPT_BINLOG: number;
        static OBJ_OPT_U_GUID: number;
        static OPT_SET: number;
        static OPT_UNSET: number;
        static OPT_ADD: number;
        static OPT_SUB: number;
        static TYPE_UINT32: number;
        static TYPE_UINT16: number;
        static TYPE_UINT8: number;
        static TYPE_BIT: number;
        static TYPE_UINT64: number;
        static TYPE_INT32: number;
        static TYPE_STRING: number;
        static TYPE_INT16: number;
        static TYPE_INT8: number;
        static TYPE_FLOAT: number;
        static TYPE_DOUBLE: number;
        static ATOMIC_OPT_RESULT_NO: number;
        static ATOMIC_OPT_RESULT_TRY: number;
        static ATOMIC_OPT_RESULT_OK: number;
        static ATOMIC_OPT_RESULT_FAILED: number;
        static tmpValueBytes: ByteArray;
        constructor();
        static init(): void;
    }
}
declare module core.obj {
    class UpdateMask {
        private _bytes;
        constructor();
        readonly baseByteArray: ByteArray;
        Clear(): void;
        /**
        * 获取掩码数据列表，是否发生更新
        * @param pos 索引位置
        * @param len 长度
        * @return
        */
        GetBits(pos: number, len?: number): boolean;
        GetBit(i: number): boolean;
        SetBit(i: number): void;
        WriteTo(bytes: ByteArray): boolean;
        ReadFrom(bytes: ByteArray): boolean;
        GetCount(): number;
        SetCount(val: number): void;
        empty(): boolean;
        /**
            * updateMask的或者掩码操作
            * @param other
            */
        or(other: UpdateMask): void;
        /**
            * 两个updatemask并且成功
            * @param other
            * @return
            */
        test(other: UpdateMask): boolean;
        /**
            * 收缩,把byteArray的长度调整到最合理的位置
            */
        private condense;
        /**
            * 判断两个掩码是否相等
            * @param other
            * @return
            */
        equals(other: UpdateMask): boolean;
        /**
            * 掩码克隆函数
            * @return
            */
        clone(): UpdateMask;
        setInt(index: number, value: number): void;
        getInt(index: number): number;
    }
}
/**
* 贴图素材
*/
declare module core.resource {
    import Handler = Laya.Handler;
    class AssetsLoader extends Laya.EventDispatcher {
        private _list;
        private _handler;
        load(assets: Array<string>, handler: Handler, isEventProgress?: boolean, priority?: number, type?: string): void;
        private onAssetLoadProgress;
        private onAssetParseComplete;
        release(url: string, checkNow?: boolean): void;
        clear(checkNow?: boolean): void;
    }
}
declare module core.resource {
    class PreLoad extends Laya.EventDispatcher {
        private _loadMap;
        private _loadCount;
        private _totalCount;
        constructor();
        readonly totalCount: number;
        readonly loadCount: number;
        load(url: string, type: number): void;
        clear(url: string, cancelLoad?: boolean): void;
    }
}
/**
* 引用计数对象
*/
declare module core.resource {
    class RefAsset extends Laya.EventDispatcher {
        static GENRAL: number;
        static BUFFER: number;
        static TEMPLET: number;
        private static MAX_FREE_TIME;
        private static _refMap;
        private static _refAsset_objs;
        private static _refAsset_keys;
        private static _INIT;
        /**
         * 获取引用计数资源
         * @param key
         * @param create
         * @param isEventProgress
         * @param type 资源类型  Loader.IMAGE Loader.BUFFER Loader.ATLAS Loader.JSON Loader.TEXT 等
         */
        static Get(key: string, create?: boolean, isEventProgress?: boolean, priority?: number, type?: string): RefAsset;
        protected static Set(key: string, asset: RefAsset, source_key?: string): void;
        private static _nextTimer;
        static update(diff: any): void;
        private _refCount;
        protected _timeOut: number;
        private _addTimeOut;
        addTimeOut: number;
        protected _parseComplete: boolean;
        readonly parseComplete: boolean;
        protected _parseError: boolean;
        readonly parseError: boolean;
        private _isEventProgress;
        protected _url: string;
        readonly url: string;
        constructor(url: string, isEventProgress?: boolean, priority?: number, type?: string);
        private _onProgressHandler;
        protected init(type: string, priority?: number): void;
        private onProgress;
        private onComplete;
        private complete;
        private _timeCount;
        private setLocalStorage;
        retain(): void;
        release(checkNow?: boolean): void;
        forceMoveRef(): void;
        private update;
        checkNow(): void;
        protected destroy(): void;
    }
}
/**
* 音效管理
只能管理20以内的音效，超过20秒会有问题。。。
由于音效播放完后无法正确回调播放完毕，所以统一播放一次，重置回收时间，暂时设置20秒
*/
declare module core.resource {
    class RefSound extends RefAsset {
        private static MAX_FREE_TIME1;
        static Get(key: string, create?: boolean, isEventProgress?: boolean, priority?: number, type?: string): RefSound;
        constructor(url: string);
        protected init(): void;
        playSound(url: string, loops?: number, soundClass?: any, startTime?: number): void;
        stopSound(): void;
        protected destroy(): void;
    }
}
/**
* 骨骼动画模板素材
*/
declare module core.resource {
    class RefTemplet extends core.resource.RefAsset {
        static Get(key: string, create?: boolean, isEventProgress?: boolean, priority?: number, type?: string): RefTemplet;
        private _factory;
        constructor(url: string);
        protected init(): void;
        buildArmature(aniMode?: number): laya.ani.bone.Skeleton;
        protected destroy(): void;
    }
}
declare module core.utils {
    class Base64 {
        private static _keyStr;
        constructor();
        static encode(input: string): string;
        static decode(input: string): string;
        private static _utf8_encode;
        private static _utf8_decode;
        static encodeBytes: (arraybuffer: any) => string;
        static decodeBytes: (base64: any) => ArrayBuffer;
    }
}
declare module core.utils {
    /**
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @class egret.Endian
     * @classdesc
     */
    class Endian {
        /**
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.LITTLE_ENDIAN
         */
        static LITTLE_ENDIAN: string;
        /**
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.BIG_ENDIAN
         */
        static BIG_ENDIAN: string;
    }
    /**
     * @class ByteArray
     * @classdesc
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级 开发人员。
     */
    class ByteArray {
        private static SIZE_OF_BOOLEAN;
        private static SIZE_OF_INT8;
        private static SIZE_OF_INT16;
        private static SIZE_OF_INT32;
        private static SIZE_OF_UINT8;
        private static SIZE_OF_UINT16;
        private static SIZE_OF_UINT32;
        private static SIZE_OF_FLOAT32;
        private static SIZE_OF_FLOAT64;
        private BUFFER_EXT_SIZE;
        private data;
        private _position;
        private write_position;
        /**
         * 更改或读取数据的字节顺序；egret.Endian.BIG_ENDIAN 或 egret.Endian.LITTLE_ENDIAN。
         * @default egret.Endian.BIG_ENDIAN
         * @member ByteArray#endian
         */
        endian: string;
        /**
         * 创建一个 ByteArray 对象以引用指定的 ArrayBuffer 对象
         * @param buffer {ArrayBuffer} 数据源
         */
        constructor(buffer?: ArrayBuffer);
        private _setArrayBuffer;
        setdata(srcByte: any): void;
        /**
        * @private
        */
        buffer: ArrayBuffer;
        /**
        * @private
        */
        dataView: DataView;
        /**
         * @private
         */
        readonly bufferOffset: number;
        getByte(i: number): number;
        setByte(i: number, num: number): void;
        /**
         * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
         * @member {number} ByteArray#position
         */
        position: number;
        reset(): void;
        optcode: number;
        /**
         * ByteArray 对象的长度（以字节为单位）。
         * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
         * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
         * @member {number} ByteArray#length
         */
        length: number;
        /**
         * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
         * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
         * @member {number} ByteArray#bytesAvailable
         */
        readonly bytesAvailable: number;
        /**
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
         * @method ByteArray#clear
         */
        clear(): void;
        /**
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @return 如果字节不为零，则返回 true，否则返回 false
         * @method ByteArray#readBoolean
         */
        readBoolean(): boolean;
        /**
         * 从字节流中读取带符号的字节
         * @return 介于 -128 和 127 之间的整数
         * @method ByteArray#readByte
         */
        readByte(): number;
        /**
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @method ByteArray#readBytes
         */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @return 双精度（64 位）浮点数
         * @method ByteArray#readDouble
         */
        readDouble(): number;
        /**
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @return 单精度（32 位）浮点数
         * @method ByteArray#readFloat
         */
        readFloat(): number;
        /**
         * 从字节流中读取一个带符号的 32 位整数
         * @return 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @method ByteArray#readFloat
         */
        readInt(): number;
        readInt32(): number;
        getInt32(pos: number): number;
        /**
         * 使用指定的字符集从字节流中读取指定长度的多字节字符串
         * @param length 要从字节流中读取的字节数
         * @param charSet 表示用于解释字节的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @return UTF-8 编码的字符串
         * @method ByteArray#readMultiByte
         */
        /**
         * 从字节流中读取一个带符号的 16 位整数
         * @return 介于 -32768 和 32767 之间的 16 位带符号整数
         * @method ByteArray#readShort
         */
        readShort(): number;
        readInt16(): number;
        readFloatTwoByte($scaleNum: number): number;
        readFloatOneByte(): number;
        /**
         * 从字节流中读取无符号的字节
         * @return 介于 0 和 255 之间的 32 位无符号整数
         * @method ByteArray#readUnsignedByte
         */
        readUnsignedByte(): number;
        readUint8(): number;
        readInt8(): number;
        /**
         * 从字节流中读取一个无符号的 32 位整数
         * @return 介于 0 和 4294967295 之间的 32 位无符号整数
         * @method ByteArray#readUnsignedInt
         */
        readUnsignedInt(): number;
        readUint32(): number;
        readUint64(): number;
        /**
         * 从字节流中读取一个无符号的 16 位整数
         * @return 介于 0 和 65535 之间的 16 位无符号整数
         * @method ByteArray#readUnsignedShort
         */
        readUnsignedShort(): number;
        readUint16(): number;
        /**
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @return UTF-8 编码的字符串
         * @method ByteArray#readUTF
         */
        readUTF(): string;
        readString(): string;
        /**
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @return 由指定长度的 UTF-8 字节组成的字符串
         * @method ByteArray#readUTFBytes
         */
        readUTFBytes(length: number): string;
        readStringByLen(len: number): string;
        /**
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @method ByteArray#writeBoolean
         */
        writeBoolean(value: boolean): void;
        /**
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @method ByteArray#writeByte
         */
        writeByte(value: number): void;
        writeUint8(value: number): void;
        writeInt8(value: number): void;
        /**
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @method ByteArray#writeBytes
         */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @method ByteArray#writeDouble
         */
        writeDouble(value: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @method ByteArray#writeFloat
         */
        writeFloat(value: number): void;
        /**
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @method ByteArray#writeInt
         */
        writeInt(value: number): void;
        writeInt32(value: number): void;
        setInt32(pos: number, value: number): void;
        /**
         * 使用指定的字符集将多字节字符串写入字节流
         * @param value 要写入的字符串值
         * @param charSet 表示要使用的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @method ByteArray#writeMultiByte
         */
        /**
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @method ByteArray#writeShort
         */
        writeUnsignedShort(value: number): void;
        writeUint16(value: number): void;
        writeUint64(value: number): void;
        writeShort(value: number): void;
        writeInt16(value: number): void;
        /**
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @method ByteArray#writeUnsignedInt
         */
        writeUnsignedInt(value: number): void;
        writeUint32(value: number): void;
        /**
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @method ByteArray#writeUTF
         */
        writeUTF(value: string): void;
        writeString(value: string): void;
        writeStringByLen(value: string, len: number): void;
        /**
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @method ByteArray#writeUTFBytes
         */
        writeUTFBytes(value: string): void;
        toString(): string;
        /**
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        _writeUint8Array(bytes: Uint8Array, validateBuffer?: boolean): void;
        /**
         * @private
         */
        validate(len: number): boolean;
        /**********************/
        /**********************/
        private validateBuffer;
        /**
         * UTF-8 Encoding/Decoding
         */
        private encodeUTF8;
        private decodeUTF8;
        private encoderError;
        private decoderError;
        private EOF_byte;
        private EOF_code_point;
        private inRange;
        private div;
        private stringToCodePoints;
        stringValue: string;
        compress(algorithm?: String): void;
        uncompress(algorithm?: String): void;
    }
}
declare module core.utils {
    class Direct {
        static RIGHT: number;
        static BOTTOM_RIGHT: number;
        static BOTTOM: number;
        static BOTTOM_LEFT: number;
        static LEFT: number;
        static UPPER_LEFT: number;
        static UP: number;
        static UPPER_RIGHT: number;
        static MAX_DIRECT: number;
        /**
         * 90角度的弧度值
         */
        static ANGLE_RADIANS_90: number;
        /**
         * 45角度的弧度值
         */
        static ANGLE_RADIANS_45: number;
        /**
         * 30角度的弧度值
         */
        static ANGLE_RADIANS_30: number;
        /**
         * 15角度的弧度值
         */
        static ANGLE_RADIANS_15: number;
        /**
         * 120角度的弧度值
         */
        static ANGLE_RADIANS_120: number;
        /**
         * 360角度弧度值
         */
        static ANGLE_RADIANS_360: number;
        /**
         * 转换成8方向的数值,Math.round
         * @param angle 0-2PI的弧度值
         * @return
         *
         */
        static GetDirect(angle: number): number;
        /**
         * 转换成8方向的数值,Math.round
         * @param angle 0-2PI的弧度值
         * @return
         *
         */
        static GetDirect2(vec2: number): number;
        /**
        
        /**
         * 转换绝对的0-7的8方向枚举，例如-1就是枚举7
         * @param direct
         * @return
         *
         */
        static AbsDirect(direct: number): number;
        /**
         * 根据8方向数值获得弧度
         * @param direct 0-7方向
         * @return
         *
         */
        static GetAngle(direct: number): number;
        /**
         * 根据原点到目标点，计算出8方向
         * @param sx 源点x
         * @param sy 原点y
         * @param dx 目标点x
         * @param dy 目标点y
         * @return 0-7方向
         *
         */
        static ATan2(sx: number, sy: number, dx: number, dy: number): number;
    }
}
/**
* 对象池对象的接口
*/
declare module core.utils {
    interface IPoolsObject {
        poolName: string;
        /**
         * 进池 （相当于对象dispose函数）
         */
        intoPool(...arg: any[]): void;
        /**
         * 出池 （相当于对象初始化函数）
         */
        outPool(...arg: any[]): void;
    }
}
/**
* 多语言
*/
declare module core.utils {
    class L {
        private static FH_0;
        private static _langs;
        private static _langInitial;
        private static _oprates;
        private static _oprateInitial;
        /**
         * 装载语言包
         * @param buffer
         */
        static loadLangs(content: string, covered: boolean): void;
        /**
         * 获取多语言文本
         * @param id
         */
        static GetLang(id: number, ...args: any[]): string;
        /**
         * 装载操作返回信息
         */
        static loadOprates(content: string, covered: boolean): void;
        /**
         * 获取操作返回信息
         * @param type
         * @param reason
         */
        static GetOprate(type: number, reason: number, ...args: any[]): string;
    }
}
/**
* name
*/
declare module core.utils {
    class MathU {
        /**
         * 随机指定范围的值
         * @param	min 最小值
         * @param	max 最大值
         */
        static randomRange(min: number, max: number): number;
        /**
         * 在一个圆的范围内随机坐标点
         * @param  centerPoint 圆心点
         * @param  radiusMin   随机半径最小值
         * @param  radiusMax   随机半径最大值
         */
        static randomPointInCicle(centerPoint: Vector2, radiusMin: number, radiusMax: number): Vector2;
        /**
         * 获得两点之间的距离
         * @param srcX 来源x
         * @param srcY 来源y
         * @param dstX 目标x
         * @param dstY 目标y
         * @return
         */
        static getDistance(srcX: number, srcY: number, dstX: number, dstY: number): number;
        /**
         * 通过制定的时长毫秒长度，获得旋转的圈角度
         * @param duration 时长 多少毫秒转一圈
         * @return
         */
        static getAngleTimeT(duration: number): number;
        /**
         * 通过旋转角度获得2PI的弧度
         * @param rotation
         * @return
         */
        static getAngleByRotaion(rotation: number): number;
        /**
         * 获得两点之间的弧度
         * @param srcX
         * @param srcY
         * @param dstX
         * @param dstY
         * @return
         */
        static getAngle(srcX: number, srcY: number, dstX: number, dstY: number): number;
        /**
         * 通过弧度方向获得旋转角度0-360
         * @param angle 弧度
         * @return
         */
        static getRotation(angle: number): number;
        /**
         * 返回一个随机布尔值
         * @return
         */
        static randomBoolen(): boolean;
        /**
         * 颜色滤镜之对比度调整
         */
        static colorMatrix_adjust(contrast: number, brightness: number): Array<number>;
        static colorMatrix_concat(matrixa: Array<number>, matrixb: Array<number>): Array<number>;
        static parseInt(v: number): number;
        private static _byteArray;
        static toInt(v: number): number;
        static lerp(p0: number, p1: number, t: number): number;
    }
}
/**
* MD5
*/
declare module core.utils {
    /**
    * The MD5 Message-Digest Algorithm
    */
    class MD5 {
        static digest: ByteArray;
        /**
         * Performs the MD5 hash algorithm on a string.
         *
         * @param s The string to hash
         * @return A string containing the hash value of s
         * @tiptext
         */
        static hash(s: string): string;
        static hashBytes(s: ByteArray): string;
        /**
         * Performs the MD5 hash algorithm on a ByteArray.
         *
         * @param s The string to hash
         * @return A string containing the hash value of s
         * @tiptext
         */
        static hashBinary(s: ByteArray): string;
        /**
         * Auxiliary function f as defined in RFC
         */
        private static f;
        /**
         * Auxiliary function g as defined in RFC
         */
        private static g;
        /**
         * Auxiliary function h as defined in RFC
         */
        private static h;
        /**
         * Auxiliary function i as defined in RFC
         */
        private static i;
        /**
         * A generic transformation function.  The logic of ff, gg, hh, and
         * ii are all the same, minus the function used, so pull that logic
         * out and simplify the method bodies for the transoformation functions.
         */
        private static transform;
        /**
         * ff transformation function
         */
        private static ff;
        /**
         * gg transformation function
         */
        private static gg;
        /**
         * hh transformation function
         */
        private static hh;
        /**
         * ii transformation function
         */
        private static ii;
        /**
         * Converts a string to a sequence of 16-word blocks
         * that we'll do the processing on.  Appends padding
         * and length in the process.
         *
         * @param s The string to split into blocks
         * @return An array containing the blocks that s was
         *			split into.
         */
        private static createBlocks;
    }
    class IntUtil {
        /**
         * Rotates x left n bits
         *
         * @langversion ActionScript 3.0
         * @playerversion Flash 9.0
         * @tiptext
         */
        static rol(x: number, n: number): number;
        /**
         * Rotates x right n bits
         *
         * @langversion ActionScript 3.0
         * @playerversion Flash 9.0
         * @tiptext
         */
        static ror(x: number, n: number): number;
        /** String for quick lookup of a hex character based on index */
        private static hexChars;
        /**
         * Outputs the hex value of a int, allowing the developer to specify
         * the endinaness in the process.  Hex output is lowercase.
         *
         * @param n The int value to output as hex
         * @param bigEndian Flag to output the int as big or little endian
         * @return A string of length 8 corresponding to the
         *		hex representation of n ( minus the leading "0x" )
         * @langversion ActionScript 3.0
         * @playerversion Flash 9.0
         * @tiptext
         */
        static toHex(n: number, bigEndian?: boolean): string;
    }
}
declare module core.utils {
    /** 昵称库 */
    class RandNickname {
        static SEX_MAN: number;
        private static _firstname;
        static addFirstname(v: string): void;
        private static _manSecondname;
        static addManSecondname(v: string): void;
        private static _womanSecondname;
        static addWomanSecondname(v: string): void;
        /**
         * 随机角色名字
         * @return 名字
        */
        static getRandomNickname(gender: number): string;
    }
}
/**
* 对象池
*/
declare module core.utils {
    class ObjectPools {
        static MOLD_DEBUG_STRICT: number;
        static MOLD_RELEASE_FAIL_SAFE: number;
        static mold: number;
        /** 对象池*/
        private static _pools;
        /**
         * 申请
         * @param def				对象类名
         * @param params			新对象构造函数的参数（最多支持10个）
         * @param arg				outPool初始化的参数
         * @return
         */
        static malloc(def: any, params?: any[], ...arg: any[]): IPoolsObject;
        /**
         * 释放
         * @param obj	对象
         */
        static free(obj: IPoolsObject): void;
        /**距离下次检查的时间*/
        private static _nextUpdateTime;
        /**心跳驱动*/
        static update(diff: number): void;
    }
}
/**
* 随机类
*/
declare module core.utils {
    class Random {
        private static _instance;
        private static readonly instance;
        static scand(v: number): void;
        static rand(): number;
        static randFloat(): number;
        static randInt(a: number, b: number): number;
        private seed;
        private m;
        private a;
        private c;
        constructor(seed: any);
        scand(v: number): void;
        rand(): number;
        randFloat(): number;
        randInt(a: number, b: number): number;
    }
}
/**
* name
*/
declare module core.utils {
    class StringU {
        static substitute(str: string, ...rest: any[]): string;
        static isEmpty(str: string): boolean;
        static trim(char: string): string;
        static ltrim(char: string): string;
        static rtrim(char: string): string;
        static beginsWith(char: string, prefix: string): boolean;
        static endsWith(char: string, suffix: string): boolean;
        static getParameter(url: string, paras: string): string;
        static parameterToObj(url: string): Object;
        /**
         * 字符串补位，补充左边
         * @param	str 需要补充的字符串
         * @param   char 需要补充的字符串
         * @param	len 最终长度
         * @return
         */
        static paddingLeft(str: string, char: string, len: number): string;
        private static _tempBytesArray;
        static readZlibData(data: ByteArray): string;
        /**
         * 通过时间戳的差值获取时间格式
         * @param diff 2个时间戳的差值
         * @param format 获得结果的格式 （例如：yyyy-MM-dd hh:mm:ss）
         */
        static formatDiff(diff: number, format: string): string;
        /**
         * 将日期格式化
         * @param date 日期对象
         * @param format 获得结果的格式 （例如：yyyy-MM-dd hh:mm:ss）
         */
        static formatDate(date: Date, format: string): string;
        static format(o: any, format: string): string;
    }
}
declare function extend(d: any, b: any): void;
declare module core.utils {
    class Log {
        static MAX_LOG_LEVEL: number;
        static LEVEL: number;
        static DATE: Date;
    }
}
declare function applog(message?: string, ...optionalParams: any[]): void;
declare function logd(...args: any[]): void;
declare function logl(...args: any[]): void;
declare function logw(...args: any[]): void;
declare function loge(...args: any[]): void;
declare function getPrefix(s: string): string;
declare function makeGuid(prefix: string, uid: number): string;
/**
* name
*/
declare module core.utils {
    class Vector2 {
        static TowardCount: number;
        static zero: Vector2;
        static right: Vector2;
        static upRight: Vector2;
        static left: Vector2;
        static up: Vector2;
        static down: Vector2;
        static temp: Vector2;
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        /**
         * len 设置向量长量
         */
        /**
        * len 取得向量长量
        */
        len: number;
        /**
         * normalizeInplace 向量单位化
         */
        normalize(): this;
        /**
         * equal 两个向量是否相等
         */
        equal(b: Vector2): boolean;
        /**
         * dist 取得两个向量距离
         */
        dist(other: Vector2): number;
        /**
         * add 向量相加
         */
        add(other: Vector2): Vector2;
        /**
         * sub 向量相减
         */
        sub(other: Vector2): Vector2;
        private static vec2;
        static sub(r: Vector2, a: Vector2, b: Vector2): Vector2;
        /**
         * mul 向量乘以标量
         */
        mul(l: number): Vector2;
        set(other: Vector2): Vector2;
        /**
         * lerp 计算插值
         */
        lerp(P1: Vector2, t: number): Vector2;
        fromToward(toward: number, towardCount?: number): Vector2;
        getToward(towardCount?: number): number;
        /**
         * 复制
         */
        clone(): Vector2;
        /**
         * 求角度 弧度制
         * @param v2 对比的向量
         */
        angle(v2: Vector2): number;
        /**
         * 转成字符串
         */
        toString(fixed?: number): string;
    }
    /**
     * 将浮点型的数值转成字节
     * 如果弧度转成角度,或者8方向
     */
    function float2Byte(f: number): number;
    /**
     * 将有符号字节转化成浮点数
     * --ubyte 0~255 -127~127 == -1.0 ~ 1.0
     */
    function byte2Float(b: number): number;
}
/**
* name
*/
declare module core.utils {
    class Vesion {
        /**
         * 版本文件加载完成
         */
        static LOAD_VESION_COMPLETE: string;
        private static _searchPaths;
        private static _searchPathLangRes;
        private static _searchPathFiels;
        private static _eventDispatcher;
        private static readonly eventDispatcher;
        static on(type: string, caller: any, listener: Function, args?: Array<any>): EventDispatcher;
        static once(type: string, caller: any, listener: Function, args?: Array<any>): EventDispatcher;
        static off(type: string, caller: any, listener: Function, onceOnly?: boolean): EventDispatcher;
        static event(type: string, data?: any): boolean;
        /**
         * 添加文件搜索路径
         * @param path				路径
         * @param isFront			是否插在前面
         */
        static addSearchPath(path: string, langRes?: string, isFront?: Boolean): void;
        /**
         * 遍历搜索路径
         * @param func
         */
        static foreachSearchPath(func: Function): void;
        /**
         * 加载文件版本信息文件
         * @param url 默认值：'version.bin'
         */
        static loadVesionFile(url?: string): void;
        private static _defaultVesion;
        private static _VESION_FILES;
        private static initVesionFiles;
        private static _notNeetSearchPaths;
        /**
         * 添加不需要版本路径的地址开头
         * @param v
         */
        static addNotNeetSearchPath(v: string): void;
        /**
         * 移除不需要版本路径的地址开头
         * @param v
         */
        static removeNotNeetSearchPath(v: string): void;
        private static _prioritySearchPaths;
        private static _fianlSearchPaths;
        static addPrioritySearchPath(path: string, isFront?: Boolean): void;
        static removePrioritySearchPath(path: string): void;
        private static baseFormatURL;
        private static formatURL;
        /**
         * 加载语言包信息
         * @param callBack
         * @param idx
         */
        private static loadLangRes;
        /**
         * 初始化语言资源包
         */
        static initLang(data: ByteArray, searchPath: string, covered?: boolean): void;
        private static _assetUrl;
        /**
         * 资源地址
         */
        static assetUrl: string;
        /**
         * 默认路径(素材多版本，搜素路径: "common/")
         */
        static defaultPath: string;
        private static createVersion;
    }
}
import EventDispatcher = Laya.EventDispatcher;
import MD5 = core.utils.MD5;
import MathU = core.utils.MathU;
import IPoolsObject = core.utils.IPoolsObject;
import ObjectPools = core.utils.ObjectPools;
import Endian = core.utils.Endian;
import ByteArray = core.utils.ByteArray;
import HanlderStruct = core.obj.HanlderStruct;
import AssetsLoader = core.resource.AssetsLoader;
declare namespace Zlib {
    export class Inflate {
        constructor(data?: Uint8Array);
        decompress(): Uint8Array;
    }

    export class Deflate {
        constructor(data?: Uint8Array);
        compress(): Uint8Array;
    }
}