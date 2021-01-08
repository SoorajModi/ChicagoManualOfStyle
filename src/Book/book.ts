import { bookInfoNote, bookInfoBibliography } from './bookInfo';
import { BookInterface, createBook, validBookInterface } from './bookInterface';

export function bookNote(info: BookInterface, page: string): string {
  let citation = createBook(info);

  if (citation.url !== '') {
    return (`${(standardBookNote(citation, page)).replace(/.$/, ', ') + citation.url}.`);
  }

  return standardBookNote(citation, page);
}

function standardBookNote(citation: validBookInterface, page: string): string {
  if (citation.editors.length() > 0) {
    if (citation.authors.length() === 0) {
      return (`${citation.editors.noAuthorsNote() + citation.title + bookInfoNote(citation.info)}, ${page}.`);
    }
    return `${citation.authors.note() + citation.title + citation.editors.editorNote() + bookInfoNote(citation.info)}, ${page}.`;
  }

  return (`${citation.authors.note() + citation.title + bookInfoNote(citation.info)}, ${page}.`);
}

export function bookShortNote(info: BookInterface, page: string): string {
  return `${getShortNotePrefix(info) + page}.`;
}

export function bookBibliography(info: BookInterface): string {
  let citation = createBook(info);

  if (citation.url !== '') {
    return (`${standardBookBibliography(citation)} ${citation.url}.`);
  }

  return (`${standardBookBibliography(citation)}`);
}

function standardBookBibliography(citation: validBookInterface): string {
  if (citation.editors.length() > 0) {
    if (citation.authors.length() === 0) {
      return (`${citation.editors.noAuthorBibliography() + citation.title}.${bookInfoBibliography(citation.info)}`);
    }
    return (`${citation.authors.bibliography() + citation.title}.${citation.editors.editorBibliography(citation.info.edition || '')}${bookInfoBibliography(citation.info)}`);
  }

  return (`${citation.authors.bibliography() + citation.title}.${bookInfoBibliography(citation.info)}`);
}

export function bookNoteList(info: BookInterface, pages: string[]): string[] {
  let notes: string[] = [];

  if (pages.length > 0) {
    notes.push(bookNote(info, pages[0]));

    for (let i = 1; i < pages.length; i++) {
      notes.push(bookShortNote(info, pages[i]));
    }
  }

  return notes;
}

export function eBookBibliography(info: BookInterface, url: string): string {
  return (`${bookBibliography(info)} ${url}.`);
}

function getShortNotePrefix(info: BookInterface): string {
  let citation = createBook(info);

  if (citation.authors.authors.length > 0) {
    return (`${citation.authors.authors[0].last}, `);
  } if (citation.editors.authors.length > 0) {
    return (`${citation.editors.authors[0].last}, `);
  }

  return (`${citation.title}, `);
}
