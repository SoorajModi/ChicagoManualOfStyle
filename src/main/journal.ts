import {Author} from "./author";

export class Journal {
    title: string;
    author: Author;
    publisher: string;

    constructor(title: string, author: Author, publisher: string) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}