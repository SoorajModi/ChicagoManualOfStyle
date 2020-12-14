import {Book} from "./book";
import {CitationInterface} from "./citationInterface";

export class ElectronicBook extends Book {
    url: string;

    constructor(citation: CitationInterface, url: string) {
        super(citation);
        this.url = url;
    }

    eNote(page: string) {
        return ((this.note(page)).replace(/.$/,", ") + this.url + ".");
    }

    eBibliography() {
        return (this.bibliography() + " " + this.url + ".");
    }
}