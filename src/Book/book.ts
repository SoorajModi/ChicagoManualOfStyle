import {bookInfoNote, bookInfoBibliography, isBookInfoEmpty} from './bookInfo';
import {BookInterface, createBook} from './bookInterface';
import {BookInfoInterface} from './bookInfoInterface';

export function bookNote(info: BookInterface, page: string): string {
    let citation = createBook(info);
    return (`${citation.authorList.note() + citation.title + addSpaceIfInfoPresent(citation.info) + bookInfoNote(citation.info)}, ${page}.`);
}

export function bookShortNote(info: BookInterface, page: string): string {
    return `${getShortNotePrefix(info) + page}.`;
}

export function bookBibliography(info: BookInterface): string {
    let citation = createBook(info);
    return (`${citation.authorList.bibliography() + citation.title}. ${bookInfoBibliography(citation.info)}`).trim();
}

export function bookNoteList(info: BookInterface, pages: string[]): string[] {
    let notes: string[] = [];
    if (pages.length > 0) {
        notes.push(bookNote(info, pages[0]));
        for (let i: number = 1; i < pages.length; i++) {
            notes.push(bookShortNote(info, pages[i]));
        }
    }
    return notes;
}

export function eBookNote(info: BookInterface, page: string, url: string): string {
    return (`${(bookNote(info, page)).replace(/.$/, ', ') + url}.`);
}

export function eBookNoteList(info: BookInterface, pages: string[], url: string): string[] {
    let notes: string[] = [];

    for (let page of pages) {
        notes.push(eBookNote(info, page, url));
    }

    return notes;
}

export function eBookBibliography(info: BookInterface, url: string): string {
    return (`${bookBibliography(info)} ${url}.`);
}

function addSpaceIfInfoPresent(info: BookInfoInterface): string {
    return isBookInfoEmpty(info) ? '' : ' ';
}

function getShortNotePrefix(info: BookInterface): string {
    let citation = createBook(info);
    return (citation.authorList.authors.length === 0) ? (`${citation.title}, `) : (`${citation.authorList.authors[0].last}, `);
}
