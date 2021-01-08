import AuthorList from '../Author/authorList';
import { BookInfoInterface } from './bookInfoInterface';
import EditorList from '../Author/editorList';

export interface BookInterface {
    authorList?: Array<{ first: string, last: string }>;
    editor?: Array<{ first: string, last: string }>;
    title: string;
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    edition?: string;
    url?: string;
}

export interface validBookInterface {
    title: string;
    authorList: AuthorList;
    editor: EditorList;
    url: string,
    info: BookInfoInterface;
}

export function createBook(info: BookInterface): validBookInterface {
  return {
    title: info.title,
    authorList: new AuthorList(info.authorList || []),
    editor: new EditorList(info.editor || []),
    url: info.url || '',
    info: {
      edition: info.edition || '',
      publisher: info.publisher || '',
      placeOfPublication: info.placeOfPublication || '',
      yearOfPublication: info.yearOfPublication || '',
    },
  };
}
