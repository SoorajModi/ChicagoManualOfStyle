import {BookInfoInterface} from "./bookInfoInterface";

const {createBook} = require("./bookInterface");
const {bookInfoNote, bookInfoBibliography} = require("./bookInfo");

// export class Book {
//     title: string;
//     authorList: AuthorList;
//     publishingInfo: BookInfo;
//
//     constructor(book: BookInterface) {
//         this.title = book.title;
//         this.publishingInfo = new BookInfo({publisher: book.publisher,
//             placeOfPublication: book.placeOfPublication, yearOfPublication: book.yearOfPublication});
//         this.authorList = new AuthorList(book.authorList || []);
//     }
//
//     note(page: string): string {
//         return (this.authorList.note() + this.title + " " + this.publishingInfo.note() + ", " + page + ".");
//     }
//
//     bibliography(): string {
//         return (this.authorList.bibliography() + this.title + ". " + this.publishingInfo.bibliography());
//     }
//
//     eNote(page: string, url: string): string {
//         return ((this.note(page)).replace(/.$/,", ") + url + ".");
//     }
//
//     eBibliography(url: string): string {
//         return (this.bibliography() + " " + url + ".");
//     }
// }

function bookNote(info: BookInfoInterface, page: string) {
    let citation = createBook(info);
    return (citation.authorList.note() + citation.title + " " + bookInfoNote(citation.info) + ", " + page + ".");
}

function bookBibliography(info: BookInfoInterface): string {
    let citation = createBook(info);
    return (citation.authorList.bibliography() + citation.title + ". " + bookInfoBibliography(citation.info));
}

function eBookNote(info: BookInfoInterface, page: string, url: string) {
    return ((bookNote(info, page)).replace(/.$/,", ") + url + ".");
}

function eBookBibliography(info: BookInfoInterface, url: string) {
    return (bookBibliography(info) + " " + url + ".");
}

module.exports = {
    bookNote: bookNote,
    bookBibliography: bookBibliography,
    eBookNote: eBookNote,
    eBookBibliography: eBookBibliography
};