import Author from './author';

export default class AuthorList {
    authors: Array<Author> = [];

    constructor(authorList: {first: string, last: string}[]) {
      authorList.forEach((author) => {
        this.authors.push(new Author(author.first, author.last));
      });
    }

    note(): string {
      let authorList: Array<Author> = validateAuthorList(this.authors);
      let len: number = authorList.length;

      return generateNote(authorList, len);
    }

    bibliography(): string {
      let authorList: Array<Author> = validateAuthorList(this.authors);
      let len: number = authorList.length;

      return generateBibliography(authorList, len);
    }
}

function generateNote(authorList: Array<Author>, len: number) {
  if (len === 1) {
    return authorList[0].noteString();
  } if (len === 2) {
    return twoAuthorNote(authorList);
  } if (len === 3) {
    return threeAuthorNote(authorList);
  } if (len > 3) {
    return threePlusAuthorNote(authorList);
  }
  return '';
}

function generateBibliography(authorList: Array<Author>, len: number) {
  if (len === 1) {
    return authorList[0].bibliographyString();
  } if (len > 1 && len <= 10) {
    return twoPlusAuthors(authorList, len);
  } if (len > 10) {
    return tenPlusAuthors(authorList);
  }
  return '';
}

function twoAuthorNote(authors: Array<Author>): string {
  return trimAndReplaceLastElement(authors[0].noteString(), ' and ') + authors[1].noteString();
}

function threeAuthorNote(authors: Array<Author>): string {
  return `${authors[0].noteString() + authors[1].noteString()}and ${authors[2].noteString()}`;
}

function threePlusAuthorNote(authors: Array<Author>): string {
  return trimAndReplaceLastElement(authors[0].noteString(), ' et al., ');
}

function twoPlusAuthors(authors: Array<Author>, len: number): string {
  let str = trimAndReplaceLastElement(authors[0].bibliographyString(), ', ');

  for (let i = 1; i < (len - 1); i++) {
    str += trimAndReplaceLastElement(authors[i].noteString(), ', ');
  }

  return `${str}and ${trimAndReplaceLastElement(authors[len - 1].noteString(), '. ')}`;
}

function tenPlusAuthors(authors: Array<Author>): string {
  let str = trimAndReplaceLastElement(authors[0].bibliographyString(), ', ');

  for (let i = 1; i < 7; i++) {
    str += trimAndReplaceLastElement(authors[i].noteString(), ', ');
  }

  return `${str}et al.`;
}

function trimAndReplaceLastElement(str: string, replaceValue: string): string {
  return str.trim().replace(/.$/, replaceValue);
}

function validateAuthorList(authors: Array<Author>): Array<Author> {
  let newAuthorList: Array<Author> = [];

  authors.forEach((author) => {
    if (author.first !== '' && author.last !== '') newAuthorList.push(author);
  });

  return newAuthorList;
}
