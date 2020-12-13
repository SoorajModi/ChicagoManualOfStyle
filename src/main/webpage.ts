import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Webpage {
    title: string;
    author: Author;
    nameOfSite: string;
    publisher: string;
    date: string;
    url: string;

    constructor(citation: CitationInterface, website: string, date: string, url: string) {
        this.title = citation.title;
        this.author = citation.author || new Author("", "");
        this.publisher = citation.publisher || "";
        this.nameOfSite = website;
        this.date = date;
        this.url = url;
    }

    note() {
        return (this.author.noteString() + "\"" + this.title + ",\" " + this.nameOfSite + ", " + this.publisher + ", " +
            this.date + ", " + this.url + ".");
    }

    bibliography() {
        return (this.author.bibliographyString() + "\"" + this.title + ".\" " + this.nameOfSite + ". " + this.publisher + ", " +
            this.date + ". " + this.url + ".");
    }
}