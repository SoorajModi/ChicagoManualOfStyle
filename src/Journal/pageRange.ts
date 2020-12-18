export {};

function getRange(start: string, end?: string): string {
    return (start == end) ? start : (start + "-" + end);
}

function isInRange(numStr: string, start: string, end?: string): boolean {
    return checkRange(Number(start), Number(end), Number(numStr));
}

function checkRange(start: number, end: number, num: number): boolean {
    return (isNotANumber(start, end, num)) ? true : (num >= start && num <= end);
}

function isNotANumber(start: number, end: number, num: number): boolean {
    return (isNaN(num) || isNaN(start) || isNaN(end))
}

module.exports = {
    getRange: getRange,
    isInRange: isInRange
};