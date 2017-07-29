function alphabet2Num(alphabets: string): number {
  let res = 0;
  let digit = 0;
  for (let c: number, i = alphabets.length - 1; i >= 0; i -= 1) {
    c = alphabets.charCodeAt(i) - 64;
    res += digit === 0 ? c : c * Math.pow(26, digit);
    digit += 1;
  }
  return res - 1;
}

function num2Alphabet(num: number): string {
  let i = num + 1;
  let res = '';
  while (i > 0) {
    i -= 1;
    res = String.fromCharCode(65 + i % 26) + res;
    i = Math.floor(i / 26);
  }
  return res;
}

function addr2Rc(addr: string): Rc {
  const md = addr.match(/^([A-Z]+)(\d+)$/);
  if (!md) {
    throw new Error('invalid format detected');
  }
  return {
    r: +md[2] - 1,
    c: alphabet2Num(md[1]),
  };
}

function rc2Addr(r: number, c: number): string {
  return num2Alphabet(c) + (r + 1);
}

export interface Rc {
  r: number;
  c: number;
}

export function a1Notation(address: string, is1Based?: boolean): Rc;
export function a1Notation(rowNum: number, colNum: number, is1Based?: boolean): string;
export function a1Notation(
  a: number | string,
  b?: number | boolean,
  c?: boolean
): Rc | string {
  if (typeof b === 'number') {
    const s = c ? -1 : 0;
    return rc2Addr((<number>a) + s, b + s);
  }
  const res = addr2Rc(<string>a);
  if (b === true) {
    res.r += 1;
    res.c += 1;
  }
  return res;
}
