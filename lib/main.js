"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alphabet2Num(alphabets) {
    var res = 0;
    var digit = 0;
    for (var c = void 0, i = alphabets.length - 1; i >= 0; i -= 1) {
        c = alphabets.charCodeAt(i) - 64;
        res += digit === 0 ? c : c * Math.pow(26, digit);
        digit += 1;
    }
    return res - 1;
}
function num2Alphabet(num) {
    var i = num + 1;
    var res = '';
    while (i > 0) {
        i -= 1;
        res = String.fromCharCode(65 + i % 26) + res;
        i = Math.floor(i / 26);
    }
    return res;
}
function addr2Rc(addr) {
    var md = addr.match(/^([A-Z]+)(\d+)$/);
    if (!md) {
        throw new Error('invalid format detected');
    }
    return {
        r: +md[2] - 1,
        c: alphabet2Num(md[1]),
    };
}
function rc2Addr(r, c) {
    return num2Alphabet(c) + (r + 1);
}
function a1Notation(a, b, c) {
    if (typeof b === 'number') {
        var s = c ? -1 : 0;
        return rc2Addr(a + s, b + s);
    }
    var res = addr2Rc(a);
    if (b === true) {
        res.r += 1;
        res.c += 1;
    }
    return res;
}
exports.a1Notation = a1Notation;
//# sourceMappingURL=main.js.map