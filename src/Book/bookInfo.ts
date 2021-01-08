import {BookInfoInterface, ValidBookInfoInterface, createBookInfo} from './bookInfoInterface';

export function bookInfoNote(info: BookInfoInterface): string {
  let citation: ValidBookInfoInterface = createBookInfo(info);
  return (isBookEmpty(citation)) ? '' : `${bookEditionNote(citation.edition)}${addSpaceBetweenElements(citation)}${createBookCitation(citation, true)}`;
}

export function bookInfoBibliography(info: BookInfoInterface): string {
  let citation: ValidBookInfoInterface = createBookInfo(info);
  return (isBookEmpty(citation)) ? '' : `${bookEditionBibliography(citation.edition)}${addSpaceBetweenElements(citation)}${createBookCitation(citation, false)}`;
}

function isBookEmpty(info: ValidBookInfoInterface): boolean {
  return (info.edition === '' && info.pub === '' && info.pop === '' && info.yop === '');
}

function isMiddleElementsEmpty(info: ValidBookInfoInterface): boolean {
  return (info.pub === '' && info.pop === '' && info.yop === '');
}

function bookEditionNote(edition: string): string {
  return (edition === '') ? '' : `, ${edition}`;
}

function bookEditionBibliography(edition: string): string {
  return (edition === '') ? '' : (` ${edition}.`);
}

function addSpaceBetweenElements(citation: ValidBookInfoInterface): string {
  return (isMiddleElementsEmpty(citation)) ? "" : " ";
}

function createBookCitation(citation: ValidBookInfoInterface, note: boolean): string {
  if (isMiddleElementsEmpty(citation)) return "";

  if (note) {
    return ("(" + generateMiddleElements(citation.pub, citation.pop, citation.yop) + ")");
  } else {
    return generateMiddleElements(citation.pub, citation.pop, citation.yop) + ".";
  }
}

function generateMiddleElements(pub: string, pop: string, year: string): string {
  return (popBookCitation(pop, pub, year) + pubBookCitation(pub, year) + year);
}

function popBookCitation(pop: string, pub: string, year: string): string {
  if (pop === '') return pop;
  return (pub !== '' || year !== '') ? (`${pop}: `) : pop;
}

function pubBookCitation(pub: string, year: string): string {
  if (pub === '') return pub;
  return (year !== '') ? (`${pub}, `) : pub;
}
