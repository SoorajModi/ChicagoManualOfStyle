export default class Author {
    first: string;

    last: string;

    constructor(first?: string, last?: string) {
      this.first = first || '';
      this.last = last || '';
    }

    noteString(): string {
      return (this.isEmpty()) ? '' : (`${this.first} ${this.last}, `);
    }

    bibliographyString(): string {
      return this.isEmpty() ? '' : (`${this.last}, ${this.first}. `);
    }

    isEmpty(): boolean {
      return (this.first === '' && this.last === '');
    }

    isValid(): boolean {
      return (this.first !== '' && this.last !== '');
    }
}
