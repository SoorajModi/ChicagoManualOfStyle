import Authors from '../Author/authors';
import { BookInfoInterface } from './bookInfoInterface';
import Editors from '../Author/editors';

export interface BookInterface {
    authors?: Array<{ first: string, last: string }>;
    editors?: Array<{ first: string, last: string }>;
    title: string;
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    edition?: string;
    url?: string;
}

export interface validBookInterface {
    title: string;
    authors: Authors;
    editors: Editors;
    url: string,
    info: BookInfoInterface;
}

export function createBook(info: BookInterface): validBookInterface {
  return {
    title: info.title,
    authors: new Authors(info.authors || []),
    editors: new Editors(info.editors || []),
    url: info.url || '',
    info: {
      edition: info.edition || '',
      publisher: info.publisher || '',
      placeOfPublication: info.placeOfPublication || '',
      yearOfPublication: info.yearOfPublication || '',
    },
  };
}
