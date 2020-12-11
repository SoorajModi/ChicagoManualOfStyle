import {Periodical} from "./periodical";
import {CitationInterface} from "./citationInterface";

export class Journal extends Periodical {
    volume: string;
    issue: string;
    startPage: string;
    endPage: string;

    constructor(citation: CitationInterface, vol: string, iss: string, start: string, end: string) {
        super(citation);
        this.volume = vol;
        this.issue = iss;
        this.startPage = start;
        this.endPage = end;
    }
}