import {CitationInterface} from "./citationInterface";
import {AuthorList} from "./authorList";
import {PublishingInfo} from "./publishingInfo";

export class Book {
    title: string;
    authorList: AuthorList;
    publishingInfo: PublishingInfo;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.publishingInfo = new PublishingInfo({publisher: citation.publisher,
            placeOfPublication: citation.placeOfPublication, yearOfPublication: citation.yearOfPublication});
        this.authorList = new AuthorList(citation.authorList || []);
    }

    note(page: string) {
        return (this.authorList.authorsNote() + this.title + " " + this.publishingInfo.bookNote() + ", " + page + ".");
    }

    bibliography() {
        return (this.authorList.authorsBibliography() + this.title + ". " + this.publishingInfo.bookBibliography());
    }

    eNote(page :string, url: string) {
        return ((this.note(page)).replace(/.$/,", ") + url + ".");
    }

    eBibliography(url: string) {
        return (this.bibliography() + " " + url + ".");
    }
}