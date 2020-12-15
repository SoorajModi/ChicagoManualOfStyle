export class Author {
    first: string;
    last: string;

    constructor(first?: string, last?: string) {
        this.first = first || "";
        this.last = last || "";
    }

    noteString() {
        return (this.isEmpty()) ? "" : (this.first + " " + this.last + ", ");
    }

    bibliographyString() {
        return this.isEmpty() ? "" : (this.last + ", " + this.first + ". ");
    }

    isEmpty() {
        return (this.first === "" && this.last === "");
    }
}