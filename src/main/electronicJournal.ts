import {Journal} from "./journal";
import {CitationInterface} from "./citationInterface";

export class ElectronicJournal extends Journal {
    url: string;

    constructor(citation: CitationInterface, vol: string, iss: string, start: string, end: string, url: string) {
        super(citation, vol, iss, start, end);
        this.url = url;
    }
}