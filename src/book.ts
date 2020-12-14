import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Book {
    title: string;
    author: Author;
    authorList: Array<Author> = [];
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.author = citation.author || new Author();
        this.publisher = citation.publisher || "";
        this.placeOfPublication = citation.placeOfPublication || "";
        this.yearOfPublication = citation.yearOfPublication || "";
        if (citation.authorList) {
            citation.authorList.forEach(author => {
                this.authorList.push(new Author(author.first, author.last));
            });
        }
    }

    authorListNote() {
        let str: string = "";
        this.authorList.forEach(author => {
            str += author.noteString();
        });
        return str;
    }

    authorListBibliography() {
        let str: string = "";
        this.authorList.forEach(author => {
            str += author.bibliographyString();
        });
        return str;
    }

    note(page: string) {
        return (this.authorListNote() + this.title + " (" + this.placeOfPublication + ": " +
            this.publisher + ", " + this.yearOfPublication + "), " + page + ".");
    }

    bibliography() {
        return (this.authorListBibliography() + this.title + ". " + this.placeOfPublication + ": "
            + this.publisher + ", " + this.yearOfPublication + ".");
    }
}