import {WebpageInterface, createWebpage, validWebpageInterface} from './webpageInterface';

export function webpageNote(info: WebpageInterface): string {
  let webpage: validWebpageInterface = createWebpage(info);
  return `${webpage.authorList.note()}"${webpage.title}," ${webpage.nameOfSite}, ${publisherCitation(webpage.publisher)}${webpage.date}${isCommaRequired(webpage.publisher, webpage.date)}${webpage.url}.`;
}

export function webpageBibliography(info: WebpageInterface): string {
  let webpage: validWebpageInterface = createWebpage(info);
  return `${webpage.authorList.bibliography()}"${webpage.title}." ${webpage.nameOfSite}. ${publisherCitation(webpage.publisher)}${webpage.date}${isPeriodRequired(webpage.publisher, webpage.date)}${webpage.url}.`;
}

export function webpageShortNote(info: WebpageInterface): string {
  let webpage: validWebpageInterface = createWebpage(info);
  return shortNotePrepend(webpage) + "\"" + webpage.title + ".\"";
}

function publisherCitation(publisher: string): string {
  return (publisher === '') ? publisher : `${publisher}, `;
}

function isCommaRequired(pub: string, date: string): string {
  return (pub === '' && date === '') ? '' : ', ';
}

function isPeriodRequired(pub: string, date: string): string {
  return (pub === '' && date === '') ? '' : '. ';
}

function shortNotePrepend(citation: validWebpageInterface): string {
  return (citation.authorList.length() > 0) ? citation.authorList.authors[0].last + ", " : citation.nameOfSite + ", ";
}