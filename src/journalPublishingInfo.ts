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

        let str = "";

        if (this.journal != "") {
            str += this.journal;
            if (this.volume != "") {
                str += " ";
            }
        }

        str += this.volume;
        if (this.issue != "" || this.date != "") {
            str += ",";
        }

        if (this.issue != "") {
            str += " no. " + this.issue;
        }

        if (this.date != "") {
            str += " (" + this.date + ")";
        }

        return str + ":";
    }
}