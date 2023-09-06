exports.id = 5232;
exports.ids = [5232];
exports.modules = {

/***/ 82966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAC_LENGTH = exports.IV_LENGTH = exports.KEY_LENGTH = exports.PREFIX_LENGTH = exports.RIPEMD160_NODE_ALGO = exports.SHA512_NODE_ALGO = exports.SHA256_NODE_ALGO = exports.HMAC_NODE_ALGO = exports.AES_NODE_ALGO = exports.SHA512_BROWSER_ALGO = exports.SHA256_BROWSER_ALGO = exports.HMAC_BROWSER = exports.HMAC_BROWSER_ALGO = exports.AES_BROWSER_ALGO = exports.HMAC_LENGTH = exports.AES_LENGTH = void 0;
const length_1 = __webpack_require__(58445);
exports.AES_LENGTH = length_1.LENGTH_256;
exports.HMAC_LENGTH = length_1.LENGTH_256;
exports.AES_BROWSER_ALGO = "AES-CBC";
exports.HMAC_BROWSER_ALGO = `SHA-${exports.AES_LENGTH}`;
exports.HMAC_BROWSER = "HMAC";
exports.SHA256_BROWSER_ALGO = "SHA-256";
exports.SHA512_BROWSER_ALGO = "SHA-512";
exports.AES_NODE_ALGO = `aes-${exports.AES_LENGTH}-cbc`;
exports.HMAC_NODE_ALGO = `sha${exports.HMAC_LENGTH}`;
exports.SHA256_NODE_ALGO = "sha256";
exports.SHA512_NODE_ALGO = "sha512";
exports.RIPEMD160_NODE_ALGO = "ripemd160";
exports.PREFIX_LENGTH = length_1.LENGTH_1;
exports.KEY_LENGTH = length_1.LENGTH_32;
exports.IV_LENGTH = length_1.LENGTH_16;
exports.MAC_LENGTH = length_1.LENGTH_32;
//# sourceMappingURL=default.js.map

/***/ }),

/***/ 26511:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UTF8_ENC = exports.HEX_ENC = void 0;
exports.HEX_ENC = "hex";
exports.UTF8_ENC = "utf8";
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ 52176:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_BAD_MAC = void 0;
exports.ERROR_BAD_MAC = "Bad MAC";
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 62477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(57362);
tslib_1.__exportStar(__webpack_require__(82966), exports);
tslib_1.__exportStar(__webpack_require__(26511), exports);
tslib_1.__exportStar(__webpack_require__(52176), exports);
tslib_1.__exportStar(__webpack_require__(58445), exports);
tslib_1.__exportStar(__webpack_require__(82827), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58445:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LENGTH_1024 = exports.LENGTH_512 = exports.LENGTH_256 = exports.LENGTH_128 = exports.LENGTH_64 = exports.LENGTH_32 = exports.LENGTH_16 = exports.LENGTH_1 = exports.LENGTH_0 = void 0;
exports.LENGTH_0 = 0;
exports.LENGTH_1 = 1;
exports.LENGTH_16 = 16;
exports.LENGTH_32 = 32;
exports.LENGTH_64 = 64;
exports.LENGTH_128 = 128;
exports.LENGTH_256 = 256;
exports.LENGTH_512 = 512;
exports.LENGTH_1024 = 1024;
//# sourceMappingURL=length.js.map

/***/ }),

/***/ 82827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERIFY_OP = exports.SIGN_OP = exports.DECRYPT_OP = exports.ENCRYPT_OP = void 0;
exports.ENCRYPT_OP = "encrypt";
exports.DECRYPT_OP = "decrypt";
exports.SIGN_OP = "sign";
exports.VERIFY_OP = "verify";
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ 85635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(57362);
tslib_1.__exportStar(__webpack_require__(93829), exports);
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 60571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(57362);
tslib_1.__exportStar(__webpack_require__(85635), exports);
tslib_1.__exportStar(__webpack_require__(79211), exports);
tslib_1.__exportStar(__webpack_require__(26986), exports);
tslib_1.__exportStar(__webpack_require__(25165), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79211:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pkcs7 = void 0;
const PADDING = [
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [8, 8, 8, 8, 8, 8, 8, 8],
    [7, 7, 7, 7, 7, 7, 7],
    [6, 6, 6, 6, 6, 6],
    [5, 5, 5, 5, 5],
    [4, 4, 4, 4],
    [3, 3, 3],
    [2, 2],
    [1],
];
exports.pkcs7 = {
    pad(plaintext) {
        const padding = PADDING[plaintext.byteLength % 16 || 0];
        const result = new Uint8Array(plaintext.byteLength + padding.length);
        result.set(plaintext);
        result.set(padding, plaintext.byteLength);
        return result;
    },
    unpad(padded) {
        return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
    },
};
//# sourceMappingURL=pkcs7.js.map

/***/ }),

/***/ 26986:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 25165:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isConstantTime = exports.assert = void 0;
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}
exports.assert = assert;
function isConstantTime(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let res = 0;
    for (let i = 0; i < arr1.length; i++) {
        res |= arr1[i] ^ arr2[i];
    }
    return res === 0;
}
exports.isConstantTime = isConstantTime;
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 74004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nodeRipemd160 = exports.nodeSha512 = exports.nodeSha256 = exports.nodeHmacSha512Sign = exports.nodeHmacSha256Sign = exports.nodeAesDecrypt = exports.nodeAesEncrypt = void 0;
const tslib_1 = __webpack_require__(57362);
const crypto_1 = tslib_1.__importDefault(__webpack_require__(6113));
const encoding_1 = __webpack_require__(2921);
const constants_1 = __webpack_require__(62477);
function nodeAesEncrypt(iv, key, data) {
    const cipher = crypto_1.default.createCipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return encoding_1.bufferToArray(encoding_1.concatBuffers(cipher.update(Buffer.from(data)), cipher.final()));
}
exports.nodeAesEncrypt = nodeAesEncrypt;
function nodeAesDecrypt(iv, key, data) {
    const decipher = crypto_1.default.createDecipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return encoding_1.bufferToArray(encoding_1.concatBuffers(decipher.update(Buffer.from(data)), decipher.final()));
}
exports.nodeAesDecrypt = nodeAesDecrypt;
function nodeHmacSha256Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.HMAC_NODE_ALGO, Buffer.from(key))
        .update(Buffer.from(data))
        .digest();
    return encoding_1.bufferToArray(buf);
}
exports.nodeHmacSha256Sign = nodeHmacSha256Sign;
function nodeHmacSha512Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.SHA512_NODE_ALGO, Buffer.from(key))
        .update(Buffer.from(data))
        .digest();
    return encoding_1.bufferToArray(buf);
}
exports.nodeHmacSha512Sign = nodeHmacSha512Sign;
function nodeSha256(data) {
    const buf = crypto_1.default
        .createHash(constants_1.SHA256_NODE_ALGO)
        .update(Buffer.from(data))
        .digest();
    return encoding_1.bufferToArray(buf);
}
exports.nodeSha256 = nodeSha256;
function nodeSha512(data) {
    const buf = crypto_1.default
        .createHash(constants_1.SHA512_NODE_ALGO)
        .update(Buffer.from(data))
        .digest();
    return encoding_1.bufferToArray(buf);
}
exports.nodeSha512 = nodeSha512;
function nodeRipemd160(data) {
    const buf = crypto_1.default
        .createHash(constants_1.RIPEMD160_NODE_ALGO)
        .update(Buffer.from(data))
        .digest();
    return encoding_1.bufferToArray(buf);
}
exports.nodeRipemd160 = nodeRipemd160;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 49423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aesCbcDecrypt = exports.aesCbcEncrypt = void 0;
const tslib_1 = __webpack_require__(57362);
const node_1 = __webpack_require__(74004);
function aesCbcEncrypt(iv, key, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeAesEncrypt(iv, key, data);
        return result;
    });
}
exports.aesCbcEncrypt = aesCbcEncrypt;
function aesCbcDecrypt(iv, key, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeAesDecrypt(iv, key, data);
        return result;
    });
}
exports.aesCbcDecrypt = aesCbcDecrypt;
//# sourceMappingURL=aes.js.map

/***/ }),

/***/ 85029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hmacSha512Verify = exports.hmacSha512Sign = exports.hmacSha256Verify = exports.hmacSha256Sign = void 0;
const tslib_1 = __webpack_require__(57362);
const helpers_1 = __webpack_require__(60571);
const node_1 = __webpack_require__(74004);
function hmacSha256Sign(key, msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeHmacSha256Sign(key, msg);
        return result;
    });
}
exports.hmacSha256Sign = hmacSha256Sign;
function hmacSha256Verify(key, msg, sig) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const expectedSig = node_1.nodeHmacSha256Sign(key, msg);
        const result = helpers_1.isConstantTime(expectedSig, sig);
        return result;
    });
}
exports.hmacSha256Verify = hmacSha256Verify;
function hmacSha512Sign(key, msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeHmacSha512Sign(key, msg);
        return result;
    });
}
exports.hmacSha512Sign = hmacSha512Sign;
function hmacSha512Verify(key, msg, sig) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const expectedSig = node_1.nodeHmacSha512Sign(key, msg);
        const result = helpers_1.isConstantTime(expectedSig, sig);
        return result;
    });
}
exports.hmacSha512Verify = hmacSha512Verify;
//# sourceMappingURL=hmac.js.map

/***/ }),

