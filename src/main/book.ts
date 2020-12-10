export class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    str() {
        return "Title is " + this.title;
    }
}
