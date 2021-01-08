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
  if (citation.editor.length() > 0) {
    if (citation.authorList.length() === 0) {
      return (`${citation.editor.noAuthorsNote() + citation.title + bookInfoNote(citation.info)}, ${page}.`);
    }
    return `${citation.authorList.note() + citation.title + citation.editor.editorNote() + bookInfoNote(citation.info)}, ${page}.`;
  }

  return (`${citation.authorList.note() + citation.title + bookInfoNote(citation.info)}, ${page}.`);
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
  if (citation.editor.length() > 0) {
    if (citation.authorList.length() === 0) {
      return (`${citation.editor.noAuthorBibliography() + citation.title}.${bookInfoBibliography(citation.info)}`);
    }
    return (`${citation.authorList.bibliography() + citation.title}.${citation.editor.editorBibliography(citation.info.edition || '')}${bookInfoBibliography(citation.info)}`);
  }

  return (`${citation.authorList.bibliography() + citation.title}.${bookInfoBibliography(citation.info)}`);
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

  if (citation.authorList.authors.length > 0) {
    return (`${citation.authorList.authors[0].last}, `);
  } if (citation.editor.authors.length > 0) {
    return (`${citation.editor.authors[0].last}, `);
  }

  return (`${citation.title}, `);
}