/***/ 41210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(57362);
tslib_1.__exportStar(__webpack_require__(10651), exports);
tslib_1.__exportStar(__webpack_require__(49423), exports);
tslib_1.__exportStar(__webpack_require__(85029), exports);
tslib_1.__exportStar(__webpack_require__(45955), exports);
tslib_1.__exportStar(__webpack_require__(60571), exports);
tslib_1.__exportStar(__webpack_require__(62477), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ripemd160 = exports.sha512 = exports.sha256 = void 0;
const tslib_1 = __webpack_require__(57362);
const node_1 = __webpack_require__(74004);
function sha256(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeSha256(msg);
        return result;
    });
}
exports.sha256 = sha256;
function sha512(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeSha512(msg);
        return result;
    });
}
exports.sha512 = sha512;
function ripemd160(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = node_1.nodeRipemd160(msg);
        return result;
    });
}
exports.ripemd160 = ripemd160;
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ 57362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 2921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeHexLeadingZeros = exports.sanitizeHex = exports.addHexPrefix = exports.removeHexPrefix = exports.padRight = exports.padLeft = exports.sanitizeBytes = exports.swapHex = exports.swapBytes = exports.splitBytes = exports.calcByteLength = exports.trimRight = exports.trimLeft = exports.concatArrays = exports.concatBuffers = exports.getEncoding = exports.getType = exports.isArrayBuffer = exports.isTypedArray = exports.isBuffer = exports.isHexString = exports.isBinaryString = exports.binaryToNumber = exports.binaryToUtf8 = exports.binaryToHex = exports.binaryToArray = exports.binaryToBuffer = exports.numberToBinary = exports.numberToUtf8 = exports.numberToHex = exports.numberToArray = exports.numberToBuffer = exports.utf8ToBinary = exports.utf8ToNumber = exports.utf8ToHex = exports.utf8ToArray = exports.utf8ToBuffer = exports.hexToBinary = exports.hexToNumber = exports.hexToUtf8 = exports.hexToArray = exports.hexToBuffer = exports.arrayToBinary = exports.arrayToNumber = exports.arrayToUtf8 = exports.arrayToHex = exports.arrayToBuffer = exports.bufferToBinary = exports.bufferToNumber = exports.bufferToUtf8 = exports.bufferToHex = exports.bufferToArray = void 0;
const tslib_1 = __webpack_require__(12832);
const is_typedarray_1 = tslib_1.__importDefault(__webpack_require__(38943));
const typedarray_to_buffer_1 = tslib_1.__importDefault(__webpack_require__(56144));
const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const ENC_BIN = "binary";
const TYPE_BUFFER = "buffer";
const TYPE_ARRAY = "array";
const TYPE_TYPED_ARRAY = "typed-array";
const TYPE_ARRAY_BUFFER = "array-buffer";
const STRING_ZERO = "0";
function bufferToArray(buf) {
    return new Uint8Array(buf);
}
exports.bufferToArray = bufferToArray;
function bufferToHex(buf, prefixed = false) {
    const hex = buf.toString(ENC_HEX);
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.bufferToHex = bufferToHex;
function bufferToUtf8(buf) {
    return buf.toString(ENC_UTF8);
}
exports.bufferToUtf8 = bufferToUtf8;
function bufferToNumber(buf) {
    return buf.readUIntBE(0, buf.length);
}
exports.bufferToNumber = bufferToNumber;
function bufferToBinary(buf) {
    return arrayToBinary(bufferToArray(buf));
}
exports.bufferToBinary = bufferToBinary;
function arrayToBuffer(arr) {
    return typedarray_to_buffer_1.default(arr);
}
exports.arrayToBuffer = arrayToBuffer;
function arrayToHex(arr, prefixed = false) {
    return bufferToHex(arrayToBuffer(arr), prefixed);
}
exports.arrayToHex = arrayToHex;
function arrayToUtf8(arr) {
    return bufferToUtf8(arrayToBuffer(arr));
}
exports.arrayToUtf8 = arrayToUtf8;
function arrayToNumber(arr) {
    return bufferToNumber(arrayToBuffer(arr));
}
exports.arrayToNumber = arrayToNumber;
function arrayToBinary(arr) {
    return Array.from(arr)
        .map(numberToBinary)
        .join("");
}
exports.arrayToBinary = arrayToBinary;
function hexToBuffer(hex) {
    return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
exports.hexToBuffer = hexToBuffer;
function hexToArray(hex) {
    return bufferToArray(hexToBuffer(hex));
}
exports.hexToArray = hexToArray;
function hexToUtf8(hex) {
    return bufferToUtf8(hexToBuffer(hex));
}
exports.hexToUtf8 = hexToUtf8;
function hexToNumber(hex) {
    return arrayToNumber(hexToArray(hex));
}
exports.hexToNumber = hexToNumber;
function hexToBinary(hex) {
    return arrayToBinary(hexToArray(hex));
}
exports.hexToBinary = hexToBinary;
function utf8ToBuffer(utf8) {
    return Buffer.from(utf8, ENC_UTF8);
}
exports.utf8ToBuffer = utf8ToBuffer;
function utf8ToArray(utf8) {
    return bufferToArray(utf8ToBuffer(utf8));
}
exports.utf8ToArray = utf8ToArray;
function utf8ToHex(utf8, prefixed = false) {
    return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
exports.utf8ToHex = utf8ToHex;
function utf8ToNumber(utf8) {
    const num = parseInt(utf8, 10);
    assert(isDefined(num), "Number can only safely store up to 53 bits");
    return num;
}
exports.utf8ToNumber = utf8ToNumber;
function utf8ToBinary(utf8) {
    return arrayToBinary(utf8ToArray(utf8));
}
exports.utf8ToBinary = utf8ToBinary;
function numberToBuffer(num) {
    return binaryToBuffer(numberToBinary(num));
}
exports.numberToBuffer = numberToBuffer;
function numberToArray(num) {
    return binaryToArray(numberToBinary(num));
}
exports.numberToArray = numberToArray;
function numberToHex(num, prefixed) {
    return binaryToHex(numberToBinary(num), prefixed);
}
exports.numberToHex = numberToHex;
function numberToUtf8(num) {
    return `${num}`;
}
exports.numberToUtf8 = numberToUtf8;
function numberToBinary(num) {
    const bin = (num >>> 0).toString(2);
    return sanitizeBytes(bin);
}
exports.numberToBinary = numberToBinary;
function binaryToBuffer(bin) {
    return arrayToBuffer(binaryToArray(bin));
}
exports.binaryToBuffer = binaryToBuffer;
function binaryToArray(bin) {
    return new Uint8Array(splitBytes(bin).map(x => parseInt(x, 2)));
}
exports.binaryToArray = binaryToArray;
function binaryToHex(bin, prefixed) {
    return arrayToHex(binaryToArray(bin), prefixed);
}
exports.binaryToHex = binaryToHex;
function binaryToUtf8(bin) {
    return arrayToUtf8(binaryToArray(bin));
}
exports.binaryToUtf8 = binaryToUtf8;
function binaryToNumber(bin) {
    return arrayToNumber(binaryToArray(bin));
}
exports.binaryToNumber = binaryToNumber;
function isBinaryString(str) {
    if (typeof str !== "string" || !new RegExp(/^[01]+$/).test(str)) {
        return false;
    }
    if (str.length % 8 !== 0) {
        return false;
    }
    return true;
}
exports.isBinaryString = isBinaryString;
function isHexString(str, length) {
    if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && str.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}
exports.isHexString = isHexString;
function isBuffer(val) {
    return Buffer.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return is_typedarray_1.default.strict(val) && !isBuffer(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return (!isTypedArray(val) &&
        !isBuffer(val) &&
        typeof val.byteLength !== "undefined");
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    if (isBuffer(val)) {
        return TYPE_BUFFER;
    }
    else if (isTypedArray(val)) {
        return TYPE_TYPED_ARRAY;
    }
    else if (isArrayBuffer(val)) {
        return TYPE_ARRAY_BUFFER;
    }
    else if (Array.isArray(val)) {
        return TYPE_ARRAY;
    }
    else {
        return typeof val;
    }
}
exports.getType = getType;
function getEncoding(str) {
    if (isBinaryString(str)) {
        return ENC_BIN;
    }
    if (isHexString(str)) {
        return ENC_HEX;
    }
    return ENC_UTF8;
}
exports.getEncoding = getEncoding;
function concatBuffers(...args) {
    const result = Buffer.concat(args);
    return result;
}
exports.concatBuffers = concatBuffers;
function concatArrays(...args) {
    let result = [];
    args.forEach(arg => (result = result.concat(Array.from(arg))));
    return new Uint8Array([...result]);
}
exports.concatArrays = concatArrays;
function trimLeft(data, length) {
    const diff = data.length - length;
    if (diff > 0) {
        data = data.slice(diff);
    }
    return data;
}
exports.trimLeft = trimLeft;
function trimRight(data, length) {
    return data.slice(0, length);
}
exports.trimRight = trimRight;
function calcByteLength(length, byteSize = 8) {
    const remainder = length % byteSize;
    return remainder
        ? ((length - remainder) / byteSize) * byteSize + byteSize
        : length;
}
exports.calcByteLength = calcByteLength;
function splitBytes(str, byteSize = 8) {
    const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, "gi"));
    return Array.from(bytes || []);
}
exports.splitBytes = splitBytes;
function swapBytes(str) {
    return splitBytes(str)
        .map(reverseString)
        .join("");
}
exports.swapBytes = swapBytes;
function swapHex(str) {
    return binaryToHex(swapBytes(hexToBinary(str)));
}
exports.swapHex = swapHex;
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
    return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
exports.sanitizeBytes = sanitizeBytes;
function padLeft(str, length, padding = STRING_ZERO) {
    return padString(str, length, true, padding);
}
exports.padLeft = padLeft;
function padRight(str, length, padding = STRING_ZERO) {
    return padString(str, length, false, padding);
}
exports.padRight = padRight;
function removeHexPrefix(hex) {
    return hex.replace(/^0x/, "");
}
exports.removeHexPrefix = removeHexPrefix;
function addHexPrefix(hex) {
    return hex.startsWith("0x") ? hex : `0x${hex}`;
}
exports.addHexPrefix = addHexPrefix;
function sanitizeHex(hex) {
    hex = removeHexPrefix(hex);
    hex = sanitizeBytes(hex, 2);
    if (hex) {
        hex = addHexPrefix(hex);
    }
    return hex;
}
exports.sanitizeHex = sanitizeHex;
function removeHexLeadingZeros(hex) {
    const prefixed = hex.startsWith("0x");
    hex = removeHexPrefix(hex);
    hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
function isUndefined(value) {
    return typeof value === "undefined";
}
function isDefined(value) {
    return !isUndefined(value);
}
function assert(assertion, errorMessage) {
    if (!assertion) {
        throw new Error(errorMessage);
    }
}
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
function padString(str, length, left, padding = STRING_ZERO) {
    const diff = length - str.length;
    let result = str;
    if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
    }
    return result;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 12832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 98491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
const legacy_types_1 = __webpack_require__(97117);
const legacy_utils_1 = __webpack_require__(10603);
const socket_1 = tslib_1.__importDefault(__webpack_require__(55218));
const events_1 = tslib_1.__importDefault(__webpack_require__(85350));
const storage_1 = tslib_1.__importDefault(__webpack_require__(14710));
const url_1 = __webpack_require__(13662);
class Connector {
    constructor(opts) {
        this.protocol = "wc";
        this.version = 1;
        this._bridge = "";
        this._key = null;
        this._clientId = "";
        this._clientMeta = null;
        this._peerId = "";
        this._peerMeta = null;
        this._handshakeId = 0;
        this._handshakeTopic = "";
        this._connected = false;
        this._accounts = [];
        this._chainId = 0;
        this._networkId = 0;
        this._rpcUrl = "";
        this._eventManager = new events_1.default();
        this._clientMeta = legacy_utils_1.getClientMeta() || opts.connectorOpts.clientMeta || null;
        this._cryptoLib = opts.cryptoLib;
        this._sessionStorage = opts.sessionStorage || new storage_1.default(opts.connectorOpts.storageId);
        this._qrcodeModal = opts.connectorOpts.qrcodeModal;
        this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
        this._signingMethods = [...legacy_types_1.SIGNING_METHODS, ...(opts.connectorOpts.signingMethods || [])];
        if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
            throw new Error(legacy_types_1.ERROR_MISSING_REQUIRED);
        }
        if (opts.connectorOpts.bridge) {
            this.bridge = url_1.getBridgeUrl(opts.connectorOpts.bridge);
        }
        if (opts.connectorOpts.uri) {
            this.uri = opts.connectorOpts.uri;
        }
        const session = opts.connectorOpts.session || this._getStorageSession();
        if (session) {
            this.session = session;
        }
        if (this.handshakeId) {
            this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
        }
        this._transport =
            opts.transport ||
                new socket_1.default({
                    protocol: this.protocol,
                    version: this.version,
                    url: this.bridge,
                    subscriptions: [this.clientId],
                });
        this._subscribeToInternalEvents();
        this._initTransport();
        if (opts.connectorOpts.uri) {
            this._subscribeToSessionRequest();
        }
        if (opts.pushServerOpts) {
            this._registerPushServer(opts.pushServerOpts);
        }
    }
    set bridge(value) {
        if (!value) {
            return;
        }
        this._bridge = value;
    }
    get bridge() {
        return this._bridge;
    }
    set key(value) {
        if (!value) {
            return;
        }
        const key = legacy_utils_1.convertHexToArrayBuffer(value);
        this._key = key;
    }
    get key() {
        if (this._key) {
            const key = legacy_utils_1.convertArrayBufferToHex(this._key, true);
            return key;
        }
        return "";
    }
    set clientId(value) {
        if (!value) {
            return;
        }
        this._clientId = value;
    }
    get clientId() {
        let clientId = this._clientId;
        if (!clientId) {
            clientId = this._clientId = legacy_utils_1.uuid();
        }
        return this._clientId;
    }
    set peerId(value) {
        if (!value) {
            return;
        }
        this._peerId = value;
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(value) {
    }
    get clientMeta() {
        let clientMeta = this._clientMeta;
        if (!clientMeta) {
            clientMeta = this._clientMeta = legacy_utils_1.getClientMeta();
        }
        return clientMeta;
    }
    set peerMeta(value) {
        this._peerMeta = value;
    }
    get peerMeta() {
        const peerMeta = this._peerMeta;
        return peerMeta;
    }
    set handshakeTopic(value) {
        if (!value) {
            return;
        }
        this._handshakeTopic = value;
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(value) {
        if (!value) {
            return;
        }
        this._handshakeId = value;
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        const _uri = this._formatUri();
        return _uri;
    }
    set uri(value) {
        if (!value) {
            return;
        }
        const { handshakeTopic, bridge, key } = this._parseUri(value);
        this.handshakeTopic = handshakeTopic;
        this.bridge = bridge;
        this.key = key;
    }
    set chainId(value) {
        this._chainId = value;
    }
    get chainId() {
        const chainId = this._chainId;
        return chainId;
    }
    set networkId(value) {
        this._networkId = value;
    }
    get networkId() {
        const networkId = this._networkId;
        return networkId;
    }
    set accounts(value) {
        this._accounts = value;
    }
    get accounts() {
        const accounts = this._accounts;
        return accounts;
    }
    set rpcUrl(value) {
        this._rpcUrl = value;
    }
    get rpcUrl() {
        const rpcUrl = this._rpcUrl;
        return rpcUrl;
    }
    set connected(value) {
    }
    get connected() {
        return this._connected;
    }
    set pending(value) {
    }
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
        };
    }
    set session(value) {
        if (!value) {
            return;
        }
        this._connected = value.connected;
        this.accounts = value.accounts;
        this.chainId = value.chainId;
        this.bridge = value.bridge;
        this.key = value.key;
        this.clientId = value.clientId;
        this.clientMeta = value.clientMeta;
        this.peerId = value.peerId;
        this.peerMeta = value.peerMeta;
        this.handshakeId = value.handshakeId;
        this.handshakeTopic = value.handshakeTopic;
    }
    on(event, callback) {
        const eventEmitter = {
            event,
            callback,
        };
        this._eventManager.subscribe(eventEmitter);
    }
    off(event) {
        this._eventManager.unsubscribe(event);
    }
    createInstantRequest(instantRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_instantRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        request: this._formatRequest(instantRequest),
                    },
                ],
            });
            this.handshakeId = request.id;
            this.handshakeTopic = legacy_utils_1.uuid();
            this._eventManager.trigger({
                event: "display_uri",
                params: [this.uri],
            });
            this.on("modal_closed", () => {
                throw new Error(legacy_types_1.ERROR_QRCODE_MODAL_USER_CLOSED);
            });
            const endInstantRequest = () => {
                this.killSession();
            };
            try {
                const result = yield this._sendCallRequest(request);
                if (result) {
                    endInstantRequest();
                }
                return result;
            }
            catch (error) {
                endInstantRequest();
                throw error;
            }
        });
    }
    connect(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._qrcodeModal) {
                throw new Error(legacy_types_1.ERROR_QRCODE_MODAL_NOT_PROVIDED);
            }
            if (this.connected) {
                return {
                    chainId: this.chainId,
                    accounts: this.accounts,
                };
            }
            yield this.createSession(opts);
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.on("modal_closed", () => reject(new Error(legacy_types_1.ERROR_QRCODE_MODAL_USER_CLOSED)));
                this.on("connect", (error, payload) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(payload.params[0]);
                });
            }));
        });
    }
    createSession(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_CONNECTED);
            }
            if (this.pending) {
                return;
            }
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_sessionRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        chainId: opts && opts.chainId ? opts.chainId : null,
                    },
                ],
            });
            this.handshakeId = request.id;
            this.handshakeTopic = legacy_utils_1.uuid();
            this._sendSessionRequest(request, "Session update rejected", {
                topic: this.handshakeTopic,
            });
            this._eventManager.trigger({
                event: "display_uri",
                params: [this.uri],
            });
        });
    }
    approveSession(sessionStatus) {
        if (this._connected) {
            throw new Error(legacy_types_1.ERROR_SESSION_CONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
            peerId: this.clientId,
            peerMeta: this.clientMeta,
        };
        const response = {
            id: this.handshakeId,
            jsonrpc: "2.0",
            result: sessionParams,
        };
        this._sendResponse(response);
        this._connected = true;
        this._setStorageSession();
        this._eventManager.trigger({
            event: "connect",
            params: [
                {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
    }
    rejectSession(sessionError) {
        if (this._connected) {
            throw new Error(legacy_types_1.ERROR_SESSION_CONNECTED);
        }
        const message = sessionError && sessionError.message ? sessionError.message : legacy_types_1.ERROR_SESSION_REJECTED;
        const response = this._formatResponse({
            id: this.handshakeId,
            error: { message },
        });
        this._sendResponse(response);
        this._connected = false;
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
    }
    updateSession(sessionStatus) {
        if (!this._connected) {
            throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [sessionParams],
        });
        this._sendSessionRequest(request, "Session update rejected");
        this._eventManager.trigger({
            event: "session_update",
            params: [
                {
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
        this._manageStorageSession();
    }
    killSession(sessionError) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const message = sessionError ? sessionError.message : "Session Disconnected";
            const sessionParams = {
                approved: false,
                chainId: null,
                networkId: null,
                accounts: null,
            };
            const request = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [sessionParams],
            });
            yield this._sendRequest(request);
            this._handleSessionDisconnect(message);
        });
    }
    sendTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = tx;
            const request = this._formatRequest({
                method: "eth_sendTransaction",
                params: [parsedTx],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = tx;
            const request = this._formatRequest({
                method: "eth_signTransaction",
                params: [parsedTx],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_sign",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signPersonalMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "personal_sign",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTypedData(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_signTypedData",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    updateChain(chainParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error("Session currently disconnected");
            }
            const request = this._formatRequest({
                method: "wallet_updateChain",
                params: [chainParams],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    unsafeSend(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [{ request, options }],
        });
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(request.id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!payload) {
                    throw new Error(legacy_types_1.ERROR_MISSING_JSON_RPC);
                }
                resolve(payload);
            });
        });
    }
    sendCustomRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(legacy_types_1.ERROR_SESSION_DISCONNECTED);
            }
            switch (request.method) {
                case "eth_accounts":
                    return this.accounts;
                case "eth_chainId":
                    return legacy_utils_1.convertNumberToHex(this.chainId);
                case "eth_sendTransaction":
                case "eth_signTransaction":
                    if (request.params) {
                    }
                    break;
                case "personal_sign":
                    if (request.params) {
                    }
                    break;
                default:
                    break;
            }
            const formattedRequest = this._formatRequest(request);
            const result = yield this._sendCallRequest(formattedRequest, options);
            return result;
        });
    }
    approveRequest(response) {
        if (legacy_utils_1.isJsonRpcResponseSuccess(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(legacy_types_1.ERROR_MISSING_RESULT);
        }
    }
    rejectRequest(response) {
        if (legacy_utils_1.isJsonRpcResponseError(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(legacy_types_1.ERROR_MISSING_ERROR);
        }
    }
    transportClose() {
        this._transport.close();
    }
    _sendRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callRequest = this._formatRequest(request);
            const encryptionPayload = yield this._encrypt(callRequest);
            const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined"
                ? !options.forcePushNotification
                : legacy_utils_1.isSilentPayload(callRequest);
            this._transport.send(payload, topic, silent);
        });
    }
    _sendResponse(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const encryptionPayload = yield this._encrypt(response);
            const topic = this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = true;
            this._transport.send(payload, topic, silent);
        });
    }
    _sendSessionRequest(request, errorMsg, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._sendRequest(request, options);
            this._subscribeToSessionResponse(request.id, errorMsg);
        });
    }
    _sendCallRequest(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [{ request, options }],
        });
        return this._subscribeToCallResponse(request.id);
    }
    _formatRequest(request) {
        if (typeof request.method === "undefined") {
            throw new Error(legacy_types_1.ERROR_MISSING_METHOD);
        }
        const formattedRequest = {
            id: typeof request.id === "undefined" ? legacy_utils_1.payloadId() : request.id,
            jsonrpc: "2.0",
            method: request.method,
            params: typeof request.params === "undefined" ? [] : request.params,
        };
        return formattedRequest;
    }
    _formatResponse(response) {
        if (typeof response.id === "undefined") {
            throw new Error(legacy_types_1.ERROR_MISSING_ID);
        }
        const baseResponse = { id: response.id, jsonrpc: "2.0" };
        if (legacy_utils_1.isJsonRpcResponseError(response)) {
            const error = legacy_utils_1.formatRpcError(response.error);
            const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
            return errorResponse;
        }
        else if (legacy_utils_1.isJsonRpcResponseSuccess(response)) {
            const successResponse = Object.assign(Object.assign({}, baseResponse), response);
            return successResponse;
        }
        throw new Error(legacy_types_1.ERROR_INVALID_RESPONSE);
    }
    _handleSessionDisconnect(errorMsg) {
        const message = errorMsg || "Session Disconnected";
        if (!this._connected) {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
            legacy_utils_1.removeLocal(legacy_types_1.MOBILE_LINK_CHOICE_KEY);
        }
        if (this._connected) {
            this._connected = false;
        }
        if (this._handshakeId) {
            this._handshakeId = 0;
        }
        if (this._handshakeTopic) {
            this._handshakeTopic = "";
        }
        if (this._peerId) {
            this._peerId = "";
        }
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
        this.transportClose();
    }
    _handleSessionResponse(errorMsg, sessionParams) {
        if (sessionParams) {
            if (sessionParams.approved) {
                if (!this._connected) {
                    this._connected = true;
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    if (sessionParams.peerId && !this.peerId) {
                        this.peerId = sessionParams.peerId;
                    }
                    if (sessionParams.peerMeta && !this.peerMeta) {
                        this.peerMeta = sessionParams.peerMeta;
                    }
                    this._eventManager.trigger({
                        event: "connect",
                        params: [
                            {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                else {
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    this._eventManager.trigger({
                        event: "session_update",
                        params: [
                            {
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                this._manageStorageSession();
            }
            else {
                this._handleSessionDisconnect(errorMsg);
            }
        }
        else {
            this._handleSessionDisconnect(errorMsg);
        }
    }
    _handleIncomingMessages(socketMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const activeTopics = [this.clientId, this.handshakeTopic];
            if (!activeTopics.includes(socketMessage.topic)) {
                return;
            }
            let encryptionPayload;
            try {
                encryptionPayload = JSON.parse(socketMessage.payload);
            }
            catch (error) {
                return;
            }
            const payload = yield this._decrypt(encryptionPayload);
            if (payload) {
                this._eventManager.trigger(payload);
            }
        });
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(id, callback) {
        this.on(`response:${id}`, callback);
    }
    _subscribeToSessionResponse(id, errorMsg) {
        this._subscribeToResponse(id, (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
                return;
            }
            if (legacy_utils_1.isJsonRpcResponseSuccess(payload)) {
                this._handleSessionResponse(errorMsg, payload.result);
            }
            else if (payload.error && payload.error.message) {
                this._handleSessionResponse(payload.error.message);
            }
            else {
                this._handleSessionResponse(errorMsg);
            }
        });
    }
    _subscribeToCallResponse(id) {
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (legacy_utils_1.isJsonRpcResponseSuccess(payload)) {
                    resolve(payload.result);
                }
                else if (payload.error && payload.error.message) {
                    reject(payload.error);
                }
                else {
                    reject(new Error(legacy_types_1.ERROR_INVALID_RESPONSE));
                }
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.open(this.uri, () => {
                    this._eventManager.trigger({
                        event: "modal_closed",
                        params: [],
                    });
                }, this._qrcodeModalOptions);
            }
        });
        this.on("connect", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
        });
        this.on("call_request_sent", (error, payload) => {
            const { request } = payload.params[0];
            if (legacy_utils_1.isMobile() && this._signingMethods.includes(request.method)) {
                const mobileLinkUrl = legacy_utils_1.getLocal(legacy_types_1.MOBILE_LINK_CHOICE_KEY);
                if (mobileLinkUrl) {
                    window.location.href = mobileLinkUrl.href;
                }
            }
        });
        this.on("wc_sessionRequest", (error, payload) => {
            if (error) {
                this._eventManager.trigger({
                    event: "error",
                    params: [
                        {
                            code: "SESSION_REQUEST_ERROR",
                            message: error.toString(),
                        },
                    ],
                });
            }
            this.handshakeId = payload.id;
            this.peerId = payload.params[0].peerId;
            this.peerMeta = payload.params[0].peerMeta;
            const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
            this._eventManager.trigger(internalPayload);
        });
        this.on("wc_sessionUpdate", (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
            }
            this._handleSessionResponse("Session disconnected", payload.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
        this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
        this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
        this._transport.on("error", () => this._eventManager.trigger({
            event: "transport_error",
            params: ["Websocket connection failed"],
        }));
        this._transport.open();
    }
    _formatUri() {
        const protocol = this.protocol;
        const handshakeTopic = this.handshakeTopic;
        const version = this.version;
        const bridge = encodeURIComponent(this.bridge);
        const key = this.key;
        const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
        return uri;
    }
    _parseUri(uri) {
        const result = legacy_utils_1.parseWalletConnectUri(uri);
        if (result.protocol === this.protocol) {
            if (!result.handshakeTopic) {
                throw Error("Invalid or missing handshakeTopic parameter value");
            }
            const handshakeTopic = result.handshakeTopic;
            if (!result.bridge) {
                throw Error("Invalid or missing bridge url parameter value");
            }
            const bridge = decodeURIComponent(result.bridge);
            if (!result.key) {
                throw Error("Invalid or missing key parameter value");
            }
            const key = result.key;
            return { handshakeTopic, bridge, key };
        }
        else {
            throw new Error(legacy_types_1.ERROR_INVALID_URI);
        }
    }
    _generateKey() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this._cryptoLib) {
                const result = yield this._cryptoLib.generateKey();
                return result;
            }
            return null;
        });
    }
    _encrypt(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.encrypt(data, key);
                return result;
            }
            return null;
        });
    }
    _decrypt(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.decrypt(payload, key);
                return result;
            }
            return null;
        });
    }
    _getStorageSession() {
        let result = null;
        if (this._sessionStorage) {
            result = this._sessionStorage.getSession();
        }
        return result;
    }
    _setStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.setSession(this.session);
        }
    }
    _removeStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.removeSession();
        }
    }
    _manageStorageSession() {
        if (this._connected) {
            this._setStorageSession();
        }
        else {
            this._removeStorageSession();
        }
    }
    _registerPushServer(pushServerOpts) {
        if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
            throw Error("Invalid or missing pushServerOpts.url parameter value");
        }
        if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
            throw Error("Invalid or missing pushServerOpts.type parameter value");
        }
        if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
            throw Error("Invalid or missing pushServerOpts.token parameter value");
        }
        const pushSubscription = {
            bridge: this.bridge,
            topic: this.clientId,
            type: pushServerOpts.type,
            token: pushServerOpts.token,
            peerName: "",
            language: pushServerOpts.language || "",
        };
        this.on("connect", (error, payload) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (error) {
                throw error;
            }
            if (pushServerOpts.peerMeta) {
                const peerName = payload.params[0].peerMeta.name;
                pushSubscription.peerName = peerName;
            }
            try {
                const response = yield fetch(`${pushServerOpts.url}/new`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pushSubscription),
                });
                const json = yield response.json();
                if (!json.success) {
                    throw Error("Failed to register in Push Server");
                }
            }
            catch (error) {
                throw Error("Failed to register in Push Server");
            }
        }));
    }
}
exports["default"] = Connector;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 48156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = exports.verifyHmac = exports.generateKey = void 0;
const tslib_1 = __webpack_require__(16158);
const crypto = tslib_1.__importStar(__webpack_require__(41210));
const encoding = tslib_1.__importStar(__webpack_require__(2921));
const legacy_utils_1 = __webpack_require__(10603);
function generateKey(length) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _length = (length || 256) / 8;
        const bytes = crypto.randomBytes(_length);
        const result = legacy_utils_1.convertBufferToArrayBuffer(encoding.arrayToBuffer(bytes));
        return result;
    });
}
exports.generateKey = generateKey;
function verifyHmac(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cipherText = encoding.hexToArray(payload.data);
        const iv = encoding.hexToArray(payload.iv);
        const hmac = encoding.hexToArray(payload.hmac);
        const hmacHex = encoding.arrayToHex(hmac, false);
        const unsigned = encoding.concatArrays(cipherText, iv);
        const chmac = yield crypto.hmacSha256Sign(key, unsigned);
        const chmacHex = encoding.arrayToHex(chmac, false);
        if (encoding.removeHexPrefix(hmacHex) === encoding.removeHexPrefix(chmacHex)) {
            return true;
        }
        return false;
    });
}
exports.verifyHmac = verifyHmac;
function encrypt(data, key, providedIv) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _key = encoding.bufferToArray(legacy_utils_1.convertArrayBufferToBuffer(key));
        const ivArrayBuffer = providedIv || (yield generateKey(128));
        const iv = encoding.bufferToArray(legacy_utils_1.convertArrayBufferToBuffer(ivArrayBuffer));
        const ivHex = encoding.arrayToHex(iv, false);
        const contentString = JSON.stringify(data);
        const content = encoding.utf8ToArray(contentString);
        const cipherText = yield crypto.aesCbcEncrypt(iv, _key, content);
        const cipherTextHex = encoding.arrayToHex(cipherText, false);
        const unsigned = encoding.concatArrays(cipherText, iv);
        const hmac = yield crypto.hmacSha256Sign(_key, unsigned);
        const hmacHex = encoding.arrayToHex(hmac, false);
        return {
            data: cipherTextHex,
            hmac: hmacHex,
            iv: ivHex,
        };
    });
}
exports.encrypt = encrypt;
function decrypt(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _key = encoding.bufferToArray(legacy_utils_1.convertArrayBufferToBuffer(key));
        if (!_key) {
            throw new Error("Missing key: required for decryption");
        }
        const verified = yield verifyHmac(payload, _key);
        if (!verified) {
            return null;
        }
        const cipherText = encoding.hexToArray(payload.data);
        const iv = encoding.hexToArray(payload.iv);
        const buffer = yield crypto.aesCbcDecrypt(iv, _key, cipherText);
        const utf8 = encoding.arrayToUtf8(buffer);
        let data;
        try {
            data = JSON.parse(utf8);
        }
        catch (error) {
            return null;
        }
        return data;
    });
}
exports.decrypt = decrypt;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 85350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const legacy_utils_1 = __webpack_require__(10603);
class EventManager {
    constructor() {
        this._eventEmitters = [];
    }
    subscribe(eventEmitter) {
        this._eventEmitters.push(eventEmitter);
    }
    unsubscribe(event) {
        this._eventEmitters = this._eventEmitters.filter(x => x.event !== event);
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if (legacy_utils_1.isJsonRpcRequest(payload)) {
            event = payload.method;
        }
        else if (legacy_utils_1.isJsonRpcResponseSuccess(payload) || legacy_utils_1.isJsonRpcResponseError(payload)) {
            event = `response:${payload.id}`;
        }
        else if (legacy_utils_1.isInternalEvent(payload)) {
            event = payload.event;
        }
        else {
            event = "";
        }
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        if ((!eventEmitters || !eventEmitters.length) &&
            !legacy_utils_1.isReservedEvent(event) &&
            !legacy_utils_1.isInternalEvent(event)) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
        }
        eventEmitters.forEach((eventEmitter) => {
            if (legacy_utils_1.isJsonRpcResponseError(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            }
            else {
                eventEmitter.callback(null, payload);
            }
        });
    }
}
exports["default"] = EventManager;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 42496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
const core_1 = tslib_1.__importDefault(__webpack_require__(98491));
const cryptoLib = tslib_1.__importStar(__webpack_require__(48156));
class WalletConnect extends core_1.default {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
exports["default"] = WalletConnect;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91083:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class NetworkMonitor {
    constructor() {
        this._eventEmitters = [];
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
            window.addEventListener("online", () => this.trigger("online"));
            window.addEventListener("offline", () => this.trigger("offline"));
        }
    }
    on(event, callback) {
        this._eventEmitters.push({
            event,
            callback,
        });
    }
    trigger(event) {
        let eventEmitters = [];
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        eventEmitters.forEach((eventEmitter) => {
            eventEmitter.callback();
        });
    }
}
exports["default"] = NetworkMonitor;
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 55218:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
const legacy_utils_1 = __webpack_require__(10603);
const network_1 = tslib_1.__importDefault(__webpack_require__(91083));
const WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : __webpack_require__(26864);
class SocketTransport {
    constructor(opts) {
        this.opts = opts;
        this._queue = [];
        this._events = [];
        this._subscriptions = [];
        this._protocol = opts.protocol;
        this._version = opts.version;
        this._url = "";
        this._netMonitor = null;
        this._socket = null;
        this._nextSocket = null;
        this._subscriptions = opts.subscriptions || [];
        this._netMonitor = opts.netMonitor || new network_1.default();
        if (!opts.url || typeof opts.url !== "string") {
            throw new Error("Missing or invalid WebSocket url");
        }
        this._url = opts.url;
        this._netMonitor.on("online", () => this._socketCreate());
    }
    set readyState(value) {
    }
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(value) {
    }
    get connecting() {
        return this.readyState === 0;
    }
    set connected(value) {
    }
    get connected() {
        return this.readyState === 1;
    }
    set closing(value) {
    }
    get closing() {
        return this.readyState === 2;
    }
    set closed(value) {
    }
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(message, topic, silent) {
        if (!topic || typeof topic !== "string") {
            throw new Error("Missing or invalid topic field");
        }
        this._socketSend({
            topic: topic,
            type: "pub",
            payload: message,
            silent: !!silent,
        });
    }
    subscribe(topic) {
        this._socketSend({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        });
    }
    on(event, callback) {
        this._events.push({ event, callback });
    }
    _socketCreate() {
        if (this._nextSocket) {
            return;
        }
        const url = getWebSocketUrl(this._url, this._protocol, this._version);
        this._nextSocket = new WS(url);
        if (!this._nextSocket) {
            throw new Error("Failed to create socket");
        }
        this._nextSocket.onmessage = (event) => this._socketReceive(event);
        this._nextSocket.onopen = () => this._socketOpen();
        this._nextSocket.onerror = (event) => this._socketError(event);
        this._nextSocket.onclose = () => {
            setTimeout(() => {
                this._nextSocket = null;
                this._socketCreate();
            }, 1000);
        };
    }
    _socketOpen() {
        this._socketClose();
        this._socket = this._nextSocket;
        this._nextSocket = null;
        this._queueSubscriptions();
        this._pushQueue();
    }
    _socketClose() {
        if (this._socket) {
            this._socket.onclose = () => {
            };
            this._socket.close();
        }
    }
    _socketSend(socketMessage) {
        const message = JSON.stringify(socketMessage);
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(message);
        }
        else {
            this._setToQueue(socketMessage);
            this._socketCreate();
        }
    }
    _socketReceive(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let socketMessage;
            try {
                socketMessage = JSON.parse(event.data);
            }
            catch (error) {
                return;
            }
            this._socketSend({
                topic: socketMessage.topic,
                type: "ack",
                payload: "",
                silent: true,
            });
            if (this._socket && this._socket.readyState === 1) {
                const events = this._events.filter(event => event.event === "message");
                if (events && events.length) {
                    events.forEach(event => event.callback(socketMessage));
                }
            }
        });
    }
    _socketError(e) {
        const events = this._events.filter(event => event.event === "error");
        if (events && events.length) {
            events.forEach(event => event.callback(e));
        }
    }
    _queueSubscriptions() {
        const subscriptions = this._subscriptions;
        subscriptions.forEach((topic) => this._queue.push({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        }));
        this._subscriptions = this.opts.subscriptions || [];
    }
    _setToQueue(socketMessage) {
        this._queue.push(socketMessage);
    }
    _pushQueue() {
        const queue = this._queue;
        queue.forEach((socketMessage) => this._socketSend(socketMessage));
        this._queue = [];
    }
}
function getWebSocketUrl(_url, protocol, version) {
    var _a, _b;
    const url = _url.startsWith("https")
        ? _url.replace("https", "wss")
        : _url.startsWith("http")
            ? _url.replace("http", "ws")
            : _url;
    const splitUrl = url.split("?");
    const params = legacy_utils_1.isBrowser()
        ? {
            protocol,
            version,
            env: "browser",
            host: ((_a = legacy_utils_1.getLocation()) === null || _a === void 0 ? void 0 : _a.host) || "",
        }
        : {
            protocol,
            version,
            env: ((_b = legacy_utils_1.detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || "",
        };
    const queryString = legacy_utils_1.appendToQueryString(legacy_utils_1.getQueryString(splitUrl[1] || ""), params);
    return splitUrl[0] + "?" + queryString;
}
exports["default"] = SocketTransport;
//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 14710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const legacy_utils_1 = __webpack_require__(10603);
class SessionStorage {
    constructor(storageId = "walletconnect") {
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = legacy_utils_1.getLocal(this.storageId);
        if (json && legacy_utils_1.isWalletConnectSession(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        legacy_utils_1.setLocal(this.storageId, session);
        return session;
    }
    removeSession() {
        legacy_utils_1.removeLocal(this.storageId);
    }
}
exports["default"] = SessionStorage;
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 13662:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBridgeUrl = exports.shouldSelectRandomly = exports.selectRandomBridgeUrl = exports.randomBridgeIndex = exports.extractRootDomain = exports.extractHostname = void 0;
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map(char => `https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
    let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
}
exports.extractHostname = extractHostname;
function extractRootDomain(url) {
    return extractHostname(url)
        .split(".")
        .slice(-2)
        .join(".");
}
exports.extractRootDomain = extractRootDomain;
function randomBridgeIndex() {
    return Math.floor(Math.random() * bridges.length);
}
exports.randomBridgeIndex = randomBridgeIndex;
function selectRandomBridgeUrl() {
    return bridges[randomBridgeIndex()];
}
exports.selectRandomBridgeUrl = selectRandomBridgeUrl;
function shouldSelectRandomly(url) {
    return extractRootDomain(url) === domain;
}
exports.shouldSelectRandomly = shouldSelectRandomly;
function getBridgeUrl(url) {
    if (shouldSelectRandomly(url)) {
        return selectRandomBridgeUrl();
    }
    return url;
}
exports.getBridgeUrl = getBridgeUrl;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 8569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var legacyUtils = __webpack_require__(10603);
var QRCode = _interopDefault(__webpack_require__(21575));
var copy = _interopDefault(__webpack_require__(90343));
var React = __webpack_require__(80134);

function open(uri) {
  QRCode.toString(uri, {
    type: "terminal"
  }).then(console.log);
}

var WALLETCONNECT_STYLE_SHEET = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n";

// A type of promise-like that resolves synchronously and supports only one observer
var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
var _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}

var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";

var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
var ANIMATION_DURATION = 300;
var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";

function Header(props) {
  return React.createElement("div", {
    className: "walletconnect-modal__header"
  }, React.createElement("img", {
    src: WALLETCONNECT_LOGO_SVG_URL,
    className: "walletconnect-modal__headerLogo"
  }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: props.onClose
  }, React.createElement("div", {
    id: WALLETCONNECT_CLOSE_BUTTON_ID,
    className: "walletconnect-modal__close__icon"
  }, React.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), React.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}

function ConnectButton(props) {
  return React.createElement("a", {
    className: "walletconnect-connect__button",
    href: props.href,
    id: (WALLETCONNECT_CONNECT_BUTTON_ID + "-" + (props.name)),
    onClick: props.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: props.color
    },
    target: "_blank"
  }, props.name);
}

var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";

function WalletButton(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  return React.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, name), React.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, React.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("img", {
    src: CARET_SVG_URL,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}

function WalletIcon(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  var fontSize = window.innerWidth < 768 ? ((name.length > 8 ? 2.5 : 2.7) + "vw") : "inherit";
  return React.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("div", {
    style: {
      fontSize: fontSize
    },
    className: "walletconnect-connect__button__text"
  }, name));
}

var GRID_MIN_COUNT = 5;
var LINKS_PER_PAGE = 12;
function LinkDisplay(props) {
  var android = legacyUtils.isAndroid();
  var ref = React.useState("");
  var input = ref[0];
  var setInput = ref[1];
  var ref$1 = React.useState("");
  var filter = ref$1[0];
  var setFilter = ref$1[1];
  var ref$2 = React.useState(1);
  var page = ref$2[0];
  var setPage = ref$2[1];
  var links = filter ? props.links.filter(function (link) { return link.name.toLowerCase().includes(filter.toLowerCase()); }) : props.links;
  var errorMessage = props.errorMessage;
  var grid = filter || links.length > GRID_MIN_COUNT;
  var pages = Math.ceil(links.length / LINKS_PER_PAGE);
  var range = [(page - 1) * LINKS_PER_PAGE + 1, page * LINKS_PER_PAGE];
  var pageLinks = links.length ? links.filter(function (_, index) { return index + 1 >= range[0] && index + 1 <= range[1]; }) : [];
  var hasPaging = !!(!android && pages > 1);
  var filterTimeout = undefined;
  function handleInput(e) {
    setInput(e.target.value);
    clearTimeout(filterTimeout);
    if (e.target.value) {
      filterTimeout = setTimeout(function () {
        setFilter(e.target.value);
        setPage(1);
      }, 1000);
    } else {
      setInput("");
      setFilter("");
      setPage(1);
    }
  }
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), !android && React.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: input,
    onChange: handleInput
  }), React.createElement("div", {
    className: ("walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid && links.length ? "__wrap" : ""))
  }, !android ? pageLinks.length ? pageLinks.map(function (entry) {
    var color = entry.color;
    var name = entry.name;
    var shortName = entry.shortName;
    var logo = entry.logo;
    var href = legacyUtils.formatIOSMobile(props.uri, entry);
    var handleClickIOS = React.useCallback(function () {
      legacyUtils.saveMobileLinkInfo({
        name: name,
        href: href
      });
    }, [pageLinks]);
    return !grid ? React.createElement(WalletButton, {
      color: color,
      href: href,
      name: name,
      logo: logo,
      onClick: handleClickIOS
    }) : React.createElement(WalletIcon, {
      color: color,
      href: href,
      name: shortName || name,
      logo: logo,
      onClick: handleClickIOS
    });
  }) : React.createElement(React.Fragment, null, React.createElement("p", null, errorMessage.length ? props.errorMessage : !!props.links.length && !links.length ? props.text.no_wallets_found : props.text.loading)) : React.createElement(ConnectButton, {
    name: props.text.connect,
    color: DEFAULT_BUTTON_COLOR,
    href: props.uri,
    onClick: React.useCallback(function () {
      legacyUtils.saveMobileLinkInfo({
        name: "Unknown",
        href: props.uri
      });
    }, [])
  })), hasPaging && React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(pages).fill(0).map(function (_, index) {
    var pageNumber = index + 1;
    var selected = page === pageNumber;
    return React.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: selected ? "bold" : "normal"
      },
      onClick: function () { return setPage(pageNumber); }
    }, pageNumber);
  })));
}

function Notification(props) {
  var show = !!props.message.trim();
  return React.createElement("div", {
    className: ("walletconnect-qrcode__notification" + (show ? " notification__show" : ""))
  }, props.message);
}

var formatQRCodeImage = function (data) {
  try {
    var result = "";
    return Promise.resolve(QRCode.toString(data, {
      margin: 0,
      type: "svg"
    })).then(function (dataString) {
      if (typeof dataString === "string") {
        result = dataString.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"");
      }
      return result;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
function QRCodeDisplay(props) {
  var ref = React.useState("");
  var notification = ref[0];
  var setNotification = ref[1];
  var ref$1 = React.useState("");
  var svg = ref$1[0];
  var setSvg = ref$1[1];
  React.useEffect(function () {
    try {
      return Promise.resolve(formatQRCodeImage(props.uri)).then(function (_formatQRCodeImage) {
        setSvg(_formatQRCodeImage);
      });
    } catch (e) {
      Promise.reject(e);
    }
  }, []);
  var copyToClipboard = function () {
    var success = copy(props.uri);
    if (success) {
      setNotification(props.text.copied_to_clipboard);
      setInterval(function () { return setNotification(""); }, 1200);
    } else {
      setNotification("Error");
      setInterval(function () { return setNotification(""); }, 1200);
    }
  };
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, React.createElement("a", {
    onClick: copyToClipboard
  }, props.text.copy_to_clipboard)), React.createElement(Notification, {
    message: notification
  }));
}

function Modal(props) {
  var android = legacyUtils.isAndroid();
  var mobile = legacyUtils.isMobile();
  var whitelist = mobile ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : undefined : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks ? props.qrcodeModalOptions.desktopLinks : undefined;
  var ref = React.useState(false);
  var loading = ref[0];
  var setLoading = ref[1];
  var ref$1 = React.useState(false);
  var fetched = ref$1[0];
  var setFetched = ref$1[1];
  var ref$2 = React.useState(!mobile);
  var displayQRCode = ref$2[0];
  var setDisplayQRCode = ref$2[1];
  var displayProps = {
    mobile: mobile,
    text: props.text,
    uri: props.uri,
    qrcodeModalOptions: props.qrcodeModalOptions
  };
  var ref$3 = React.useState("");
  var singleLinkHref = ref$3[0];
  var setSingleLinkHref = ref$3[1];
  var ref$4 = React.useState(false);
  var hasSingleLink = ref$4[0];
  var setHasSingleLink = ref$4[1];
  var ref$5 = React.useState([]);
  var links = ref$5[0];
  var setLinks = ref$5[1];
  var ref$6 = React.useState("");
  var errorMessage = ref$6[0];
  var setErrorMessage = ref$6[1];
  var getLinksIfNeeded = function () {
    if (fetched || loading || whitelist && !whitelist.length || links.length > 0) {
      return;
    }
    React.useEffect(function () {
      var initLinks = function () {
        try {
          if (android) { return Promise.resolve(); }
          setLoading(true);
          var _temp = _catch(function () {
            var url = props.qrcodeModalOptions && props.qrcodeModalOptions.registryUrl ? props.qrcodeModalOptions.registryUrl : legacyUtils.getWalletRegistryUrl();
            return Promise.resolve(fetch(url)).then(function (registryResponse) {
              return Promise.resolve(registryResponse.json()).then(function (_registryResponse$jso) {
                var registry = _registryResponse$jso.listings;
                var platform = mobile ? "mobile" : "desktop";
                var _links = legacyUtils.getMobileLinkRegistry(legacyUtils.formatMobileRegistry(registry, platform), whitelist);
                setLoading(false);
                setFetched(true);
                setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                setLinks(_links);
                var hasSingleLink = _links.length === 1;
                if (hasSingleLink) {
                  setSingleLinkHref(legacyUtils.formatIOSMobile(props.uri, _links[0]));
                  setDisplayQRCode(true);
                }
                setHasSingleLink(hasSingleLink);
              });
            });
          }, function (e) {
            setLoading(false);
            setFetched(true);
            setErrorMessage(props.text.something_went_wrong);
            console.error(e);
          });
          return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      initLinks();
    });
  };
  getLinksIfNeeded();
  var rightSelected = mobile ? displayQRCode : !displayQRCode;
  return React.createElement("div", {
    id: WALLETCONNECT_MODAL_ID,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, React.createElement("div", {
    className: "walletconnect-modal__base"
  }, React.createElement(Header, {
    onClose: props.onClose
  }), hasSingleLink && displayQRCode ? React.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, React.createElement("a", {
    onClick: function () { return legacyUtils.saveMobileLinkInfo({
      name: links[0].name,
      href: singleLinkHref
    }); },
    href: singleLinkHref,
    rel: "noopener noreferrer",
    target: "_blank"
  }, props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›")) : android || loading || !loading && links.length ? React.createElement("div", {
    className: ("walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : ""))
  }, React.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function () { return (setDisplayQRCode(false), getLinksIfNeeded()); }
  }, props.text.mobile), React.createElement("a", {
    onClick: function () { return setDisplayQRCode(true); }
  }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function () { return setDisplayQRCode(true); }
  }, props.text.qrcode), React.createElement("a", {
    onClick: function () { return (setDisplayQRCode(false), getLinksIfNeeded()); }
  }, props.text.desktop))) : null, React.createElement("div", null, displayQRCode || !android && !loading && !links.length ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(LinkDisplay, Object.assign({}, displayProps, {
    links: links,
    errorMessage: errorMessage
  })))));
}

var de = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
  no_wallets_found: "keine Wallet gefunden"
};

var en = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
};

var es = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo salió mal",
  no_supported_wallets: "Todavía no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
};

var fr = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  connect_with: "Connectez-vous à l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourné",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouvé"
};

var ko = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  desktop: "데스크탑",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  connect_with: "와 연결하다",
  loading: "로드 중...",
  something_went_wrong: "문제가 발생했습니다.",
  no_supported_wallets: "아직 지원되는 지갑이 없습니다",
  no_wallets_found: "지갑을 찾을 수 없습니다"
};

var pt = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda não há carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
};

var zh = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  desktop: "桌面",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  connect_with: "通过以下方式连接",
  loading: "正在加载...",
  something_went_wrong: "出了问题",
  no_supported_wallets: "目前还没有支持的钱包",
  no_wallets_found: "没有找到钱包"
};

var fa = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  desktop: "دسکتاپ",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  connect_with: "ارتباط با",
  loading: "...بارگذاری",
  something_went_wrong: "مشکلی پیش آمد",
  no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
  no_wallets_found: "هیچ کیف پولی پیدا نشد"
};

var languages = {
  de: de,
  en: en,
  es: es,
  fr: fr,
  ko: ko,
  pt: pt,
  zh: zh,
  fa: fa
};

function injectStyleSheet() {
  var doc = legacyUtils.getDocumentOrThrow();
  var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
  if (prev) {
    doc.head.removeChild(prev);
  }
  var style = doc.createElement("style");
  style.setAttribute("id", WALLETCONNECT_STYLE_ID);
  style.innerText = WALLETCONNECT_STYLE_SHEET;
  doc.head.appendChild(style);
}
function renderWrapper() {
  var doc = legacyUtils.getDocumentOrThrow();
  var wrapper = doc.createElement("div");
  wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
  doc.body.appendChild(wrapper);
  return wrapper;
}
function triggerCloseAnimation() {
  var doc = legacyUtils.getDocumentOrThrow();
  var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
  if (modal) {
    modal.className = modal.className.replace("fadeIn", "fadeOut");
    setTimeout(function () {
      var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
      if (wrapper) {
        doc.body.removeChild(wrapper);
      }
    }, ANIMATION_DURATION);
  }
}
function getWrappedCallback(cb) {
  return function () {
    triggerCloseAnimation();
    if (cb) {
      cb();
    }
  };
}
function getText() {
  var lang = legacyUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
  return languages[lang] || languages["en"];
}
function open$1(uri, cb, qrcodeModalOptions) {
  injectStyleSheet();
  var wrapper = renderWrapper();
  React.render(React.createElement(Modal, {
    text: getText(),
    uri: uri,
    onClose: getWrappedCallback(cb),
    qrcodeModalOptions: qrcodeModalOptions
  }), wrapper);
}
function close$1() {
  triggerCloseAnimation();
}

var isNode = function () { return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined"; };
function open$2(uri, cb, qrcodeModalOptions) {
  console.log(uri);
  if (isNode()) {
    open(uri);
  } else {
    open$1(uri, cb, qrcodeModalOptions);
  }
}
function close$2() {
  if (isNode()) ; else {
    close$1();
  }
}
var index = {
  open: open$2,
  close: close$2
};

module.exports = index;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 66789:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

const canPromise = __webpack_require__(74167)

const QRCode = __webpack_require__(87083)
const CanvasRenderer = __webpack_require__(91052)
const SvgRenderer = __webpack_require__(91974)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

__webpack_unused_export__ = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
__webpack_unused_export__ = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
__webpack_unused_export__ = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 74167:
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 17241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(83703).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 51726:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(79932)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 63855:
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 68934:
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 25669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(59976)
const Mode = __webpack_require__(79932)

function ByteData (data) {
  this.mode = Mode.BYTE
  if (typeof (data) === 'string') {
    data = encodeUtf8(data)
  }
  this.data = new Uint8Array(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 91889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(25570)

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 25570:
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 59140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(83703).getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 12892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(83703)

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 26509:
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 60704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(79932)
const Utils = __webpack_require__(83703)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 53313:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 79932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(38790)
const Regex = __webpack_require__(77645)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 18315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(79932)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 6892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(26509)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ 87083:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(83703)
const ECLevel = __webpack_require__(25570)
const BitBuffer = __webpack_require__(63855)
const BitMatrix = __webpack_require__(68934)
const AlignmentPattern = __webpack_require__(17241)
const FinderPattern = __webpack_require__(59140)
const MaskPattern = __webpack_require__(53313)
const ECCode = __webpack_require__(91889)
const ReedSolomonEncoder = __webpack_require__(69584)
const Version = __webpack_require__(62432)
const FormatInfo = __webpack_require__(12892)
const Mode = __webpack_require__(79932)
const Segments = __webpack_require__(90052)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 69584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(6892)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 77645:
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 90052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(79932)
const NumericData = __webpack_require__(18315)
const AlphanumericData = __webpack_require__(51726)
const ByteData = __webpack_require__(25669)
const KanjiData = __webpack_require__(60704)
const Regex = __webpack_require__(77645)
const Utils = __webpack_require__(83703)
const dijkstra = __webpack_require__(36208)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 83703:
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 38790:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 62432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(83703)
const ECCode = __webpack_require__(91889)
const ECLevel = __webpack_require__(25570)
const Mode = __webpack_require__(79932)
const VersionCheck = __webpack_require__(38790)

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 21575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/

module.exports = __webpack_require__(3503)


/***/ }),

/***/ 91052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(53156)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 3377:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const fs = __webpack_require__(57147)
const PNG = (__webpack_require__(79483)/* .PNG */ .y)
const Utils = __webpack_require__(53156)

exports.render = function render (qrData, options) {
  const opts = Utils.getOptions(options)
  const pngOpts = opts.rendererOpts
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  pngOpts.width = size
  pngOpts.height = size

  const pngImage = new PNG(pngOpts)
  Utils.qrToImageData(pngImage.data, qrData, opts)

  return pngImage
}

exports.renderToDataURL = function renderToDataURL (qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  exports.renderToBuffer(qrData, options, function (err, output) {
    if (err) cb(err)
    let url = 'data:image/png;base64,'
    url += output.toString('base64')
    cb(null, url)
  })
}

exports.renderToBuffer = function renderToBuffer (qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  const png = exports.render(qrData, options)
  const buffer = []

  png.on('error', cb)

  png.on('data', function (data) {
    buffer.push(data)
  })

  png.on('end', function () {
    cb(null, Buffer.concat(buffer))
  })

  png.pack()
}

exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  let called = false
  const done = (...args) => {
    if (called) return
    called = true
    cb.apply(null, args)
  }
  const stream = fs.createWriteStream(path)

  stream.on('error', done)
  stream.on('close', done)

  exports.renderToFileStream(stream, qrData, options)
}

exports.renderToFileStream = function renderToFileStream (stream, qrData, options) {
  const png = exports.render(qrData, options)
  png.pack().pipe(stream)
}


/***/ }),

/***/ 91974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(53156)

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 16466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const svgTagRenderer = __webpack_require__(91974)

exports.render = svgTagRenderer.render

exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  const fs = __webpack_require__(57147)
  const svgTag = exports.render(qrData, options)

  const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' +
    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
    svgTag

  fs.writeFile(path, xmlStr, cb)
}


/***/ }),

/***/ 82025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const big = __webpack_require__(17566)
const small = __webpack_require__(61024)

exports.render = function (qrData, options, cb) {
  if (options && options.small) {
    return small.render(qrData, options, cb)
  }
  return big.render(qrData, options, cb)
}


/***/ }),

/***/ 61024:
/***/ ((__unused_webpack_module, exports) => {

const backgroundWhite = '\x1b[47m'
const backgroundBlack = '\x1b[40m'
const foregroundWhite = '\x1b[37m'
const foregroundBlack = '\x1b[30m'
const reset = '\x1b[0m'
const lineSetupNormal = backgroundWhite + foregroundBlack // setup colors
const lineSetupInverse = backgroundBlack + foregroundWhite // setup colors

const createPalette = function (lineSetup, foregroundWhite, foregroundBlack) {
  return {
    // 1 ... white, 2 ... black, 0 ... transparent (default)

    '00': reset + ' ' + lineSetup,
    '01': reset + foregroundWhite + '▄' + lineSetup,
    '02': reset + foregroundBlack + '▄' + lineSetup,
    10: reset + foregroundWhite + '▀' + lineSetup,
    11: ' ',
    12: '▄',
    20: reset + foregroundBlack + '▀' + lineSetup,
    21: '▀',
    22: '█'
  }
}

/**
 * Returns code for QR pixel
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {'0' | '1' | '2'}
 */
const mkCodePixel = function (modules, size, x, y) {
  const sizePlus = size + 1
  if ((x >= sizePlus) || (y >= sizePlus) || (y < -1) || (x < -1)) return '0'
  if ((x >= size) || (y >= size) || (y < 0) || (x < 0)) return '1'
  const idx = (y * size) + x
  return modules[idx] ? '2' : '1'
}

/**
 * Returns code for four QR pixels. Suitable as key in palette.
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {keyof palette}
 */
const mkCode = function (modules, size, x, y) {
  return (
    mkCodePixel(modules, size, x, y) +
    mkCodePixel(modules, size, x, y + 1)
  )
}

exports.render = function (qrData, options, cb) {
  const size = qrData.modules.size
  const data = qrData.modules.data

  const inverse = !!(options && options.inverse)
  const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal
  const white = inverse ? foregroundBlack : foregroundWhite
  const black = inverse ? foregroundWhite : foregroundBlack

  const palette = createPalette(lineSetup, white, black)
  const newLine = reset + '\n' + lineSetup

  let output = lineSetup // setup colors

  for (let y = -1; y < size + 1; y += 2) {
    for (let x = -1; x < size; x++) {
      output += palette[mkCode(data, size, x, y)]
    }

    output += palette[mkCode(data, size, size, y)] + newLine
  }

  output += reset

  if (typeof cb === 'function') {
    cb(null, output)
  }

  return output
}


/***/ }),

/***/ 17566:
/***/ ((__unused_webpack_module, exports) => {

// let Utils = require('./utils')

exports.render = function (qrData, options, cb) {
  const size = qrData.modules.size
  const data = qrData.modules.data

  // let opts = Utils.getOptions(options)

  // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)
  const black = '\x1b[40m  \x1b[0m'
  const white = '\x1b[47m  \x1b[0m'

  let output = ''
  const hMargin = Array(size + 3).join(white)
  const vMargin = Array(2).join(white)

  output += hMargin + '\n'
  for (let i = 0; i < size; ++i) {
    output += white
    for (let j = 0; j < size; j++) {
      // let topModule = data[i * size + j]
      // let bottomModule = data[(i + 1) * size + j]

      output += data[i * size + j] ? black : white// getBlockChar(topModule, bottomModule)
    }
    // output += white+'\n'
    output += vMargin + '\n'
  }

  output += hMargin + '\n'

  if (typeof cb === 'function') {
    cb(null, output)
  }

  return output
}
/*
exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  let fs = require('fs')
  let utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}
*/


/***/ }),

/***/ 62688:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(53156)

const BLOCK_CHAR = {
  WW: ' ',
  WB: '▄',
  BB: '█',
  BW: '▀'
}

const INVERTED_BLOCK_CHAR = {
  BB: ' ',
  BW: '▄',
  WW: '█',
  WB: '▀'
}

function getBlockChar (top, bottom, blocks) {
  if (top && bottom) return blocks.BB
  if (top && !bottom) return blocks.BW
  if (!top && bottom) return blocks.WB
  return blocks.WW
}

exports.render = function (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  let blocks = BLOCK_CHAR
  if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
    blocks = INVERTED_BLOCK_CHAR
  }

  const size = qrData.modules.size
  const data = qrData.modules.data

  let output = ''
  let hMargin = Array(size + (opts.margin * 2) + 1).join(blocks.WW)
  hMargin = Array((opts.margin / 2) + 1).join(hMargin + '\n')

  const vMargin = Array(opts.margin + 1).join(blocks.WW)

  output += hMargin
  for (let i = 0; i < size; i += 2) {
    output += vMargin
    for (let j = 0; j < size; j++) {
      const topModule = data[i * size + j]
      const bottomModule = data[(i + 1) * size + j]

      output += getBlockChar(topModule, bottomModule, blocks)
    }

    output += vMargin + '\n'
  }

  output += hMargin.slice(0, -1)

  if (typeof cb === 'function') {
    cb(null, output)
  }

  return output
}

exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  const fs = __webpack_require__(57147)
  const utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}


/***/ }),

/***/ 53156:
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const canPromise = __webpack_require__(74167)
const QRCode = __webpack_require__(87083)
const PngRenderer = __webpack_require__(3377)
const Utf8Renderer = __webpack_require__(62688)
const TerminalRenderer = __webpack_require__(82025)
const SvgRenderer = __webpack_require__(16466)

function checkParams (text, opts, cb) {
  if (typeof text === 'undefined') {
    throw new Error('String required as first argument')
  }

  if (typeof cb === 'undefined') {
    cb = opts
    opts = {}
  }

  if (typeof cb !== 'function') {
    if (!canPromise()) {
      throw new Error('Callback required as last argument')
    } else {
      opts = cb || {}
      cb = null
    }
  }

  return {
    opts: opts,
    cb: cb
  }
}

function getTypeFromFilename (path) {
  return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase()
}

function getRendererFromType (type) {
  switch (type) {
    case 'svg':
      return SvgRenderer

    case 'txt':
    case 'utf8':
      return Utf8Renderer

    case 'png':
    case 'image/png':
    default:
      return PngRenderer
  }
}

function getStringRendererFromType (type) {
  switch (type) {
    case 'svg':
      return SvgRenderer

    case 'terminal':
      return TerminalRenderer

    case 'utf8':
    default:
      return Utf8Renderer
  }
}

function render (renderFunc, text, params) {
  if (!params.cb) {
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, params.opts)
        return renderFunc(data, params.opts, function (err, data) {
          return err ? reject(err) : resolve(data)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, params.opts)
    return renderFunc(data, params.opts, params.cb)
  } catch (e) {
    params.cb(e)
  }
}

exports.create = QRCode.create

exports.toCanvas = __webpack_require__(66789).toCanvas

exports.toString = function toString (text, opts, cb) {
  const params = checkParams(text, opts, cb)
  const type = params.opts ? params.opts.type : undefined
  const renderer = getStringRendererFromType(type)
  return render(renderer.render, text, params)
}

exports.toDataURL = function toDataURL (text, opts, cb) {
  const params = checkParams(text, opts, cb)
  const renderer = getRendererFromType(params.opts.type)
  return render(renderer.renderToDataURL, text, params)
}

exports.toBuffer = function toBuffer (text, opts, cb) {
  const params = checkParams(text, opts, cb)
  const renderer = getRendererFromType(params.opts.type)
  return render(renderer.renderToBuffer, text, params)
}

exports.toFile = function toFile (path, text, opts, cb) {
  if (typeof path !== 'string' || !(typeof text === 'string' || typeof text === 'object')) {
    throw new Error('Invalid argument')
  }

  if ((arguments.length < 3) && !canPromise()) {
    throw new Error('Too few arguments provided')
  }

  const params = checkParams(text, opts, cb)
  const type = params.opts.type || getTypeFromFilename(path)
  const renderer = getRendererFromType(type)
  const renderToFile = renderer.renderToFile.bind(null, path)

  return render(renderToFile, text, params)
}

exports.toFileStream = function toFileStream (stream, text, opts) {
  if (arguments.length < 2) {
    throw new Error('Too few arguments provided')
  }

  const params = checkParams(text, opts, stream.emit.bind(stream, 'error'))
  const renderer = getRendererFromType('png') // Only png support for now
  const renderToFileStream = renderer.renderToFileStream.bind(null, stream)
  render(renderToFileStream, text, params)
}


/***/ }),

/***/ 95232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
const events_1 = tslib_1.__importDefault(__webpack_require__(82361));
const jsonrpc_provider_1 = __webpack_require__(32207);
const jsonrpc_http_connection_1 = __webpack_require__(65286);
const legacy_types_1 = __webpack_require__(97117);
const legacy_utils_1 = __webpack_require__(10603);
const signer_1 = __webpack_require__(9619);
class WalletConnectProvider {
    constructor(opts) {
        this.events = new events_1.default();
        this.rpc = { infuraId: opts === null || opts === void 0 ? void 0 : opts.infuraId, custom: opts === null || opts === void 0 ? void 0 : opts.rpc };
        this.signer = new jsonrpc_provider_1.JsonRpcProvider(new signer_1.SignerConnection(opts));
        const chainId = this.signer.connection.chainId || (opts === null || opts === void 0 ? void 0 : opts.chainId) || 1;
        this.http = this.setHttpProvider(chainId);
        this.registerEventListeners();
    }
    get connected() {
        return this.signer.connection.connected;
    }
    get connector() {
        return this.signer.connection.connector;
    }
    get accounts() {
        return this.signer.connection.accounts;
    }
    get chainId() {
        return this.signer.connection.chainId;
    }
    get rpcUrl() {
        var _a;
        return ((_a = this.http) === null || _a === void 0 ? void 0 : _a.connection).url || "";
    }
    request(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (args.method) {
                case "eth_requestAccounts":
                    yield this.connect();
                    return this.signer.connection.accounts;
                case "eth_accounts":
                    return this.signer.connection.accounts;
                case "eth_chainId":
                    return this.signer.connection.chainId;
                default:
                    break;
            }
            if (legacy_types_1.SIGNING_METHODS.includes(args.method)) {
                return this.signer.request(args);
            }
            if (typeof this.http === "undefined") {
                throw new Error(`Cannot request JSON-RPC method (${args.method}) without provided rpc url`);
            }
            return this.http.request(args);
        });
    }
    sendAsync(args, callback) {
        this.request(args)
            .then(response => callback(null, response))
            .catch(error => callback(error, undefined));
    }
    enable() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.request({ method: "eth_requestAccounts" });
            return accounts;
        });
    }
    connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.signer.connection.connected) {
                yield this.signer.connect();
            }
        });
    }
    disconnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.signer.connection.connected) {
                yield this.signer.disconnect();
            }
        });
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    get isWalletConnect() {
        return true;
    }
    registerEventListeners() {
        this.signer.connection.on("accountsChanged", accounts => {
            this.events.emit("accountsChanged", accounts);
        });
        this.signer.connection.on("chainChanged", chainId => {
            this.http = this.setHttpProvider(chainId);
            this.events.emit("chainChanged", chainId);
        });
        this.signer.on("disconnect", () => {
            this.events.emit("disconnect");
        });
    }
    setHttpProvider(chainId) {
        const rpcUrl = legacy_utils_1.getRpcUrl(chainId, this.rpc);
        if (typeof rpcUrl === "undefined")
            return undefined;
        const http = new jsonrpc_provider_1.JsonRpcProvider(new jsonrpc_http_connection_1.HttpConnection(rpcUrl));
        return http;
    }
}
exports["default"] = WalletConnectProvider;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignerConnection = void 0;
const tslib_1 = __webpack_require__(16158);
const events_1 = tslib_1.__importDefault(__webpack_require__(82361));
const legacy_client_1 = tslib_1.__importDefault(__webpack_require__(42496));
const legacy_modal_1 = tslib_1.__importDefault(__webpack_require__(8569));
const jsonrpc_types_1 = __webpack_require__(7057);
const jsonrpc_utils_1 = __webpack_require__(25815);
class SignerConnection extends jsonrpc_types_1.IJsonRpcConnection {
    constructor(opts) {
        super();
        this.events = new events_1.default();
        this.accounts = [];
        this.chainId = 1;
        this.pending = false;
        this.bridge = "https://bridge.walletconnect.org";
        this.qrcode = true;
        this.qrcodeModalOptions = undefined;
        this.opts = opts;
        this.chainId = (opts === null || opts === void 0 ? void 0 : opts.chainId) || this.chainId;
        this.wc = this.register(opts);
    }
    get connected() {
        return typeof this.wc !== "undefined" && this.wc.connected;
    }
    get connecting() {
        return this.pending;
    }
    get connector() {
        this.wc = this.register(this.opts);
        return this.wc;
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    open(chainId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.connected) {
                this.onOpen();
                return;
            }
            return new Promise((resolve, reject) => {
                this.on("error", err => {
                    reject(err);
                });
                this.on("open", () => {
                    resolve();
                });
                this.create(chainId);
            });
        });
    }
    close() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof this.wc === "undefined")
                return;
            if (this.wc.connected) {
                this.wc.killSession();
            }
            this.onClose();
        });
    }
    send(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.wc = this.register(this.opts);
            if (!this.connected)
                yield this.open();
            this.sendPayload(payload)
                .then((res) => this.events.emit("payload", res))
                .catch(e => this.events.emit("payload", jsonrpc_utils_1.formatJsonRpcError(payload.id, e.message)));
        });
    }
    register(opts) {
        if (this.wc)
            return this.wc;
        this.opts = opts || this.opts;
        this.bridge = (opts === null || opts === void 0 ? void 0 : opts.connector) ? opts.connector.bridge
            : (opts === null || opts === void 0 ? void 0 : opts.bridge) || "https://bridge.walletconnect.org";
        this.qrcode = typeof (opts === null || opts === void 0 ? void 0 : opts.qrcode) === "undefined" || opts.qrcode !== false;
        this.chainId = typeof (opts === null || opts === void 0 ? void 0 : opts.chainId) !== "undefined" ? opts.chainId : this.chainId;
        this.qrcodeModalOptions = opts === null || opts === void 0 ? void 0 : opts.qrcodeModalOptions;
        const connectorOpts = {
            bridge: this.bridge,
            qrcodeModal: this.qrcode ? legacy_modal_1.default : undefined,
            qrcodeModalOptions: this.qrcodeModalOptions,
            storageId: opts === null || opts === void 0 ? void 0 : opts.storageId,
            signingMethods: opts === null || opts === void 0 ? void 0 : opts.signingMethods,
            clientMeta: opts === null || opts === void 0 ? void 0 : opts.clientMeta,
        };
        this.wc =
            typeof (opts === null || opts === void 0 ? void 0 : opts.connector) !== "undefined" ? opts.connector : new legacy_client_1.default(connectorOpts);
        if (typeof this.wc === "undefined") {
            throw new Error("Failed to register WalletConnect connector");
        }
        if (this.wc.accounts.length) {
            this.accounts = this.wc.accounts;
        }
        if (this.wc.chainId) {
            this.chainId = this.wc.chainId;
        }
        this.registerConnectorEvents();
        return this.wc;
    }
    onOpen(wc) {
        this.pending = false;
        if (wc) {
            this.wc = wc;
        }
        this.events.emit("open");
    }
    onClose() {
        this.pending = false;
        if (this.wc) {
            this.wc = undefined;
        }
        this.events.emit("close");
    }
    onError(payload, message = "Failed or Rejected Request", code = -32000) {
        const errorPayload = {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: { code, message },
        };
        this.events.emit("payload", errorPayload);
        return errorPayload;
    }
    create(chainId) {
        this.wc = this.register(this.opts);
        this.chainId = chainId || this.chainId;
        if (this.connected || this.pending)
            return;
        this.pending = true;
        this.registerConnectorEvents();
        this.wc
            .createSession({ chainId: this.chainId })
            .then(() => this.events.emit("created"))
            .catch((e) => this.events.emit("error", e));
    }
    registerConnectorEvents() {
        this.wc = this.register(this.opts);
        this.wc.on("connect", (err) => {
            var _a, _b;
            if (err) {
                this.events.emit("error", err);
                return;
            }
            this.accounts = ((_a = this.wc) === null || _a === void 0 ? void 0 : _a.accounts) || [];
            this.chainId = ((_b = this.wc) === null || _b === void 0 ? void 0 : _b.chainId) || this.chainId;
            this.onOpen();
        });
        this.wc.on("disconnect", (err) => {
            if (err) {
                this.events.emit("error", err);
                return;
            }
            this.onClose();
        });
        this.wc.on("modal_closed", () => {
            this.events.emit("error", new Error("User closed modal"));
        });
        this.wc.on("session_update", (error, payload) => {
            const { accounts, chainId } = payload.params[0];
            if (!this.accounts || (accounts && this.accounts !== accounts)) {
                this.accounts = accounts;
                this.events.emit("accountsChanged", accounts);
            }
            if (!this.chainId || (chainId && this.chainId !== chainId)) {
                this.chainId = chainId;
                this.events.emit("chainChanged", chainId);
            }
        });
    }
    sendPayload(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.wc = this.register(this.opts);
            try {
                const response = yield this.wc.unsafeSend(payload);
                return this.sanitizeResponse(response);
            }
            catch (error) {
                return this.onError(payload, error.message);
            }
        });
    }
    sanitizeResponse(response) {
        return typeof response.error !== "undefined" &&
            typeof response.error.code === "undefined"
            ? jsonrpc_utils_1.formatJsonRpcError(response.id, response.error.message, response.error.data)
            : response;
    }
}
exports.SignerConnection = SignerConnection;
exports["default"] = SignerConnection;
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ 68688:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_QRCODE_MODAL_USER_CLOSED = exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = exports.ERROR_INVALID_URI = exports.ERROR_INVALID_RESPONSE = exports.ERROR_MISSING_REQUIRED = exports.ERROR_MISSING_ID = exports.ERROR_MISSING_METHOD = exports.ERROR_MISSING_ERROR = exports.ERROR_MISSING_RESULT = exports.ERROR_MISSING_JSON_RPC = exports.ERROR_SESSION_REJECTED = exports.ERROR_SESSION_DISCONNECTED = exports.ERROR_SESSION_CONNECTED = void 0;
exports.ERROR_SESSION_CONNECTED = "Session currently connected";
exports.ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
exports.ERROR_SESSION_REJECTED = "Session Rejected";
exports.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
exports.ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
exports.ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
exports.ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
exports.ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
exports.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
exports.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
exports.ERROR_INVALID_URI = "URI format is invalid";
exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
exports.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 56668:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reservedEvents = exports.RESERVED_EVENTS = void 0;
exports.RESERVED_EVENTS = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error",
];
exports.reservedEvents = exports.RESERVED_EVENTS;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 29125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
tslib_1.__exportStar(__webpack_require__(68688), exports);
tslib_1.__exportStar(__webpack_require__(56668), exports);
tslib_1.__exportStar(__webpack_require__(70379), exports);
tslib_1.__exportStar(__webpack_require__(75967), exports);
tslib_1.__exportStar(__webpack_require__(98269), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70379:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stateMethods = exports.signingMethods = exports.STATE_METHODS = exports.SIGNING_METHODS = exports.WALLET_METHODS = void 0;
exports.WALLET_METHODS = [
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
];
exports.SIGNING_METHODS = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    ...exports.WALLET_METHODS,
];
exports.STATE_METHODS = ["eth_accounts", "eth_chainId", "net_version"];
exports.signingMethods = exports.SIGNING_METHODS;
exports.stateMethods = exports.STATE_METHODS;
//# sourceMappingURL=jsonrpc.js.map

/***/ }),

/***/ 75967:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mobileLinkChoiceKey = exports.MOBILE_LINK_CHOICE_KEY = void 0;
exports.MOBILE_LINK_CHOICE_KEY = "WALLETCONNECT_DEEPLINK_CHOICE";
exports.mobileLinkChoiceKey = exports.MOBILE_LINK_CHOICE_KEY;
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ 98269:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.infuraNetworks = exports.INFURA_NETWORKS = void 0;
exports.INFURA_NETWORKS = {
    1: "mainnet",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    42: "kovan",
};
exports.infuraNetworks = exports.INFURA_NETWORKS;
//# sourceMappingURL=networks.js.map

/***/ }),

/***/ 43665:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 72220:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ethereum.js.map

/***/ }),

/***/ 76732:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IEvents = void 0;
class IEvents {
}
exports.IEvents = IEvents;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 97117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
tslib_1.__exportStar(__webpack_require__(43665), exports);
tslib_1.__exportStar(__webpack_require__(29125), exports);
tslib_1.__exportStar(__webpack_require__(72220), exports);
tslib_1.__exportStar(__webpack_require__(76732), exports);
tslib_1.__exportStar(__webpack_require__(93126), exports);
tslib_1.__exportStar(__webpack_require__(2768), exports);
tslib_1.__exportStar(__webpack_require__(1280), exports);
tslib_1.__exportStar(__webpack_require__(60774), exports);
tslib_1.__exportStar(__webpack_require__(27425), exports);
tslib_1.__exportStar(__webpack_require__(13554), exports);
tslib_1.__exportStar(__webpack_require__(78841), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 93126:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=jsonrpc.js.map

/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 1280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=protocol.js.map

/***/ }),

/***/ 60774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 27425:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ 13554:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 78841:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 21129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertNumberToHex = exports.convertNumberToUtf8 = exports.convertNumberToArrayBuffer = exports.convertNumberToBuffer = exports.convertHexToNumber = exports.convertHexToUtf8 = exports.convertHexToArrayBuffer = exports.convertHexToBuffer = exports.convertUtf8ToNumber = exports.convertUtf8ToHex = exports.convertUtf8ToBuffer = exports.convertUtf8ToArrayBuffer = exports.concatBuffers = exports.convertBufferToNumber = exports.convertBufferToHex = exports.convertBufferToUtf8 = exports.convertBufferToArrayBuffer = exports.concatArrayBuffers = exports.convertArrayBufferToNumber = exports.convertArrayBufferToHex = exports.convertArrayBufferToUtf8 = exports.convertArrayBufferToBuffer = void 0;
const tslib_1 = __webpack_require__(16158);
const encoding = tslib_1.__importStar(__webpack_require__(2921));
function convertArrayBufferToBuffer(arrBuf) {
    return encoding.arrayToBuffer(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToBuffer = convertArrayBufferToBuffer;
function convertArrayBufferToUtf8(arrBuf) {
    return encoding.arrayToUtf8(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToUtf8 = convertArrayBufferToUtf8;
function convertArrayBufferToHex(arrBuf, noPrefix) {
    return encoding.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
exports.convertArrayBufferToHex = convertArrayBufferToHex;
function convertArrayBufferToNumber(arrBuf) {
    return encoding.arrayToNumber(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToNumber = convertArrayBufferToNumber;
function concatArrayBuffers(...args) {
    return encoding.hexToArray(args.map(b => encoding.arrayToHex(new Uint8Array(b))).join("")).buffer;
}
exports.concatArrayBuffers = concatArrayBuffers;
function convertBufferToArrayBuffer(buf) {
    return encoding.bufferToArray(buf).buffer;
}
exports.convertBufferToArrayBuffer = convertBufferToArrayBuffer;
function convertBufferToUtf8(buf) {
    return encoding.bufferToUtf8(buf);
}
exports.convertBufferToUtf8 = convertBufferToUtf8;
function convertBufferToHex(buf, noPrefix) {
    return encoding.bufferToHex(buf, !noPrefix);
}
exports.convertBufferToHex = convertBufferToHex;
function convertBufferToNumber(buf) {
    return encoding.bufferToNumber(buf);
}
exports.convertBufferToNumber = convertBufferToNumber;
function concatBuffers(...args) {
    return encoding.concatBuffers(...args);
}
exports.concatBuffers = concatBuffers;
function convertUtf8ToArrayBuffer(utf8) {
    return encoding.utf8ToArray(utf8).buffer;
}
exports.convertUtf8ToArrayBuffer = convertUtf8ToArrayBuffer;
function convertUtf8ToBuffer(utf8) {
    return encoding.utf8ToBuffer(utf8);
}
exports.convertUtf8ToBuffer = convertUtf8ToBuffer;
function convertUtf8ToHex(utf8, noPrefix) {
    return encoding.utf8ToHex(utf8, !noPrefix);
}
exports.convertUtf8ToHex = convertUtf8ToHex;
function convertUtf8ToNumber(utf8) {
    return encoding.utf8ToNumber(utf8);
}
exports.convertUtf8ToNumber = convertUtf8ToNumber;
function convertHexToBuffer(hex) {
    return encoding.hexToBuffer(hex);
}
exports.convertHexToBuffer = convertHexToBuffer;
function convertHexToArrayBuffer(hex) {
    return encoding.hexToArray(hex).buffer;
}
exports.convertHexToArrayBuffer = convertHexToArrayBuffer;
function convertHexToUtf8(hex) {
    return encoding.hexToUtf8(hex);
}
exports.convertHexToUtf8 = convertHexToUtf8;
function convertHexToNumber(hex) {
    return encoding.hexToNumber(hex);
}
exports.convertHexToNumber = convertHexToNumber;
function convertNumberToBuffer(num) {
    return encoding.numberToBuffer(num);
}
exports.convertNumberToBuffer = convertNumberToBuffer;
function convertNumberToArrayBuffer(num) {
    return encoding.numberToArray(num).buffer;
}
exports.convertNumberToArrayBuffer = convertNumberToArrayBuffer;
function convertNumberToUtf8(num) {
    return encoding.numberToUtf8(num);
}
exports.convertNumberToUtf8 = convertNumberToUtf8;
function convertNumberToHex(num, noPrefix) {
    return encoding.numberToHex(Number(num), !noPrefix);
}
exports.convertNumberToHex = convertNumberToHex;
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ 11222:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = exports.isNode = exports.isMobile = exports.isIOS = exports.isAndroid = exports.detectOS = exports.detectEnv = void 0;
const detect_browser_1 = __webpack_require__(70573);
const window_1 = __webpack_require__(9110);
function detectEnv(userAgent) {
    return detect_browser_1.detect(userAgent);
}
exports.detectEnv = detectEnv;
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
exports.detectOS = detectOS;
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
exports.isAndroid = isAndroid;
function isIOS() {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
            (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
        : false;
}
exports.isIOS = isIOS;
function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
exports.isMobile = isMobile;
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
exports.isNode = isNode;
function isBrowser() {
    const result = !isNode() && !!window_1.getNavigator();
    return result;
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 10603:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(16158);
tslib_1.__exportStar(__webpack_require__(21129), exports);
tslib_1.__exportStar(__webpack_require__(11222), exports);
tslib_1.__exportStar(__webpack_require__(99741), exports);
tslib_1.__exportStar(__webpack_require__(64560), exports);
tslib_1.__exportStar(__webpack_require__(97783), exports);
tslib_1.__exportStar(__webpack_require__(39012), exports);
tslib_1.__exportStar(__webpack_require__(15235), exports);
tslib_1.__exportStar(__webpack_require__(84019), exports);
tslib_1.__exportStar(__webpack_require__(19582), exports);
tslib_1.__exportStar(__webpack_require__(71612), exports);
tslib_1.__exportStar(__webpack_require__(44290), exports);
tslib_1.__exportStar(__webpack_require__(4967), exports);
tslib_1.__exportStar(__webpack_require__(9110), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 99741:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeJsonStringify = exports.safeJsonParse = void 0;
const tslib_1 = __webpack_require__(16158);
const safeJson = tslib_1.__importStar(__webpack_require__(51738));
exports.safeJsonParse = safeJson.safeJsonParse;
exports.safeJsonStringify = safeJson.safeJsonStringify;
//# sourceMappingURL=json.js.map

/***/ }),

/***/ 64560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeLocal = exports.getLocal = exports.setLocal = void 0;
const json_1 = __webpack_require__(99741);
const window_1 = __webpack_require__(9110);
function setLocal(key, data) {
    const raw = json_1.safeJsonStringify(data);
    const local = window_1.getLocalStorage();
    if (local) {
        local.setItem(key, raw);
    }
}
exports.setLocal = setLocal;
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = window_1.getLocalStorage();
    if (local) {
        raw = local.getItem(key);
    }
    data = raw ? json_1.safeJsonParse(raw) : raw;
    return data;
}
exports.getLocal = getLocal;
function removeLocal(key) {
    const local = window_1.getLocalStorage();
    if (local) {
        local.removeItem(key);
    }
}
exports.removeLocal = removeLocal;
//# sourceMappingURL=local.js.map

/***/ }),

/***/ 97783:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClientMeta = void 0;
const tslib_1 = __webpack_require__(16158);
const windowMetadata = tslib_1.__importStar(__webpack_require__(18478));
function getClientMeta() {
    return windowMetadata.getWindowMetadata();
}
exports.getClientMeta = getClientMeta;
//# sourceMappingURL=meta.js.map

/***/ }),

/***/ 39012:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRpcUrl = exports.getInfuraRpcUrl = exports.logDeprecationWarning = exports.uuid = exports.payloadId = exports.removeHexLeadingZeros = exports.removeHexPrefix = exports.addHexPrefix = exports.sanitizeHex = void 0;
const tslib_1 = __webpack_require__(16158);
const encoding = tslib_1.__importStar(__webpack_require__(2921));
const jsonRpcUtils = tslib_1.__importStar(__webpack_require__(25815));
const legacy_types_1 = __webpack_require__(97117);
function sanitizeHex(hex) {
    return encoding.sanitizeHex(hex);
}
exports.sanitizeHex = sanitizeHex;
function addHexPrefix(hex) {
    return encoding.addHexPrefix(hex);
}
exports.addHexPrefix = addHexPrefix;
function removeHexPrefix(hex) {
    return encoding.removeHexPrefix(hex);
}
exports.removeHexPrefix = removeHexPrefix;
function removeHexLeadingZeros(hex) {
    return encoding.removeHexLeadingZeros(encoding.addHexPrefix(hex));
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.payloadId = jsonRpcUtils.payloadId;
function uuid() {
    const result = ((a, b) => {
        for (b = a = ""; a++ < 36; b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-") {
        }
        return b;
    })();
    return result;
}
exports.uuid = uuid;
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
exports.logDeprecationWarning = logDeprecationWarning;
function getInfuraRpcUrl(chainId, infuraId) {
    let rpcUrl;
    const network = legacy_types_1.INFURA_NETWORKS[chainId];
    if (network) {
        rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
    }
    return rpcUrl;
}
exports.getInfuraRpcUrl = getInfuraRpcUrl;
function getRpcUrl(chainId, rpc) {
    let rpcUrl;
    const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
    if (rpc.custom && rpc.custom[chainId]) {
        rpcUrl = rpc.custom[chainId];
    }
    else if (infuraUrl) {
        rpcUrl = infuraUrl;
    }
    return rpcUrl;
}
exports.getRpcUrl = getRpcUrl;
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 15235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMobileLinkRegistry = exports.getMobileRegistryEntry = exports.saveMobileLinkInfo = exports.formatIOSMobile = void 0;
const legacy_types_1 = __webpack_require__(97117);
const local_1 = __webpack_require__(64560);
function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink
        ? `${entry.universalLink}/wc?uri=${encodedUri}`
        : entry.deepLink
            ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`
            : "";
}
exports.formatIOSMobile = formatIOSMobile;
function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    local_1.setLocal(legacy_types_1.MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, data), { href: focusUri }));
}
exports.saveMobileLinkInfo = saveMobileLinkInfo;
function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
exports.getMobileRegistryEntry = getMobileRegistryEntry;
function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist) {
        links = whitelist.map((name) => getMobileRegistryEntry(registry, name)).filter(Boolean);
    }
    return links;
}
exports.getMobileLinkRegistry = getMobileLinkRegistry;
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ 84019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatRpcError = exports.promisify = void 0;
const tslib_1 = __webpack_require__(16158);
function promisify(originalFn, thisArg) {
    const promisifiedFunction = (...callArgs) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const callback = (err, data) => {
                if (err === null || typeof err === "undefined") {
                    reject(err);
                }
                resolve(data);
            };
            originalFn.apply(thisArg, [...callArgs, callback]);
        });
    });
    return promisifiedFunction;
}
exports.promisify = promisify;
function formatRpcError(error) {
    const message = error.message || "Failed or Rejected Request";
    let code = -32000;
    if (error && !error.code) {
        switch (message) {
            case "Parse error":
                code = -32700;
                break;
            case "Invalid request":
                code = -32600;
                break;
            case "Method not found":
                code = -32601;
                break;
            case "Invalid params":
                code = -32602;
                break;
            case "Internal error":
                code = -32603;
                break;
            default:
                code = -32000;
                break;
        }
    }
    const result = {
        code,
        message,
    };
    if (error.data) {
        result.data = error.data;
    }
    return result;
}
exports.formatRpcError = formatRpcError;
//# sourceMappingURL=payload.js.map

