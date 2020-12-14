import {Author} from "./author";

export class AuthorList {
    authors: Array<Author> = [];

    constructor(authorList: {first: string, last: string}[]) {
        authorList.forEach(author => {
            this.authors.push(new Author(author.first, author.last));
        });
    }

    authorListNote() {
        let len: number = this.authors.length;

        if (len == 0) {
            return "";
        } else if (len == 1) {
            return this.authors[0].noteString();
        } else if (len == 2) {
            return this.authors[0].noteString().trim().replace(/.$/, " and ") + this.authors[1].noteString();
        } else if (len == 3) {
            return this.authors[0].noteString() + this.authors[1].noteString().trim().replace(/.$/, " and ") +
                this.authors[2].noteString();
        } else if (len > 3) {
            return this.authors[0].noteString().trim().replace(/.$/, " et al., ");
        }
    }

    authorListBibliography() {
        let len: number = this.authors.length;

        if (len == 0) {
            return "";
        } else if (len == 1) {
            return this.authors[0].bibliographyString();
        } else if (len > 1) {
            return twoPlusAuthors(this.authors);
        }
    }
}

function twoPlusAuthors(authorList: Array<Author>) {
    let len: number = authorList.length;
    let str = authorList[0].bibliographyString().trim().replace(/.$/, ", ");

    for (let i = 1; i < (len - 1); i++) {
        str += authorList[i].noteString().trim().replace(/.$/, ", ");
    }

    return str + "and " + authorList[len - 1].noteString().trim().replace(/.$/, ". ");
}
