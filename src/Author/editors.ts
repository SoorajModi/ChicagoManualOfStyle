import Authors from './authors';

export default class Editors extends Authors {
  noAuthorBibliography(): string {
    return (this.bibliography()).replace('.', ', ed.');
  }

  noAuthorsNote(): string {
    return (`${this.note()}ed., `);
  }

  editorNote(): string {
    return `, ed. ${this.authors[0].first} ${this.authors[0].last}`;
  }

  editorBibliography(edition: string): string {
    if (edition !== '') {
      return ` Edited by ${this.authors[0].first} ${this.authors[0].last},`;
    }
    return ` Edited by ${this.authors[0].first} ${this.authors[0].last}.`;
  }
}
