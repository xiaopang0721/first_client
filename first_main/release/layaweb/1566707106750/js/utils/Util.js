var reg = new RegExp("^[\u4e00-\u9fa5]+$");
/**名称截取超过5个字节显示... */
function getNameSlice(str, c) {
    if (c === void 0) { c = 5; }
    if (!str)
        return "";
    var len = str.length;
    if (len <= c) {
        return str;
    }
    c = getEndEmojiIdx(str, c - 1) + 1;
    return str.slice(0, c) + "...";
}
/**主玩家名称显示处理... */
function getMainPlayerName(str) {
    if (!str)
        return "";
    var len = str.length;
    if (len < 9)
        return str;
    var preStr = str[0] + str[1] + str[2];
    var postStr = str[len - 3] + str[len - 2] + str[len - 1];
    var newStr = preStr + "***" + postStr;
    return newStr;
}
/**其他玩家名称显示处理... */
function getOtherPlayerName(str) {
    if (!str)
        return "";
    var len = str.length;
    var newStr = "";
    newStr = "****" + str[len - 3] + str[len - 2] + str[len - 1];
    return newStr;
}
/**
 * 获取游戏pagedef
 * @param gameid
 */
function getPageDef(gameid, source_str1) {
    if (!gameid)
        return null;
    var str = gameid.replace("DZ_", "");
    if (!str || str.length < 2)
        return null;
    var str1 = source_str1 || (str.substring(0, 1).toUpperCase() + str.substring(1) + "PageDef");
    var pageDef = check_eval(StringU.substitute("game{0}.page.{1}", str, str1));
    return pageDef;
}
var __poolV = {};
function findGameVesion(id) {
    if (WebConfig.isOnline) {
        if (!__poolV[id]) {
            __poolV[id] = Vesion["_VESION_FILES"][Laya.URL.formatURL(StringU.substitute("{0}.game.bin", id)).replace(Laya.URL.basePath, "").replace(WebConfig.res_url, "").replace("?v=", "").replace(/([0-9A-Fa-f]{7}_)+/g, "")];
        }
        return __poolV[id];
    }
    return id;
}
function updateGameJS() {
    var gameLoadedObj = JSON.parse(localGetItem("gameLoadedObj"));
    if (gameLoadedObj) {
        var count = 0;
        var _loop_1 = function (key) {
            if (gameLoadedObj.hasOwnProperty(key)) {
                if (gameLoadedObj[key] == findGameVesion(key)) {
                    count++;
                    Laya.timer.frameOnce(count, this_1, function () {
                        JsLoader.ins.startLoad(key);
                    });
                }
            }
        };
        var this_1 = this;
        for (var key in gameLoadedObj) {
            _loop_1(key);
        }
    }
}
function clearJSGame(ignore) {
    var obj = JsLoader.ins.gameJsPool;
    for (var key in obj) {
        if (ignore && ignore.indexOf(key) != -1)
            continue;
        if (obj.hasOwnProperty(key)) {
            var script = obj[key];
            script.parentNode.removeChild(script);
            delete obj[key];
            delete window["game" + key];
            window["game" + key] = null;
        }
    }
}
function check_eval(str) {
    if (!str)
        return null;
    var arr = str.split(".");
    if (!arr || !arr.length)
        return null;
    var pathLen = arr.length;
    var idx = 0;
    var obj = window;
    do {
        obj = obj[arr[idx]];
        if (!obj) {
            break;
        }
        idx++;
    } while (idx < pathLen);
    return obj;
}
function checkGameJsLoad(gameid, needError) {
    if (gameid.indexOf("dating") != -1) {
        gameid = WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP ? "datingnqp" : "dating";
    }
    var isloaded = check_eval("game" + gameid);
    if (isDebug && !isloaded && needError) {
        throw new Error("you index.html not MyInport");
    }
    return isloaded;
}
function getAsset(gameid, check) {
    if (gameid.indexOf("component") != -1) {
        return [];
    }
    else if (gameid.indexOf("dating") != -1) {
        var DatingPageDef_1 = getPageDef(gameid, "DatingPageDef");
        if (check)
            return !DatingPageDef_1 || DatingPageDef_1["isinit"];
        if (!DatingPageDef_1["isinit"]) {
            DatingPageDef_1.myinit(gameid);
            DatingPageDef_1["isinit"] = true;
        }
        return DatingPageDef_1["__needLoadAsset"];
    }
    else {
        var GamePageDef = getPageDef(gameid);
        if (check)
            return !GamePageDef || GamePageDef["isinit"];
        if (!GamePageDef["isinit"]) {
            GamePageDef.myinit(gameid);
            GamePageDef["isinit"] = true;
        }
        return GamePageDef["__needLoadAsset"];
    }
}
function myeval(str) {
    var obj = check_eval(str);
    if (obj) {
        return new obj();
    }
    if (isDebug) {
        throw new Error("this class is null: " + str);
    }
    return null;
}
/**
 * 获取pagedef name
 * @param gameid
 */
