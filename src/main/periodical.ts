import {Author} from "./author";

export class Periodical {
    title: string;
    author: Author;
    publisher: string;
    yearOfPublication: string;

    constructor(title: string, author: Author, pub: string, year: string) {
        this.title = title;
        this.author = author;
        this.publisher = pub;
        this.yearOfPublication = year;
    }
}