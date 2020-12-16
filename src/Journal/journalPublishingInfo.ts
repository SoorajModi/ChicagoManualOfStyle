import {PublishingInfoInterface} from "./publishingInfoInterface";

export class JournalPublishingInfo {
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
        if (this.journal == "" && this.volume == "" && this.issue == "" && this.date == "") return "";
        return createJournalCitation(this.journal, this.volume, this.issue, this.date);
    }
}

function createJournalCitation(title: string, vol: string, iss: string, date: string) {
    return journalTitleCitation(title, vol) + journalVolumeCitation(vol, iss, date) + journalIssueCitation(iss) +
        journalDateCitation(date) + ":";
}

function journalTitleCitation(title: string, vol: string) {
    return (title != "" && vol != "") ? title + " " : title;
}

function journalVolumeCitation(vol: string, iss: string, date: string) {
    return (iss != "" || date != "") ? vol + "," : vol;
}

function journalIssueCitation(iss: string) {
    return (iss != "") ? " no. " + iss : iss;
}

function journalDateCitation(date: string) {
    return (date != "") ? " (" + date + ")": date;
}
