declare function A1Notation(
  rowNum: number,
  colNum: number,
  is1Based?: boolean
): string

declare function A1Notation(
  address: string,
  is1Based?: boolean
): { r: number; c: number }

export = A1Notation;
