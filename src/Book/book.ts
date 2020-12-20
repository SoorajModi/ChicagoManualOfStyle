import { bookInfoNote, bookInfoBibliography } from './bookInfo';
import { BookInterface, createBook } from './bookInterface';

export function bookNote(info: BookInterface, page: string): string {
  let citation = createBook(info);
  return (`${citation.authorList.note() + citation.title} ${bookInfoNote(citation.info)}, ${page}.`);
}

export function bookBibliography(info: BookInterface): string {
  let citation = createBook(info);
  return (`${citation.authorList.bibliography() + citation.title}. ${bookInfoBibliography(citation.info)}`);
}

export function bookNoteList(info: BookInterface, pages: string[]): string[] {
  let notes: string[] = [];

  for (let page of pages) {
    notes.push(bookNote(info, page));
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
