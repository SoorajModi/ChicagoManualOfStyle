import {BookInfoInterface} from "./bookInfoInterface";

export class BookInfo {
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(info: BookInfoInterface) {
        this.publisher = info.publisher || "";
        this.placeOfPublication = info.placeOfPublication || "";
        this.yearOfPublication = info.yearOfPublication || "";
    }

    note(): string {
        return (isBookInfoEmpty(this)) ? "" : "(" + createBookCitation(this.publisher, this.placeOfPublication, this.yearOfPublication) + ")";
    }

    bibliography(): string {
        return (isBookInfoEmpty(this)) ? "" : createBookCitation(this.publisher, this.placeOfPublication, this.yearOfPublication) + ".";
    }
}

function isBookInfoEmpty(info: BookInfo): boolean {
    return (info.publisher == "" && info.placeOfPublication == "" && info.yearOfPublication == "");
}

function createBookCitation(pub: string, pop: string, year: string): string {
    return popBookCitation(pop, pub, year) + pubBookCitation(pub, year) + year;
}

function popBookCitation(pop: string, pub: string, year: string): string {
    if (pop == "") return pop;
    return (pub != "" || year != "") ? (pop + ": ") : pop;
}

function pubBookCitation(pub: string, year: string): string {
    if (pub == "") return pub;
    return (year != "") ? (pub + ", ") : pub;
}
