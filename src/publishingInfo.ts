import {PublishingInfoInterface} from "./publishingInfoInterface";

export class PublishingInfo {
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(publishingInfo: PublishingInfoInterface) {
        this.publisher = publishingInfo.publisher || "";
        this.placeOfPublication = publishingInfo.placeOfPublication || "";
        this.yearOfPublication = publishingInfo.yearOfPublication || "";
    }

    bookNote() {
        if (this.publisher == "" && this.placeOfPublication == "" && this.yearOfPublication == "") return "";

        return "(" + createBookCitation({
            publisher: this.publisher,
            placeOfPublication: this.placeOfPublication,
            yearOfPublication: this.yearOfPublication
        }) + ")";
    }

    bookBibliography() {
        if (this.publisher == "" && this.placeOfPublication == "" && this.yearOfPublication == "") return "";

        return createBookCitation({
            publisher: this.publisher,
            placeOfPublication: this.placeOfPublication,
            yearOfPublication: this.yearOfPublication
        }) + ".";
    }
}

function createBookCitation(publishingInfo: PublishingInfoInterface) {
    let bib = "";

    if (publishingInfo.placeOfPublication != "") {
        bib += publishingInfo.placeOfPublication;
        if (publishingInfo.publisher != "" || publishingInfo.yearOfPublication != "") {
            bib += ": ";
        }
    }

    if (publishingInfo.publisher != "") {
        bib += publishingInfo.publisher;
        if (publishingInfo.yearOfPublication != "") {
            bib += ", ";
        }
    }

    if (publishingInfo.yearOfPublication != "") {
        bib += publishingInfo.yearOfPublication;
    }

    return bib;
}
