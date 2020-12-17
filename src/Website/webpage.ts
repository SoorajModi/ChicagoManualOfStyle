import {AuthorList} from "../Author/authorList";
import {WebpageInterface} from "./webpageInterface";

export class Webpage {
    title: string;
    authorList: AuthorList;
    nameOfSite: string;
    publisher: string;
    date: string;
    url: string;

    constructor(webpage: WebpageInterface, website: string, date: string, url: string) {
        this.title = webpage.title;
        this.authorList = new AuthorList(webpage.authorList || []);
        this.publisher = webpage.publisher || "";
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