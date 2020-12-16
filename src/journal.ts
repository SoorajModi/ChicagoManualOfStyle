import {AuthorList} from "./authorList";
import {JournalPublishingInfo} from "./journalPublishingInfo";
import {CitationInterface} from "./citationInterface";

export class Journal {
    title: string;
    authorList: AuthorList;
    publishingInfo: JournalPublishingInfo;
    pageRange: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.authorList = new AuthorList(citation.authorList || []);
        this.publishingInfo = new JournalPublishingInfo({publisher: citation.publisher,
           yearOfPublication: citation.yearOfPublication, volume: citation.volume, issue: citation.issue});
        this.pageRange = citation.pageRange || "";
    }

    note(page: string) {
        return this.authorList.authorsNote() + "\"" + this.title + ",\" " + this.publishingInfo.citation() + " " + page + ".";
    }

    bibliography() {
        return this.authorList.authorsBibliography() + "\"" + this.title + ".\" " + this.publishingInfo.citation() + " " + this.pageRange + ".";
    }
}