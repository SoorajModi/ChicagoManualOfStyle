import Authors from './authors';

export default class Editors extends Authors {
  editorNote(): string {
    return `, ed. ${this.authors[0].first} ${this.authors[0].last}`;
  }

  editorBibliography(edition: string): string {
    const str = ` Edited by ${this.authors[0].first} ${this.authors[0].last}`;
    return (edition !== '') ? `${str},` : `${str}.`;
  }

  noAuthorBibliography(): string {
    return (this.bibliography()).replace('.', ', ed.');
  }

  noAuthorsNote(): string {
    return (`${this.note()}ed., `);
  }
}
