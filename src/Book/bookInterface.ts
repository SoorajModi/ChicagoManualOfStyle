import AuthorList from '../Author/authorList';
import { BookInfoInterface } from './bookInfoInterface';

export interface BookInterface {
    authorList?: Array<{ first: string, last: string }>;
    editor?: Array<{ first: string, last: string }>;
    title: string;
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    url?: string;
}

export function createBook(info: BookInterface): {title: string, authorList: AuthorList, editor: AuthorList, info: BookInfoInterface} {
  return {
    title: info.title,
    authorList: new AuthorList(info.authorList || []),
    editor: new AuthorList(info.editor || []),
    info: {
      publisher: info.publisher || '',
      placeOfPublication: info.placeOfPublication || '',
      yearOfPublication: info.yearOfPublication || '',
    },
  };
}
