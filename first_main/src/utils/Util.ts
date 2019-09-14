
let reg = new RegExp("^[\u4e00-\u9fa5]+$");

/**名称截取超过5个字节显示... */
function getNameSlice(str: string, c = 5) {
    if (!str) return "";
    let len: number = str.length;
    if (len <= c) {
        return str;
    }

    c = getEndEmojiIdx(str, c - 1) + 1;
    return str.slice(0, c) + "...";
}

/**主玩家名称显示处理... */
function getMainPlayerName(str: string) {
    if (!str) return "";
    let len: number = str.length;
    if (len < 9) return str;

    let preStr = str[0] + str[1] + str[2];
    let postStr = str[len - 3] + str[len - 2] + str[len - 1];
    let newStr = preStr + "***" + postStr;
    return newStr;
}

/**其他玩家名称显示处理... */
function getOtherPlayerName(str: string) {
    if (!str) return "";
    let len: number = str.length;
    let newStr = "";
    newStr = "****" + str[len - 3] + str[len - 2] + str[len - 1]
    return newStr;
}

/**
 * 获取游戏pagedef
 * @param gameid 
 */
function getPageDef(gameid: string, source_str1?) {
    if (!gameid) return null;
    let str: string = gameid.replace("DZ_", "");
    if (!str || str.length < 2) return null;
    let str1 = source_str1 || (str.substring(0, 1).toUpperCase() + str.substring(1) + "PageDef")
    let pageDef = check_eval(StringU.substitute("game{0}.page.{1}", str, str1))
    return pageDef;
}

var __poolV: { [key: string]: string } = {};
function findGameVesion(id) {
    if (WebConfig.isOnline) {
        if (!__poolV[id]) {
            __poolV[id] = Vesion["_VESION_FILES"][Laya.URL.formatURL(StringU.substitute("{0}.game.bin", id)).replace(Laya.URL.basePath, "").replace(WebConfig.res_url, "").replace("?v=", "").replace(/([0-9A-Fa-f]{7}_)+/g, "")];
        }

        return __poolV[id];
    }
    return id;
}

function updateGameJS(includes?: string[] | string) {
    if (!includes || !includes.length) return;
    let gameLoadedObj = JSON.parse(localGetItem("gameLoadedObj"));
    if (gameLoadedObj) {
        let count = 0;
        for (let key in gameLoadedObj) {
            if (includes.indexOf(key) == -1) continue;
            if (gameLoadedObj.hasOwnProperty(key)) {
                if (gameLoadedObj[key] == findGameVesion(key)) {
                    count++;
                    Laya.timer.frameOnce(count, this, () => {
                        JsLoader.ins.startLoad(key)
                    })
                }
            }
        }
    }
}

function clearJSGame(ignore?: string[] | string) {
    let obj = JsLoader.ins.gameJsPool;
    for (let key in obj) {
        if (ignore && ignore.indexOf(key) != -1) continue;
        if (obj.hasOwnProperty(key)) {
            let script = obj[key];
            script.parentNode.removeChild(script);
            delete obj[key]
            delete window["game" + key];
            window["game" + key] = null
        }
    }
}

function check_eval(str: string) {
    if (!str) return null;
    let arr = str.split(".");
    if (!arr || !arr.length) return null;
    let pathLen = arr.length;
    let idx = 0;
    let obj: any = window;
    do {
        obj = obj[arr[idx]]
        if (!obj) {
            break;
        }
        idx++;
    }
    while (idx < pathLen)
    return obj;
}

function checkGameJsLoad(gameid, needError?) {
    let isloaded = check_eval("game" + gameid);
    if (isDebug && !isloaded && needError) {
        throw new Error("you index.html not MyInport")
    }
    return isloaded;
}


function getAsset(gameid: string, check?) {
    if (gameid.indexOf("component") != -1) {
        return []
    }
    else if (gameid.indexOf("dating") != -1) {
        let DatingPageDef = getPageDef(gameid, "DatingPageDef");
        if (check) return !DatingPageDef || DatingPageDef["isinit"];
        if (!DatingPageDef["isinit"]) {
            DatingPageDef.myinit(gameid);
            DatingPageDef["isinit"] = true;
        }
        return DatingPageDef["__needLoadAsset"];
    } else {
        let GamePageDef = getPageDef(gameid);
        if (check) return !GamePageDef || GamePageDef["isinit"];
        if (!GamePageDef["isinit"]) {
            GamePageDef.myinit(gameid);
            GamePageDef["isinit"] = true;
        }
        return GamePageDef["__needLoadAsset"];
    }
}

function myeval(str) {
    let obj: any = check_eval(str);
    if (obj) {
        return new obj()
    }

    if (isDebug) {
        throw new Error("this class is null: " + str)
    }

    return null;
}

/**
 * 获取pagedef name
 * @param gameid 
 */
function getPageDefName(gameid: string) {
    if (!gameid) return null;
    let str: string = gameid.replace("DZ_", "");
    if (!str || str.length < 2) return null;
    let str1 = str.substring(0, 1).toUpperCase() + str.substring(1)
    return str1;
}

function getEndEmojiIdx(substring, i) {
    let hs = substring.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
        if (substring.length > i) {
            let ls = substring.charCodeAt(i + 1);
            let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
            if (0x1d000 <= uc && uc <= 0x1f77f) {
                return i + 1;
            }
        }
    } else if (substring.length > i) {
        let ls = substring.charCodeAt(i + 1);
        if (ls == 0x20e3) {
            return i + 1;
        }
    }
    return i;
}

