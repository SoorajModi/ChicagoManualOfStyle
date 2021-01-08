import AuthorList from '../Author/authorList';

export interface NewspaperInterface {
    articleTitle: string;
    newspaperTitle: string;
    date: string;
    authorList?: Array<{first: string, last: string}>;
    edition?: string;
    url?: string;
}

export interface validNewspaperInterface {
    articleTitle: string;
    newspaperTitle: string;
    authorList: AuthorList;
    date: string;
    edition: string;
    url: string;
}

export function createNewspaper(info: NewspaperInterface): validNewspaperInterface {
  return {
    articleTitle: info.articleTitle,
    newspaperTitle: info.newspaperTitle,
    authorList: new AuthorList(info.authorList || []),
    date: info.date,
    edition: info.edition || '',
    url: info.url || '',
  };
}
