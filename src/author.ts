export class Author {
    first: string;
    last: string;

    constructor(first?: string, last?: string) {
        this.first = first || "";
        this.last = last || "";
    }

    noteString() {
        if (this.isEmpty()) {
            return "";
        }
        return (this.first + " " + this.last + ", ");
    }

    bibliographyString() {
        if (this.isEmpty()) {
            return "";
        }
        return (this.last + ", " + this.first + ". ");
    }

    isEmpty() {
        return (this.first === "" && this.last === "");
    }
}