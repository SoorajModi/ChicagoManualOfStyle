import {Periodical} from "./periodical";
import {Author} from "./author";

export class Journal extends Periodical {
    volume: string;
    issue: string;
    startPage: string;
    endPage: string;

    constructor(title: string, author: Author, pub: string, vol: string, iss: string, start: string, end: string, year: string) {
        super(title, author, pub, year);
        this.volume = vol;
        this.issue = iss;
        this.startPage = start;
        this.endPage = end;
    }
}