function isEmojiCharacter(substring) {
    for (let i = 0; i < substring.length; i++) {
        let hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                let ls = substring.charCodeAt(i + 1);
                let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true;
                }
            }
        } else if (substring.length > 1) {
            let ls = substring.charCodeAt(i + 1);
            if (ls == 0x20e3) {
                return true;
            }
        } else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true;
            } else if (0x2B05 <= hs && hs <= 0x2b07) {
                return true;
            } else if (0x2934 <= hs && hs <= 0x2935) {
                return true;
            } else if (0x3297 <= hs && hs <= 0x3299) {
                return true;
            } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                || hs == 0x2b50) {
                return true;
            }
        }
    }
}

function localSetItem(key: string, value: string): void {
    Laya.LocalStorage.setItem(key, value);
}

function localGetItem(key: string): string {
    return Laya.LocalStorage.getItem(key) as string;
}

function localRemoveItem(key: string) {
    Laya.LocalStorage.removeItem(key);
}

function localClear() {
    Laya.LocalStorage.clear();
}

function getTextLength(str: string, fontSize: number): number {
    if (!str) return 0;
    try {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (reg && reg.test(char)) {
                len += fontSize;
            } else {
                len += fontSize / 2;
            }
        }
        return len;
    } catch (error) {

    }
    return str.length;
}

//数字简写 
function getSampleNum(num: number): string {
    if (num <= 99999) return num.toString();
    num = Math.floor(num / 10000);
    if (num <= 9999) return num + "万";
    num = Math.floor(num / 10000);
    return num + "亿";
}

function saveAs(Url) {

    let blob = new Blob([''], { type: 'application/octet-stream' });

    let url = URL.createObjectURL(blob);

    let a = document.createElement('a');

    a.href = Url;

    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];

    let e = document.createEvent('MouseEvents');

    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    a.dispatchEvent(e);

    URL.revokeObjectURL(url);

}


/**
 * 数字简写2
 * @param num 数字 
 * @return [简写之后的数字，单位]
 */
function getSampleNum2(num: number): string[] {
    num = Math.abs(num);
    if (num <= 99999) return [num.toString()];
    num = Math.floor(num / 10000);
    if (num <= 9999) return [num.toString(), "万"];
    num = Math.floor(num / 10000);
    return [num.toString(), "亿"];
}

//奖励转换
function getAwards(arr: any[]): any[] {
    let arr1: any[] = [];
    for (let index = 0; index < arr.length; index += 2) {
        arr1.push([arr[index], arr[index + 1]]);
    }
    return arr1;
}


/**
 * 发起http请求
 * @param url 
 * @param data 
 * @param compCallback 
 * @param resType 
 */
function httpRequest(url: string, data: string, compCallback: Function = null, errorCallback: Function = null): void {
    let request: HttpRequest = new HttpRequest();
    request.once(LEvent.COMPLETE, this, (value: any) => {
        logd('httpRequest:', url, data, 'info:' + value);
        if (compCallback != null && value)
            compCallback(JSON.parse(value));
        request.offAll();
    });
    request.once(LEvent.ERROR, this, (...args) => {
        logd('httpRequest:', url, data, 'info:' + args);
        if (errorCallback != null)
            errorCallback.apply(null, args);
        request.offAll();
    });
    request.send(url, data, "post");
}

//url请求串转成objcet
function parseUrlParameterToObj(url: string): Object {
    let paraObj: Object = {};
    if (url && url.length) {
        let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        for (let i = 0; i < paraString.length; i++) {
            let j = paraString[i];
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
    }
    return paraObj;
}


//objcet转成url请求串
function parseObjToUrlParameter(obj: any): string {
    let str: string = "";
    for (let k in obj) {
        str += "&" + k + "=" + obj[k];
    }
    str = str.substr(1, str.length);
    return str;
}

function parsecode(num: string, n: number = 4) {
    if (!num || num.length < n) {
        return ""
    }
    return num.slice(0, n) + "****" + num.slice(-n);
}

// 区域判断
function areaContains(area: Array<number>, x: number, y: number): boolean {
    if (!area) {
        return false;
    }
    let i = 0;
    let j = 0;
    let cnt = 0;
    let size = area.length / 2;
    for (i = 0; i < size; i++) {
        j = (i == size - 1) ? 0 : i + 1;

        let xOffsetI = i * 2;
        let yOffsetI = xOffsetI + 1;

        let xOffsetJ = j * 2;
        let yOffsetJ = xOffsetJ + 1;

        if (area[yOffsetI] != area[yOffsetJ] &&
            (y >= area[yOffsetI] && y < area[yOffsetJ] || y >= area[yOffsetJ] && y < area[yOffsetI]) &&
            x < (area[xOffsetJ] - area[xOffsetI]) * (y - area[yOffsetI]) / (area[yOffsetJ] - area[yOffsetI]) + area[xOffsetI])
            cnt++;
    }
    return cnt % 2 > 0;
}

//矩形顶点碰撞
function areaContains2(area: Array<number>, area2: Array<number>) {
    let rect1: Laya.Rectangle = Laya.Rectangle._getWrapRec(area);
    let rect2: Laya.Rectangle = Laya.Rectangle._getWrapRec(area2);

    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        return true;
    }
    return false;
}

//指定位置加入空格
function addSpaceInPointPos(pos: number, strText: string) {
    strText = strText.slice(0, pos) + " " + strText.slice(pos);
    return strText;
}

//去除字符串中的空格
function removeSpaceStr(strText: string): string {
    strText = strText.split(" ").join("");
    return strText;
}