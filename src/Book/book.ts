import { bookInfoNote, bookInfoBibliography, isBookInfoEmpty } from './bookInfo';
import { BookInterface, createBook } from './bookInterface';
import { BookInfoInterface } from './bookInfoInterface';
import {validatePages} from "../noteUtility";

export function bookNote(info: BookInterface, page: {page: string}): string {
  let citation = createBook(info);
  return (`${citation.authorList.note() + citation.title + addSpaceIfInfoPresent(citation.info) + bookInfoNote(citation.info)}, ${page.page}.`);
}

export function bookShortNote(info: BookInterface, page: {page: string}): string {
  return `${getShortNotePrefix(info) + page.page}.`;
}

export function bookBibliography(info: BookInterface): string {
  let citation = createBook(info);
  return (`${citation.authorList.bibliography() + citation.title}. ${bookInfoBibliography(citation.info)}`).trim();
}

export function bookNoteList(info: BookInterface, pages: Array<{page: string}>): string[] {
  const validPages: Array<{page: string}> = validatePages(pages);
  let notes: string[] = [];

  if (validPages.length > 0) {
    notes.push(bookNote(info, validPages[0]));

    for (let i = 1; i < validPages.length; i++) {
      notes.push(bookShortNote(info, validPages[i]));
    }
  }

  return notes;
}

export function eBookNote(info: BookInterface, page: {page: string}, url: string): string {
  return (`${(bookNote(info, page)).replace(/.$/, ', ') + url}.`);
}

export function eBookNoteList(info: BookInterface, pages: Array<{page: string}>, url: string): string[] {
  const validPages: Array<{page: string}> = validatePages(pages);
  let notes: string[] = [];

  for (let page of validPages) {
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
