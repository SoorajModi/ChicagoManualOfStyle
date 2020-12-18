import {AuthorList} from "../Author/authorList";
import {WebpageInterface} from "./webpageInterface";

export class Webpage {
    title: string;
    authorList: AuthorList;
    nameOfSite: string;
    publisher: string;
    date: string;
    url: string;

    constructor(webpage: WebpageInterface) {
        this.title = webpage.title;
        this.authorList = new AuthorList(webpage.authorList || []);
        this.publisher = webpage.publisher || "";
        this.nameOfSite = webpage.nameOfSite;
        this.date = webpage.date || new Date().toDateString();
        this.url = webpage.url;
    }

    note(): string {
        return this.authorList.note() + "\"" + this.title + ",\" " + this.nameOfSite + ", " + publisherCitation(this.publisher) + this.date + ", " + this.url + ".";
    }

    bibliography(): string {
        return this.authorList.bibliography() + "\"" + this.title + ".\" " + this.nameOfSite + ". " + publisherCitation(this.publisher) + this.date + ". " + this.url + ".";
    }
}

function publisherCitation(publisher: string): string {
    return (publisher == "") ? publisher : publisher + ", ";
}