import Person from '../../src/Author/person';

let author = new Person('F. Scott', 'Fitzgerald');

describe('Person.ts testing', () => {
  test('should have first name', () => {
    expect(author.first).toBe('F. Scott');
  });

  test('should have last name', () => {
    expect(author.last).toBe('Fitzgerald');
  });

  test('should return true if empty', () => {
    expect(new Person().isEmpty()).toBe(true);
  });
});

describe('Person.noteString() testing', () => {
  it('should print author in note form', () => {
    expect(author.noteString()).toBe('F. Scott Fitzgerald, ');
  });
});

describe('Person.bibliographyString() testing', () => {
  it('should print author in bibliography form', () => {
    expect(author.bibliographyString()).toBe('Fitzgerald, F. Scott. ');
  });
});
