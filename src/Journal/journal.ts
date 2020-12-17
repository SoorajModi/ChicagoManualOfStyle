import {AuthorList} from "../Author/authorList";
import {JournalInfo} from "./journalInfo";
import {CitationInterface} from "../citationInterface";
import {PageRange} from "./pageRange";

export class Journal {
    title: string;
    authorList: AuthorList;
    publishingInfo: JournalInfo;
    pageRange: PageRange;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.authorList = new AuthorList(citation.authorList || []);
        this.publishingInfo = new JournalInfo({
            publisher: citation.publisher,
            yearOfPublication: citation.yearOfPublication,
            volume: citation.volume,
            issue: citation.issue
        });
        this.pageRange = new PageRange(citation.startRange || "", citation.endRange);
    }

    note(page: string): string {
        return this.authorList.authorsNote() + "\"" + this.title + ",\" " + this.publishingInfo.citation() + " " + page + ".";
    }

    bibliography(): string {
        return this.authorList.authorsBibliography() + "\"" + this.title + ".\" " + this.publishingInfo.citation() + " " + this.pageRange.getRange() + ".";
    }

    eNote(page: string, url: string): string {
        return ((this.note(page)).replace(/.$/, ", ") + url + ".");
    }

    eBibliography(url: string): string {
        return (this.bibliography() + " " + url + ".");
    }
}