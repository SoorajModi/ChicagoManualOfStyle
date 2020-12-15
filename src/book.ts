import {CitationInterface} from "./citationInterface";
import {AuthorList} from "./authorList";

export class Book {
    title: string;
    authorList: AuthorList;
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.publisher = citation.publisher || "";
        this.placeOfPublication = citation.placeOfPublication || "";
        this.yearOfPublication = citation.yearOfPublication || "";
        this.authorList = new AuthorList(citation.authorList || []);
    }

    note(page: string) {
        return (this.authorList.authorListNote() + this.title + " (" + this.placeOfPublication + ": " +
            this.publisher + ", " + this.yearOfPublication + "), " + page + ".");
    }

    bibliography() {
        return (this.authorList.authorListBibliography() + this.title + ". " + this.placeOfPublication + ": "
            + this.publisher + ", " + this.yearOfPublication + ".");
    }
}