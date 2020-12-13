import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Book {
    title: string;
    author: Author;
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.author = citation.author || new Author();
        this.publisher = citation.publisher || "";
        this.placeOfPublication = citation.placeOfPublication || "";
        this.yearOfPublication = citation.yearOfPublication || "";
    }

    note(page: string) {
        return (this.author.noteString() + this.title + " (" + this.placeOfPublication + ": " +
            this.publisher + ", " + this.yearOfPublication + "), " + page + ".");
    }

    bibliography() {
        return (this.author.bibliographyString() + this.title + ". " + this.placeOfPublication + ": "
            + this.publisher + ", " + this.yearOfPublication + ".");
    }
}