import { bookInfoNote, bookInfoBibliography } from './bookInfo';
import { BookInterface, createBook } from './bookInterface';
import AuthorList from '../Author/authorList';

export function bookNote(info: BookInterface, page: string): string {
  let citation = createBook(info);

  if (citation.authorList.authors.length === 0 && citation.editor.authors.length > 0) {
    return (`${editorNameNote(citation.editor) + citation.title + bookInfoNote(citation.info)}, ${page}.`);
  }

  return (`${citation.authorList.note() + citation.title + bookInfoNote(citation.info)}, ${page}.`);
}

export function bookShortNote(info: BookInterface, page: string): string {
  return `${getShortNotePrefix(info) + page}.`;
}

export function bookBibliography(info: BookInterface): string {
  let citation = createBook(info);

  if (citation.authorList.authors.length === 0 && citation.editor.authors.length > 0) {
    return (`${editorNameBibliography(citation.editor) + citation.title}.${bookInfoBibliography(citation.info)}`).trim();
  }

  return (`${citation.authorList.bibliography() + citation.title}.${bookInfoBibliography(citation.info)}`).trim();
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

function editorNameBibliography(editors: AuthorList): string {
  return (editors.bibliography()).replace('.', ', ed.');
}

function editorNameNote(editors: AuthorList): string {
  return (`${editors.note()}ed., `);
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
