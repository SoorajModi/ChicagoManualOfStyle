import { BookInfoInterface, createBookInfo } from './bookInfoInterface';

export function bookInfoNote(info: BookInfoInterface): string {
  let citation = createBookInfo(info);
  return (isBookInfoEmpty(citation)) ? '' : `(${createBookCitation(citation.publisher, citation.placeOfPublication, citation.yearOfPublication)})`;
}

export function bookInfoBibliography(info: BookInfoInterface): string {
  let citation = createBookInfo(info);
  return (isBookInfoEmpty(citation)) ? '' : `${createBookCitation(citation.publisher, citation.placeOfPublication, citation.yearOfPublication)}.`;
}

export function isBookInfoEmpty(info: BookInfoInterface): boolean {
  return (info.publisher === '' && info.placeOfPublication === '' && info.yearOfPublication === '');
}

function createBookCitation(pub: string, pop: string, year: string): string {
  return popBookCitation(pop, pub, year) + pubBookCitation(pub, year) + year;
}

function popBookCitation(pop: string, pub: string, year: string): string {
  if (pop === '') return pop;
  return (pub !== '' || year !== '') ? (`${pop}: `) : pop;
}

function pubBookCitation(pub: string, year: string): string {
  if (pub === '') return pub;
  return (year !== '') ? (`${pub}, `) : pub;
}
