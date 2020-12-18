import {AuthorList} from "../Author/authorList";
import {BookInfo} from "./bookInfo";
import {BookInterface} from "./bookInterface";

export class Book {
    title: string;
    authorList: AuthorList;
    publishingInfo: BookInfo;

    constructor(book: BookInterface) {
        this.title = book.title;
        this.publishingInfo = new BookInfo({publisher: book.publisher,
            placeOfPublication: book.placeOfPublication, yearOfPublication: book.yearOfPublication});
        this.authorList = new AuthorList(book.authorList || []);
    }

    note(page: string): string {
        return (this.authorList.note() + this.title + " " + this.publishingInfo.note() + ", " + page + ".");
    }

    bibliography(): string {
        return (this.authorList.bibliography() + this.title + ". " + this.publishingInfo.bibliography());
    }

    eNote(page: string, url: string): string {
        return ((this.note(page)).replace(/.$/,", ") + url + ".");
    }

    eBibliography(url: string): string {
        return (this.bibliography() + " " + url + ".");
    }
}