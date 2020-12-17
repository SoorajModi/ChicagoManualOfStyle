export class PageRange {
    start: string;
    end: string;

    constructor(range: {start: string, end?: string}) {
        this.start = range.start;
        this.end = range.end || range.start;
    }

    getRange() {
        return (this.start == this.end) ? this.start : (this.start + "-" + this.end);
    }

    isInRange(numStr: string) {
        return checkRange(Number(this.start), Number(this.end), Number(numStr));
    }
}

function checkRange(start: number, end: number, num: number) {
    return (isNaN(num) || isNaN(start) || isNaN(end)) ? true : (num >= start && num <= end);
}