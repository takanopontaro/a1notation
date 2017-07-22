function alphabet2Num(alphabets) {
  let res = 0;
  let digit = 0;
  for (let c, i = alphabets.length - 1; i >= 0; i -= 1) {
    c = alphabets.charCodeAt(i) - 64;
    res += digit === 0 ? c : c * Math.pow(26, digit);
    digit += 1;
  }
  return res - 1;
}

function num2Alphabet(num) {
  let i = num + 1;
  let res = '';
  while (i > 0) {
    i -= 1;
    res = String.fromCharCode(65 + i % 26) + res;
    i = Math.floor(i / 26);
  }
  return res;
}

function addr2Rc(addr) {
  const md = addr.match(/^([A-Z]+)(\d+)$/);
  return {
    r: +md[2] - 1,
    c: alphabet2Num(md[1]),
  };
}

function rc2Addr(r, c) {
  return num2Alphabet(c) + (r + 1);
}

module.exports = function(r, c, flag) {
  if (typeof c === 'number') {
    const s = flag ? -1 : 0;
    return rc2Addr(r + s, c + s);
  }
  const res = addr2Rc(r);
  if (c === true) {
    res.r += 1;
    res.c += 1;
  }
  return res;
};
