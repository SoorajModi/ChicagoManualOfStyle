import {CitationInterface} from "../citationInterface";
import {AuthorList} from "../Author/authorList";
import {BookInfo} from "./bookInfo";

export class Book {
    title: string;
    authorList: AuthorList;
    publishingInfo: BookInfo;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.publishingInfo = new BookInfo({publisher: citation.publisher,
            placeOfPublication: citation.placeOfPublication, yearOfPublication: citation.yearOfPublication});
        this.authorList = new AuthorList(citation.authorList || []);
    }

    note(page: string): string {
        return (this.authorList.authorsNote() + this.title + " " + this.publishingInfo.note() + ", " + page + ".");
    }

    bibliography(): string {
        return (this.authorList.authorsBibliography() + this.title + ". " + this.publishingInfo.bibliography());
    }

    eNote(page :string, url: string): string {
        return ((this.note(page)).replace(/.$/,", ") + url + ".");
    }

    eBibliography(url: string): string {
        return (this.bibliography() + " " + url + ".");
    }
}