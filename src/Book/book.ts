import {bookInfoNote, bookInfoBibliography} from "./bookInfo";
import {BookInterface, createBook} from "./bookInterface";

function bookNote(info: BookInterface, page: string): string {
    let citation = createBook(info);
    return (citation.authorList.note() + citation.title + " " + bookInfoNote(citation.info) + ", " + page + ".");
}

function bookBibliography(info: BookInterface): string {
    let citation = createBook(info);
    return (citation.authorList.bibliography() + citation.title + ". " + bookInfoBibliography(citation.info));
}

function eBookNote(info: BookInterface, page: string, url: string): string {
    return ((bookNote(info, page)).replace(/.$/,", ") + url + ".");
}

function eBookBibliography(info: BookInterface, url: string): string {
    return (bookBibliography(info) + " " + url + ".");
}

export {bookNote, bookBibliography, eBookNote, eBookBibliography};
