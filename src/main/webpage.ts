import {Author} from "./author";

export class Webpage {
    title: string;
    author: Author;
    date: string;
    url: string;

    constructor(title: string, author: Author, date: string, url: string) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.url = url;
    }
}