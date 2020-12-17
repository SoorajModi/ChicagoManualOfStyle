import {CitationInterface} from "../citationInterface";
import {AuthorList} from "../Author/authorList";

export class Webpage {
    title: string;
    authorList: AuthorList;
    nameOfSite: string;
    publisher: string;
    date: string;
    url: string;

    constructor(citation: CitationInterface, website: string, date: string, url: string) {
        this.title = citation.title;
        this.authorList = new AuthorList(citation.authorList || []);
        this.publisher = citation.publisher || "";
        this.nameOfSite = website;
        this.date = date;
        this.url = url;
    }

    note(): string {
        return (this.authorList.authorsNote() + "\"" + this.title + ",\" " + this.nameOfSite + ", " + this.publisher + ", " +
            this.date + ", " + this.url + ".");
    }

    bibliography(): string {
        return (this.authorList.authorsBibliography() + "\"" + this.title + ".\" " + this.nameOfSite + ". " + this.publisher + ", " +
            this.date + ". " + this.url + ".");
    }
}