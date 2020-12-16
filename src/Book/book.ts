import {CitationInterface} from "../citationInterface";
import {AuthorList} from "../Author/authorList";
import {BookPublishingInfo} from "./bookPublishingInfo";

export class Book {
    title: string;
    authorList: AuthorList;
    publishingInfo: BookPublishingInfo;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.publishingInfo = new BookPublishingInfo({publisher: citation.publisher,
            placeOfPublication: citation.placeOfPublication, yearOfPublication: citation.yearOfPublication});
        this.authorList = new AuthorList(citation.authorList || []);
    }

    note(page: string) {
        return (this.authorList.authorsNote() + this.title + " " + this.publishingInfo.note() + ", " + page + ".");
    }

    bibliography() {
        return (this.authorList.authorsBibliography() + this.title + ". " + this.publishingInfo.bibliography());
    }

    eNote(page :string, url: string) {
        return ((this.note(page)).replace(/.$/,", ") + url + ".");
    }

    eBibliography(url: string) {
        return (this.bibliography() + " " + url + ".");
    }
}