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

export function createBook(info: BookInterface): {title: string, authorList: AuthorList, editor: EditorList, info: BookInfoInterface} {
  return {
    title: info.title,
    authorList: new AuthorList(info.authorList || []),
    editor: new EditorList(info.editor || []),
    info: {
      edition: info.edition || '',
      publisher: info.publisher || '',
      placeOfPublication: info.placeOfPublication || '',
      yearOfPublication: info.yearOfPublication || '',
    },
  };
}
