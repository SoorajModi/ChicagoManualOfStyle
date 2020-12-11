import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Webpage {
    title: string;
    author: Author;
    publisher: string;
    date: string;
    url: string;

    constructor(citation: CitationInterface, date: string, url: string) {
        this.title = citation.title;
        this.author = citation.author || new Author("", "");
        this.publisher = citation.publisher || "";
        this.date = date;
        this.url = url;
    }
}