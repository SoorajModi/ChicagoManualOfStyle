import {AuthorList} from "../Author/authorList";
import {JournalInfo} from "./journalInfo";
import {PageRange} from "./pageRange";
import {JournalInterface} from "./journalInterface";

export class Journal {
    title: string;
    authorList: AuthorList;
    publishingInfo: JournalInfo;
    pageRange: PageRange;

    constructor(journal: JournalInterface) {
        this.title = journal.title;
        this.authorList = new AuthorList(journal.authorList || []);
        this.publishingInfo = new JournalInfo({
            publisher: journal.publisher,
            yearOfPublication: journal.yearOfPublication,
            volume: journal.volume,
            issue: journal.issue
        });
        this.pageRange = new PageRange(journal.startRange || "", journal.endRange);
    }

    note(page: string): string {
        return this.authorList.note() + "\"" + this.title + ",\" " + this.publishingInfo.citation() + " " + page + ".";
    }

    bibliography(): string {
        return this.authorList.bibliography() + "\"" + this.title + ".\" " + this.publishingInfo.citation() + " " + this.pageRange.getRange() + ".";
    }

    eNote(page: string, url: string): string {
        return ((this.note(page)).replace(/.$/, ", ") + url + ".");
    }

    eBibliography(url: string): string {
        return (this.bibliography() + " " + url + ".");
    }
}