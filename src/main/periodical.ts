import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Periodical {
    title: string;
    author: Author;
    publisher: string;
    yearOfPublication: string;

    constructor(citation: CitationInterface, year: string) {
        this.title = citation.title;
        this.author = citation.author || new Author("", "");
        this.publisher = citation.publisher || "";
        this.yearOfPublication = year;
    }
}