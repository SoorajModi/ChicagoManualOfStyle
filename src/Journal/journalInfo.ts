import {JournalInfoInterface} from "./journalInfoInterface";

export class JournalInfo {
    journal: string;
    volume: string;
    issue: string;
    date: string;

    constructor(pubInfo: JournalInfoInterface) {
        this.journal = pubInfo.journal || "";
        this.volume = pubInfo.volume || "";
        this.issue = pubInfo.issue || "";
        this.date = pubInfo.date || "";
    }

    citation(): string {
        return (noPublishingInfo(this)) ? "" : createJournalCitation(this.journal, this.volume, this.issue, this.date);
    }
}

function noPublishingInfo(info: JournalInfo): boolean {
    return (info.journal == "" && info.volume == "" && info.issue == "" && info.date == "");
}

function createJournalCitation(title: string, vol: string, iss: string, date: string): string {
    return titleCitation(title, vol) + volumeCitation(vol, iss, date) + issueCitation(iss) + dateCitation(date) + ":";
}

function titleCitation(title: string, vol: string): string {
    return (title != "" && vol != "") ? title + " " : title;
}

function volumeCitation(vol: string, iss: string, date: string): string {
    return (iss != "" || date != "") ? vol + "," : vol;
}

function issueCitation(iss: string): string {
    return (iss != "") ? " no. " + iss : iss;
}

function dateCitation(date: string): string {
    return (date != "") ? " (" + date + ")" : date;
}
