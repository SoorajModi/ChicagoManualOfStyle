import {Journal2} from "./journal2";
import {CitationInterface} from "./citationInterface";

export class ElectronicJournal extends Journal2 {
    url: string;

    constructor(citation: CitationInterface, vol: string, iss: string, start: string, end: string, url: string) {
        super(citation, vol, iss, start, end);
        this.url = url;
    }

    eNote(page: string) {
        return ((this.note(page)).replace(/.$/,", ") + this.url + ".");
    }

    eBibliography() {
        return (this.bibliography() + " " + this.url + ".");
    }
}