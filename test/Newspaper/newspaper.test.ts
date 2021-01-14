import { newspaperBibliography, newspaperNote } from '../../src/Newspaper/newspaper';

let newspaper = {
  articleTitle: 'Article Title',
  newspaperTitle: 'Newspaper Title',
  authors: [{ first: 'First', last: 'Last' }],
  date: 'Date',
  edition: 'Edition',
};

let noEdition = {
  articleTitle: 'Article Title',
  newspaperTitle: 'Newspaper Title',
  authors: [{ first: 'First', last: 'Last' }],
  date: 'Date',
};

let url = {
  articleTitle: 'Article Title',
  newspaperTitle: 'Newspaper Title',
  authors: [{ first: 'First', last: 'Last' }],
  date: 'Date',
  edition: 'Edition',
  url: 'URL',
};

describe('Newspaper.note() testing', () => {
  it('should generate newspaper note with all fields specified', () => {
    expect(newspaperNote(newspaper)).toBe('First Last, "Article Title," Newspaper Title, Date, Edition.');
  });

  it('should generate newspaper note with no edition specified', () => {
    expect(newspaperNote(noEdition)).toBe('First Last, "Article Title," Newspaper Title, Date.');
  });

  it('should generate newspaper note with URL', () => {
    expect(newspaperNote(url)).toBe('First Last, "Article Title," Newspaper Title, Date, Edition, URL.');
  });
});

describe('Newspaper.bibliography() testing', () => {
  it('should generate newspaper bibliography with all fields specified', () => {
    expect(newspaperBibliography(newspaper)).toBe('Last, First. "Article Title." Newspaper Title, Edition, Date.');
  });

  it('should generate newspaper bibliography with no edition specified', () => {
    expect(newspaperBibliography(noEdition)).toBe('Last, First. "Article Title." Newspaper Title, Date.');
  });

  it('should generate newspaper bibliography with URL', () => {
    expect(newspaperBibliography(url)).toBe('Last, First. "Article Title." Newspaper Title, Edition, Date. URL.');
  });
});
