import {AuthorList} from "../Author/authorList";
import {JournalPublishingInfo} from "./journalPublishingInfo";
import {CitationInterface} from "../citationInterface";

export class Journal {
    title: string;
    authorList: AuthorList;
    publishingInfo: JournalPublishingInfo;
    pageRange: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.authorList = new AuthorList(citation.authorList || []);
        this.publishingInfo = new JournalPublishingInfo({
            publisher: citation.publisher,
            yearOfPublication: citation.yearOfPublication, volume: citation.volume, issue: citation.issue
        });
        this.pageRange = citation.pageRange || "";
    }

    note(page: string) {
        return this.authorList.authorsNote() + "\"" + this.title + ",\" " + this.publishingInfo.citation() + " " + page + ".";
    }

    bibliography() {
        return this.authorList.authorsBibliography() + "\"" + this.title + ".\" " + this.publishingInfo.citation() + " " + this.pageRange + ".";
    }

    eNote(page: string, url: string) {
        return ((this.note(page)).replace(/.$/, ", ") + url + ".");
    }

    eBibliography(url: string) {
        return (this.bibliography() + " " + url + ".");
    }
}