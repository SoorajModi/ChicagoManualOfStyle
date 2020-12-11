export class Author {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    toString() {
        return (this.first + " " + this.last).trim();
    }

    toReverseString() {
        return this.last + ", " + this.first;
    }
}