function getPageDefName(gameid) {
    if (!gameid)
        return null;
    var str = gameid.replace("DZ_", "");
    if (!str || str.length < 2)
        return null;
    var str1 = str.substring(0, 1).toUpperCase() + str.substring(1);
    return str1;
}
function getEndEmojiIdx(substring, i) {
    var hs = substring.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
        if (substring.length > i) {
            var ls = substring.charCodeAt(i + 1);
            var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
            if (0x1d000 <= uc && uc <= 0x1f77f) {
                return i + 1;
            }
        }
    }
    else if (substring.length > i) {
        var ls = substring.charCodeAt(i + 1);
        if (ls == 0x20e3) {
            return i + 1;
        }
    }
    return i;
}
function isEmojiCharacter(substring) {
    for (var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true;
                }
            }
        }
        else if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            if (ls == 0x20e3) {
                return true;
            }
        }
        else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true;
            }
            else if (0x2B05 <= hs && hs <= 0x2b07) {
                return true;
            }
            else if (0x2934 <= hs && hs <= 0x2935) {
                return true;
            }
            else if (0x3297 <= hs && hs <= 0x3299) {
                return true;
            }
            else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                || hs == 0x2b50) {
                return true;
            }
        }
    }
}
function localSetItem(key, value) {
    Laya.LocalStorage.setItem(key, value);
}
function localGetItem(key) {
    return Laya.LocalStorage.getItem(key);
}
function localRemoveItem(key) {
    Laya.LocalStorage.removeItem(key);
}
function localClear() {
    Laya.LocalStorage.clear();
}
function getTextLength(str, fontSize) {
    if (!str)
        return 0;
    try {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            if (reg && reg.test(char)) {
                len += fontSize;
            }
            else {
                len += fontSize / 2;
            }
        }
        return len;
    }
    catch (error) {
    }
    return str.length;
}
//数字简写 
function getSampleNum(num) {
    if (num <= 99999)
        return num.toString();
    num = Math.floor(num / 10000);
    if (num <= 9999)
        return num + "万";
    num = Math.floor(num / 10000);
    return num + "亿";
}
function saveAs(Url) {
    var blob = new Blob([''], { type: 'application/octet-stream' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = Url;
    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    URL.revokeObjectURL(url);
}
/**
 * 数字简写2
 * @param num 数字
 * @return [简写之后的数字，单位]
 */
function getSampleNum2(num) {
    num = Math.abs(num);
    if (num <= 99999)
        return [num.toString()];
    num = Math.floor(num / 10000);
    if (num <= 9999)
        return [num.toString(), "万"];
    num = Math.floor(num / 10000);
    return [num.toString(), "亿"];
}
//奖励转换
function getAwards(arr) {
    var arr1 = [];
    for (var index = 0; index < arr.length; index += 2) {
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
function httpRequest(url, data, compCallback, errorCallback) {
    if (compCallback === void 0) { compCallback = null; }
    if (errorCallback === void 0) { errorCallback = null; }
    var request = new HttpRequest();
    request.once(LEvent.COMPLETE, this, function (value) {
        logd('httpRequest:', url, data, 'info:' + value);
        if (compCallback != null && value)
            compCallback(JSON.parse(value));
        request.offAll();
    });
    request.once(LEvent.ERROR, this, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        logd('httpRequest:', url, data, 'info:' + args);
        if (errorCallback != null)
            errorCallback.apply(null, args);
        request.offAll();
    });
    request.send(url, data, "post");
}
//url请求串转成objcet
function parseUrlParameterToObj(url) {
    var paraObj = {};
    if (url && url.length) {
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        for (var i = 0; i < paraString.length; i++) {
            var j = paraString[i];
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
    }
    return paraObj;
}
//objcet转成url请求串
function parseObjToUrlParameter(obj) {
    var str = "";
    for (var k in obj) {
        str += "&" + k + "=" + obj[k];
    }
    str = str.substr(1, str.length);
    return str;
}
function parsecode(num, n) {
    if (n === void 0) { n = 4; }
    if (!num || num.length < n) {
        return "";
    }
    return num.slice(0, n) + "****" + num.slice(-n);
}
// 区域判断
function areaContains(area, x, y) {
    if (!area) {
        return false;
    }
    var i = 0;
    var j = 0;
    var cnt = 0;
    var size = area.length / 2;
    for (i = 0; i < size; i++) {
        j = (i == size - 1) ? 0 : i + 1;
        var xOffsetI = i * 2;
        var yOffsetI = xOffsetI + 1;
        var xOffsetJ = j * 2;
        var yOffsetJ = xOffsetJ + 1;
        if (area[yOffsetI] != area[yOffsetJ] &&
            (y >= area[yOffsetI] && y < area[yOffsetJ] || y >= area[yOffsetJ] && y < area[yOffsetI]) &&
            x < (area[xOffsetJ] - area[xOffsetI]) * (y - area[yOffsetI]) / (area[yOffsetJ] - area[yOffsetI]) + area[xOffsetI])
            cnt++;
    }
    return cnt % 2 > 0;
}
//矩形顶点碰撞
function areaContains2(area, area2) {
    var rect1 = Laya.Rectangle._getWrapRec(area);
    var rect2 = Laya.Rectangle._getWrapRec(area2);
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        return true;
    }
    return false;
}
//# sourceMappingURL=Util.js.map