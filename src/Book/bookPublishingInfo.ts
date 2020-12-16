import {PublishingInfoInterface} from "../Journal/publishingInfoInterface";

export class BookPublishingInfo {
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(publishingInfo: PublishingInfoInterface) {
        this.publisher = publishingInfo.publisher || "";
        this.placeOfPublication = publishingInfo.placeOfPublication || "";
        this.yearOfPublication = publishingInfo.yearOfPublication || "";
    }

    note() {
        if (this.publisher == "" && this.placeOfPublication == "" && this.yearOfPublication == "") return "";
        return "(" + createBookCitation(this.publisher, this.placeOfPublication, this.yearOfPublication) + ")";
    }

    bibliography() {
        if (this.publisher == "" && this.placeOfPublication == "" && this.yearOfPublication == "") return "";
        return createBookCitation(this.publisher, this.placeOfPublication, this.yearOfPublication) + ".";
    }
}

function createBookCitation(pub: string, pop: string, year: string) {
    return popBookCitation(pop, pub, year) + pubBookCitation(pub, year) + year;
}

function popBookCitation(pop: string, pub: string, year: string) {
    if (pop == "") return pop;
    return (pub != "" || year != "") ? (pop + ": ") : pop;
}

function pubBookCitation(pub: string, year: string) {
    if (pub == "") return pub;
    return (year != "") ? (pub + ", ") : pub;
}
