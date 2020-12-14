import {Author} from "./author";
import {CitationInterface} from "./citationInterface";

export class Book {
    title: string;
    author: Author;
    authorList: Array<Author> = [];
    publisher: string;
    placeOfPublication: string;
    yearOfPublication: string;

    constructor(citation: CitationInterface) {
        this.title = citation.title;
        this.author = citation.author || new Author();
        this.publisher = citation.publisher || "";
        this.placeOfPublication = citation.placeOfPublication || "";
        this.yearOfPublication = citation.yearOfPublication || "";
        if (citation.authorList) {
            citation.authorList.forEach(author => {
                this.authorList.push(new Author(author.first, author.last));
            });
        }
    }

    authorListNote() {
        let len: number = this.authorList.length;

        if(len == 0) {
            return "";
        } else if (len == 1) {
            return this.authorList[0].noteString();
        } else if (len == 2) {
            return this.authorList[0].noteString().trim().replace(/.$/," and ") + this.authorList[1].noteString();
        } else if (len == 3) {
            return this.authorList[0].noteString() + this.authorList[1].noteString().trim().replace(/.$/," and ") +
                this.authorList[2].noteString();
        } else if (len > 3) {
            return this.authorList[0].noteString().trim().replace(/.$/," et al., ");
        }
    }

    authorListBibliography() {
        let len: number = this.authorList.length;

        if(len == 0) {
            return "";
        } else if (len == 1) {
            return this.authorList[0].bibliographyString();
        } else if (len == 2) {
            return (this.authorList[0].bibliographyString().trim().replace(/.$/, ", and ") +
                this.authorList[1].noteString().trim().replace(/.$/, ". "));
        } else if (len == 3) {
            return (this.authorList[0].bibliographyString().trim().replace(/.$/, ", ") +
                this.authorList[1].noteString().trim().replace(/.$/, ", and ") +
                this.authorList[2].noteString().trim().replace(/.$/, ". "));
        } else if (len > 3) {
            return this.authorList[0].bibliographyString().trim().replace(/.$/, ", ") +
                this.authorList[1].noteString().trim().replace(/.$/, ", ") +
                this.authorList[2].noteString().trim().replace(/.$/, ", and ") +
                this.authorList[3].noteString().trim().replace(/.$/, ". ");
        }
    }

    note(page: string) {
        return (this.authorListNote() + this.title + " (" + this.placeOfPublication + ": " +
            this.publisher + ", " + this.yearOfPublication + "), " + page + ".");
    }

    bibliography() {
        return (this.authorListBibliography() + this.title + ". " + this.placeOfPublication + ": "
            + this.publisher + ", " + this.yearOfPublication + ".");
    }
}