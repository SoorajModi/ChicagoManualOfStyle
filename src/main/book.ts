import {Author} from "./author";

export class Book {
    title: string;
    author: Author;
    publisher: string;
    placeOfPublication: string;

    constructor(title: string, author: Author, publisher: string, pop: string) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.placeOfPublication = pop;
    }
}