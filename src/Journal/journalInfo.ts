import {PublishingInfoInterface} from "../publishingInfoInterface";

export class JournalInfo {
    journal: string;
    volume: string;
    issue: string;
    date: string;

    constructor(pubInfo: PublishingInfoInterface) {
        this.journal = pubInfo.publisher || "";
        this.volume = pubInfo.volume || "";
        this.issue = pubInfo.issue || "";
        this.date = pubInfo.yearOfPublication || "";
    }

    citation() {
        return (noPublishingInfo(this)) ? "" : createJournalCitation(this.journal, this.volume, this.issue, this.date);
    }
}

function noPublishingInfo(info: JournalInfo) {
    return (info.journal == "" && info.volume == "" && info.issue == "" && info.date == "");
}

function createJournalCitation(title: string, vol: string, iss: string, date: string) {
    return titleCitation(title, vol) + volumeCitation(vol, iss, date) + issueCitation(iss) + dateCitation(date) + ":";
}

function titleCitation(title: string, vol: string) {
    return (title != "" && vol != "") ? title + " " : title;
}

function volumeCitation(vol: string, iss: string, date: string) {
    return (iss != "" || date != "") ? vol + "," : vol;
}

function issueCitation(iss: string) {
    return (iss != "") ? " no. " + iss : iss;
}

function dateCitation(date: string) {
    return (date != "") ? " (" + date + ")" : date;
}