/***/ }),

/***/ 19582:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatMobileRegistry = exports.formatMobileRegistryEntry = exports.getDappRegistryUrl = exports.getWalletRegistryUrl = void 0;
const API_URL = "https://registry.walletconnect.com";
function getWalletRegistryUrl() {
    return API_URL + "/api/v2/wallets";
}
exports.getWalletRegistryUrl = getWalletRegistryUrl;
function getDappRegistryUrl() {
    return API_URL + "/api/v2/dapps";
}
exports.getDappRegistryUrl = getDappRegistryUrl;
function formatMobileRegistryEntry(entry, platform = "mobile") {
    var _a;
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || "",
    };
}
exports.formatMobileRegistryEntry = formatMobileRegistryEntry;
function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry)
        .filter(entry => !!entry[platform].universal || !!entry[platform].native)
        .map(entry => formatMobileRegistryEntry(entry, platform));
}
exports.formatMobileRegistry = formatMobileRegistry;
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ 71612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseWalletConnectUri = exports.isWalletConnectSession = void 0;
const url_1 = __webpack_require__(44290);
function isWalletConnectSession(object) {
    return typeof object.bridge !== "undefined";
}
exports.isWalletConnectSession = isWalletConnectSession;
function parseWalletConnectUri(str) {
    const pathStart = str.indexOf(":");
    const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
    const protocol = str.substring(0, pathStart);
    const path = str.substring(pathStart + 1, pathEnd);
    function parseRequiredParams(path) {
        const separator = "@";
        const values = path.split(separator);
        const requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10),
        };
        return requiredParams;
    }
    const requiredParams = parseRequiredParams(path);
    const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
    function parseQueryParams(queryString) {
        const result = url_1.parseQueryString(queryString);
        const parameters = {
            key: result.key || "",
            bridge: result.bridge || "",
        };
        return parameters;
    }
    const queryParams = parseQueryParams(queryString);
    const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
    return result;
}
exports.parseWalletConnectUri = parseWalletConnectUri;
//# sourceMappingURL=session.js.map

