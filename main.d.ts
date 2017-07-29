declare function A1Notation(
  rowNum: number | string,
  colNum?: number | boolean,
  is1Based?: boolean
): string | { r: number; c: number }

export = A1Notation;
