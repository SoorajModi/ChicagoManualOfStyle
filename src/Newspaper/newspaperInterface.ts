import Authors from '../Author/authors';

export interface NewspaperInterface {
    articleTitle: string;
    newspaperTitle: string;
    date: string;
    authors?: Array<{first: string, last: string}>;
    edition?: string;
    url?: string;
}

export interface validNewspaperInterface {
    articleTitle: string;
    newspaperTitle: string;
    authors: Authors;
    date: string;
    edition: string;
    url: string;
}

export function createNewspaper(info: NewspaperInterface): validNewspaperInterface {
  return {
    articleTitle: info.articleTitle,
    newspaperTitle: info.newspaperTitle,
    authors: new Authors(info.authors || []),
    date: info.date,
    edition: info.edition || '',
    url: info.url || '',
  };
}
