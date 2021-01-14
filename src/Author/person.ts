export default class Person {
  first: string;

  last: string;

  constructor(first?: string, last?: string) {
    this.first = first || "";
    this.last = last || "";
  }

  noteString(): string {
    return this.isEmpty() ? "" : `${this.forwardString()}, `;
  }

  bibliographyString(): string {
    return this.isEmpty() ? "" : `${this.reverseString()}. `;
  }

  forwardString(): string {
    return `${this.first} ${this.last}`;
  }

  reverseString(): string {
    return `${this.last}, ${this.first}`;
  }

  isEmpty(): boolean {
    return this.first === "" && this.last === "";
  }

  isValid(): boolean {
    return this.first !== "" && this.last !== "";
  }
}
