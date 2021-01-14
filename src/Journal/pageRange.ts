export function getRange(start: string, end?: string): string {
  return start === end ? start : `${start}-${end}`;
}

function isNotANumber(start: number, end: number, num: number): boolean {
  return Number.isNaN(num) || Number.isNaN(start) || Number.isNaN(end);
}

function checkRange(start: number, end: number, num: number): boolean {
  return isNotANumber(start, end, num) ? true : num >= start && num <= end;
}

export function isInRange(
  numStr: string,
  start: string,
  end?: string
): boolean {
  return checkRange(Number(start), Number(end), Number(numStr));
}
