export class PageRange {
    start: string;
    end: string;

    constructor(start: string, end?: string) {
        this.start = start;
        this.end = end || start;
    }

    getRange(): string {
        return (this.start == this.end) ? this.start : (this.start + "-" + this.end);
    }

    isInRange(numStr: string): boolean {
        return checkRange(Number(this.start), Number(this.end), Number(numStr));
    }
}

function checkRange(start: number, end: number, num: number): boolean {
    return (isNotANumber(start, end, num)) ? true : (num >= start && num <= end);
}

function isNotANumber(start: number, end: number, num: number): boolean {
    return (isNaN(num) || isNaN(start) || isNaN(end))
}