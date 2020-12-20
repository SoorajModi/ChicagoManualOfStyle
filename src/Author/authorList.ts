import Author from './author';

export default class AuthorList {
    authors: Array<Author> = [];

    constructor(authorList: {first: string, last: string}[]) {
      authorList.forEach((author) => {
        this.authors.push(new Author(author.first, author.last));
      });
    }

    note(): string {
      let len: number = this.authors.length;

      if (len === 1) {
        return this.authors[0].noteString();
      } if (len === 2) {
        return twoAuthorNote(this.authors);
      } if (len === 3) {
        return threeAuthorNote(this.authors);
      } if (len > 3) {
        return threePlusAuthorNote(this.authors);
      }

      return '';
    }

    bibliography(): string {
      let len: number = this.authors.length;

      if (len === 1) {
        return this.authors[0].bibliographyString();
      } if (len > 1 && len <= 10) {
        return twoPlusAuthors(this.authors, len);
      } if (len > 10) {
        return tenPlusAuthors(this.authors);
      }

      return '';
    }
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