/***/ }),

/***/ 44290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatQueryString = exports.parseQueryString = exports.appendToQueryString = exports.getQueryString = void 0;
const tslib_1 = __webpack_require__(16158);
const queryStringUtils = tslib_1.__importStar(__webpack_require__(17242));
function getQueryString(url) {
    const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
    const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
    return queryString;
}
exports.getQueryString = getQueryString;
function appendToQueryString(queryString, newQueryParams) {
    let queryParams = parseQueryString(queryString);
    queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
    queryString = formatQueryString(queryParams);
    return queryString;
}
exports.appendToQueryString = appendToQueryString;
function parseQueryString(queryString) {
    return queryStringUtils.parse(queryString);
}
exports.parseQueryString = parseQueryString;
function formatQueryString(queryParams) {
    return queryStringUtils.stringify(queryParams);
}
exports.formatQueryString = formatQueryString;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 4967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSilentPayload = exports.isReservedEvent = exports.isInternalEvent = exports.isJsonRpcResponseError = exports.isJsonRpcResponseSuccess = exports.isJsonRpcRequest = exports.isJsonRpcSubscription = exports.isHexString = exports.getEncoding = exports.getType = exports.isArrayBuffer = exports.isTypedArray = exports.isBuffer = exports.isEmptyArray = exports.isEmptyString = void 0;
const tslib_1 = __webpack_require__(16158);
const encoding = tslib_1.__importStar(__webpack_require__(2921));
const legacy_types_1 = __webpack_require__(97117);
function isEmptyString(value) {
    return value === "" || (typeof value === "string" && value.trim() === "");
}
exports.isEmptyString = isEmptyString;
function isEmptyArray(array) {
    return !(array && array.length);
}
exports.isEmptyArray = isEmptyArray;
function isBuffer(val) {
    return encoding.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return encoding.isTypedArray(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return encoding.isArrayBuffer(val);
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    return encoding.getType(val);
}
exports.getType = getType;
function getEncoding(val) {
    return encoding.getEncoding(val);
}
exports.getEncoding = getEncoding;
function isHexString(value, length) {
    return encoding.isHexString(value, length);
}
exports.isHexString = isHexString;
function isJsonRpcSubscription(object) {
    return typeof object.params === "object";
}
exports.isJsonRpcSubscription = isJsonRpcSubscription;
function isJsonRpcRequest(object) {
    return typeof object.method !== "undefined";
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponseSuccess(object) {
    return typeof object.result !== "undefined";
}
exports.isJsonRpcResponseSuccess = isJsonRpcResponseSuccess;
function isJsonRpcResponseError(object) {
    return typeof object.error !== "undefined";
}
exports.isJsonRpcResponseError = isJsonRpcResponseError;
function isInternalEvent(object) {
    return typeof object.event !== "undefined";
}
exports.isInternalEvent = isInternalEvent;
function isReservedEvent(event) {
    return legacy_types_1.RESERVED_EVENTS.includes(event) || event.startsWith("wc_");
}
exports.isReservedEvent = isReservedEvent;
function isSilentPayload(request) {
    if (request.method.startsWith("wc_")) {
        return true;
    }
    if (legacy_types_1.SIGNING_METHODS.includes(request.method)) {
        return false;
    }
    return true;
}
exports.isSilentPayload = isSilentPayload;
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 9110:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
const tslib_1 = __webpack_require__(16158);
const windowGetters = tslib_1.__importStar(__webpack_require__(57351));
exports.getFromWindow = windowGetters.getFromWindow;
exports.getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;
exports.getDocumentOrThrow = windowGetters.getDocumentOrThrow;
exports.getDocument = windowGetters.getDocument;
exports.getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
exports.getNavigator = windowGetters.getNavigator;
exports.getLocationOrThrow = windowGetters.getLocationOrThrow;
exports.getLocation = windowGetters.getLocation;
exports.getCryptoOrThrow = windowGetters.getCryptoOrThrow;
exports.getCrypto = windowGetters.getCrypto;
exports.getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
exports.getLocalStorage = windowGetters.getLocalStorage;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ 17242:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(65389);
const decodeComponent = __webpack_require__(4613);
const splitOnFirst = __webpack_require__(6785);
const filterObject = __webpack_require__(28881);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ 65389:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 10651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomBytes = void 0;
const tslib_1 = __webpack_require__(7397);
const crypto_1 = tslib_1.__importDefault(__webpack_require__(6113));
const encoding_1 = __webpack_require__(2921);
function randomBytes(length) {
    const buf = crypto_1.default.randomBytes(length);
    return encoding_1.bufferToArray(buf);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 90343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80664);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 38943:
/***/ ((module) => {

module.exports      = isTypedArray
isTypedArray.strict = isStrictTypedArray
isTypedArray.loose  = isLooseTypedArray

var toString = Object.prototype.toString
var names = {
    '[object Int8Array]': true
  , '[object Int16Array]': true
  , '[object Int32Array]': true
  , '[object Uint8Array]': true
  , '[object Uint8ClampedArray]': true
  , '[object Uint16Array]': true
  , '[object Uint32Array]': true
  , '[object Float32Array]': true
  , '[object Float64Array]': true
}

function isTypedArray(arr) {
  return (
       isStrictTypedArray(arr)
    || isLooseTypedArray(arr)
  )
}

function isStrictTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

function isLooseTypedArray(arr) {
  return names[toString.call(arr)]
}


/***/ }),

/***/ 80134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n=__webpack_require__(28076),t=__webpack_require__(74609);function e(n,t){for(var e in t)n[e]=t[e];return n}function r(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function u(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function o(n){this.props=n}function i(t,e){function u(n){var t=this.props.ref,u=t==n.ref;return!u&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!u:r(this.props,n)}function o(e){return this.shouldComponentUpdate=u,n.createElement(t,e)}return o.displayName="Memo("+(t.displayName||t.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(o.prototype=new n.Component).isPureReactComponent=!0,o.prototype.shouldComponentUpdate=function(n,t){return r(this.props,n)||r(this.state,t)};var c=n.options.__b;n.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),c&&c(n)};var l="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function f(n){function t(t){var r=e({},t);return delete r.ref,n(r,t.ref||null)}return t.$$typeof=l,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var a=function(t,e){return null==t?null:n.toChildArray(n.toChildArray(t).map(e))},s={map:a,forEach:a,count:function(t){return t?n.toChildArray(t).length:0},only:function(t){var e=n.toChildArray(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:n.toChildArray},p=n.options.__e;n.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);p(n,t,e,r)};var h=n.options.unmount;function v(n,t,r){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=e({},n)).__c&&(n.__c.__P===r&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return v(n,t,r)})),n}function d(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return d(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function m(){this.__u=0,this.t=null,this.__b=null}function x(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function b(t){var e,r,u;function o(o){if(e||(e=t()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return n.createElement(r,o)}return o.displayName="Lazy",o.__f=!0,o}function _(){this.u=null,this.o=null}n.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),h&&h(n)},(m.prototype=new n.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=x(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c())};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=d(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},m.prototype.componentWillUnmount=function(){this.t=[]},m.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=v(this.__b,r,u.__O=u.__P)}this.__b=null}var o=e.__a&&n.createElement(n.Fragment,null,t.fallback);return o&&(o.__h=null),[n.createElement(n.Fragment,null,e.__a?null:t.children),o]};var y=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function g(n){return this.getChildContext=function(){return n.context},n.children}function S(t){var e=this,r=t.i;e.componentWillUnmount=function(){n.render(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),n.render(n.createElement(g,{context:e.context},t.__v),e.l)}function C(t,e){var r=n.createElement(S,{__v:t,i:e});return r.containerInfo=e,r}(_.prototype=new n.Component).__a=function(n){var t=this,e=x(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),y(t,n,r)):u()};e?e(o):o()}},_.prototype.render=function(t){this.u=null,this.o=new Map;var e=n.toChildArray(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},_.prototype.componentDidUpdate=_.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){y(n,e,t)})};var E="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,O=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,w=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,R=/[A-Z0-9]/g,j="undefined"!=typeof document,N=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function k(t,e,r){return null==e.__k&&(e.textContent=""),n.render(t,e),"function"==typeof r&&r(),t?t.__c:null}function A(t,e,r){return n.hydrate(t,e),"function"==typeof r&&r(),t?t.__c:null}n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(n.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var T=n.options.event;function F(){}function I(){return this.cancelBubble}function L(){return this.defaultPrevented}n.options.event=function(n){return T&&(n=T(n)),n.persist=F,n.isPropagationStopped=I,n.isDefaultPrevented=L,n.nativeEvent=n};var U,D={enumerable:!1,configurable:!0,get:function(){return this.class}},M=n.options.vnode;n.options.vnode=function(t){"string"==typeof t.type&&function(t){var e=t.props,r=t.type,u={};for(var o in e){var i=e[o];if(!("value"===o&&"defaultValue"in e&&null==i||j&&"children"===o&&"noscript"===r||"class"===o||"className"===o)){var c=o.toLowerCase();"defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===c?o="ondblclick":"onchange"!==c||"input"!==r&&"textarea"!==r||N(e.type)?"onfocus"===c?o="onfocusin":"onblur"===c?o="onfocusout":w.test(o)?o=c:-1===r.indexOf("-")&&O.test(o)?o=o.replace(R,"-$&").toLowerCase():null===i&&(i=void 0):c=o="oninput","oninput"===c&&u[o=c]&&(o="oninputCapture"),u[o]=i}}"select"==r&&u.multiple&&Array.isArray(u.value)&&(u.value=n.toChildArray(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==r&&null!=u.defaultValue&&(u.value=n.toChildArray(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),e.class&&!e.className?(u.class=e.class,Object.defineProperty(u,"className",D)):(e.className&&!e.class||e.class&&e.className)&&(u.class=u.className=e.className),t.props=u}(t),t.$$typeof=E,M&&M(t)};var V=n.options.__r;n.options.__r=function(n){V&&V(n),U=n.__c};var W=n.options.diffed;n.options.diffed=function(n){W&&W(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),U=null};var P={ReactCurrentDispatcher:{current:{readContext:function(n){return U.__n[n.__c].props.value}}}};function z(t){return n.createElement.bind(null,t)}function B(n){return!!n&&n.$$typeof===E}function q(t){return B(t)&&t.type===n.Fragment}function H(t){return B(t)?n.cloneElement.apply(null,arguments):t}function Z(t){return!!t.__k&&(n.render(null,t),!0)}function Y(n){return n&&(n.base||1===n.nodeType&&n)||null}var $=function(n,t){return n(t)},G=function(n,t){return n(t)},J=n.Fragment;function K(n){n()}function Q(n){return n}function X(){return[!1,K]}var nn=t.useLayoutEffect,tn=B;function en(n,e){var r=e(),o=t.useState({p:{__:r,h:e}}),i=o[0].p,c=o[1];return t.useLayoutEffect(function(){i.__=r,i.h=e,u(i.__,e())||c({p:i})},[n,r,e]),t.useEffect(function(){return u(i.__,i.h())||c({p:i}),n(function(){u(i.__,i.h())||c({p:i})})},[n]),r}var rn={useState:t.useState,useId:t.useId,useReducer:t.useReducer,useEffect:t.useEffect,useLayoutEffect:t.useLayoutEffect,useInsertionEffect:nn,useTransition:X,useDeferredValue:Q,useSyncExternalStore:en,startTransition:K,useRef:t.useRef,useImperativeHandle:t.useImperativeHandle,useMemo:t.useMemo,useCallback:t.useCallback,useContext:t.useContext,useDebugValue:t.useDebugValue,version:"17.0.2",Children:s,render:k,hydrate:A,unmountComponentAtNode:Z,createPortal:C,createElement:n.createElement,createContext:n.createContext,createFactory:z,cloneElement:H,createRef:n.createRef,Fragment:n.Fragment,isValidElement:B,isElement:tn,isFragment:q,findDOMNode:Y,Component:n.Component,PureComponent:o,memo:i,forwardRef:f,flushSync:G,unstable_batchedUpdates:$,StrictMode:J,Suspense:m,SuspenseList:_,lazy:b,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:P};Object.defineProperty(exports, "Component", ({enumerable:!0,get:function(){return n.Component}})),Object.defineProperty(exports, "Fragment", ({enumerable:!0,get:function(){return n.Fragment}})),Object.defineProperty(exports, "createContext", ({enumerable:!0,get:function(){return n.createContext}})),Object.defineProperty(exports, "createElement", ({enumerable:!0,get:function(){return n.createElement}})),Object.defineProperty(exports, "createRef", ({enumerable:!0,get:function(){return n.createRef}})),exports.Children=s,exports.PureComponent=o,exports.StrictMode=J,exports.Suspense=m,exports.SuspenseList=_,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,exports.cloneElement=H,exports.createFactory=z,exports.createPortal=C,exports["default"]=rn,exports.findDOMNode=Y,exports.flushSync=G,exports.forwardRef=f,exports.hydrate=A,exports.isElement=tn,exports.isFragment=q,exports.isValidElement=B,exports.lazy=b,exports.memo=i,exports.render=k,exports.startTransition=K,exports.unmountComponentAtNode=Z,exports.unstable_batchedUpdates=$,exports.useDeferredValue=Q,exports.useInsertionEffect=nn,exports.useSyncExternalStore=en,exports.useTransition=X,exports.version="17.0.2",Object.keys(t).forEach(function(n){"default"===n||exports.hasOwnProperty(n)||Object.defineProperty(exports,n,{enumerable:!0,get:function(){return t[n]}})});
//# sourceMappingURL=compat.js.map


/***/ }),

/***/ 80664:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 56144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */

var isTypedArray = (__webpack_require__(38943).strict)

module.exports = function typedarrayToBuffer (arr) {
  if (isTypedArray(arr)) {
    // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
    var buf = Buffer.from(arr.buffer)
    if (arr.byteLength !== arr.buffer.byteLength) {
      // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength)
    }
    return buf
  } else {
    // Pass through all other types to `Buffer.from`
    return Buffer.from(arr)
  }
}


/***/ })

};
;