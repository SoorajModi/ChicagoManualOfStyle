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
        let str: string = this.authorList.authorsNote() + "\"" + this.title + ",\" " + this.nameOfSite + ", " + this.publisher;

        if (this.publisher != "") {
            str += ", ";
        }

        return (str + this.date + ", " + this.url + ".");
    }

    bibliography(): string {
        let str: string = this.authorList.authorsBibliography() + "\"" + this.title + ".\" " + this.nameOfSite + ". " + this.publisher;

        if (this.publisher != "") {
            str += ", ";
        }

        return (str + this.date + ". " + this.url + ".");
    }
}